# System Architecture & Design Specification

This document details the system design, data models, Redis caching strategy, API endpoints, and authentication flows for the MealBot platform.

---

## 1. System Topology & Data Flow

```
   ┌────────────────────────────────────────────────────────┐
   │                  MealBot Backend (AWS)                 │
   │                                                        │
   │   ┌──────────────────────────────────────────────┐     │
   │   │ Express.js API Server                        │     │
   │   │ - Routes requests from Twilio and Dashboard  │     │
   │   │ - Handles PKCE authentication flow           │     │
   │   │ - Orchestrates order pipelines               │     │
   │   └──────────────────────┬───────────────────────┘     │
   │                          │                             │
   │                          ▼                             │
   │   ┌──────────────────────────────────────────────┐     │
   │   │ Claude API Preference Engine                 │     │
   │   │ - Parses raw preferences and reactions       │     │
   │   │ - Synthesizes optimal, varied menu options   │     │
   │   └──────────────────────┬───────────────────────┘     │
   │                          │                             │
   │                          ▼                             │
   │   ┌──────────────────────────────────────────────┐     │
   │   │ Database Layer                               │     │
   │   │ - PostgreSQL (persistent tenant records)      │     │
   │   │ - Redis (transient budgets & active state)   │     │
   │   └──────────────────────────────────────────────┘     │
   └─────────────┬───────────┬──────────────┬───────────────┘
                 │           │              │
                 ▼           ▼              ▼
           ┌───────────┐┌───────────┐┌───────────────┐
           │Swiggy MCP ││Twilio API ││Admin Dashboard│
           │(Orders)   ││(WhatsApp) ││(React Web App)│
           └───────────┘└───────────┘└───────────────┘
```

### Data Pipeline
1. **User Action**: Team member registers a culinary preference on WhatsApp (e.g., text "Chicken Shawarma" or reacts with emoji).
2. **Web Hook**: Twilio sends the payload to MealBot Express `/api/preferences/:team_id`.
3. **Persist & Analyze**: Preference is stored in PostgreSQL. At coordination time, Claude API processes the accumulated preferences.
4. **Optimize**: Claude runs a scoring match using budget guidelines, restrictions (e.g., veg/vegan), and historical frequency (avoiding restaurant repetition).
5. **Recommend**: Recommendations are compiled and sent to the Admin Dashboard.
6. **Fulfill**: Once the Admin selects an option, MealBot calls Swiggy MCP (`search_restaurants`, `get_menu`, `add_to_cart`, `place_order`) to execute the purchase.
7. **Notify**: Confirmation status is relayed via Twilio to the WhatsApp group.

---

## 2. Data Models (PostgreSQL Schemas)

### `teams` Table
```sql
CREATE TABLE teams (
    team_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    size INTEGER NOT NULL CHECK (size > 0),
    budget_daily DECIMAL(10, 2) NOT NULL CHECK (budget_daily > 0.00),
    location VARCHAR(255) NOT NULL,
    reminder_time TIME DEFAULT '10:00:00',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### `preferences` Table
```sql
CREATE TABLE preferences (
    preference_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    team_id UUID REFERENCES teams(team_id) ON DELETE CASCADE,
    member_name VARCHAR(100) NOT NULL,
    cuisine VARCHAR(100) NOT NULL,
    dietary VARCHAR(100)[], -- array of restrictions (e.g., 'Veg', 'Halal')
    dislikes VARCHAR(100)[],
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### `orders` Table
```sql
CREATE TABLE orders (
    order_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    team_id UUID REFERENCES teams(team_id) ON DELETE CASCADE,
    restaurant_name VARCHAR(255) NOT NULL,
    items JSONB NOT NULL, -- e.g., [{"item_id": "123", "name": "Biryani", "quantity": 10}]
    cost DECIMAL(10, 2) NOT NULL CHECK (cost >= 0.00),
    swiggy_order_id VARCHAR(255) UNIQUE,
    status VARCHAR(50) NOT NULL DEFAULT 'pending',
    ordered_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### `budgets` Table
```sql
CREATE TABLE budgets (
    budget_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    team_id UUID REFERENCES teams(team_id) ON DELETE CASCADE,
    monthly_limit DECIMAL(10, 2) NOT NULL,
    spent_month DECIMAL(10, 2) DEFAULT 0.00,
    spent_year DECIMAL(10, 2) DEFAULT 0.00,
    last_reset TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### `swiggy_tokens` Table (Double Encrypted)
```sql
CREATE TABLE swiggy_tokens (
    token_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    team_id UUID REFERENCES teams(team_id) ON DELETE CASCADE UNIQUE,
    encrypted_oauth_token TEXT NOT NULL,
    encrypted_refresh_token TEXT NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

---

## 3. Caching Strategy (Redis)

Redis is deployed to manage transient session states, rate limits, and real-time per-team daily budget details to eliminate Postgres write-bottlenecks and prevent double-order race conditions.

### Redis Keys Structure:
- **`team:<team_id>:budget_spent_today`** (String)
  - Tracks running daily expenses. Incremented atomically on card allocation (`INCRBYFLOAT`).
  - Expires automatically at midnight (local time).
- **`team:<team_id>:rate_limit`** (String/Counter)
  - Tracks request volume to Swiggy MCP APIs.
  - TTL: 1 minute (sliding window).
- **`session:<user_id>`** (String)
  - User Dashboard active JWT sessions.
  - TTL: 15 minutes.

---

## 4. API Endpoint Reference

### Admin Dashboard & Team Control
- **`POST /api/teams`**: Registers a new team.
- **`GET /api/teams/:id`**: Fetches team metrics.
- **`PATCH /api/teams/:id`**: Alters team limits or reminders.

### Preference Handling
- **`POST /api/preferences/:team_id`**: Saves team member settings.
- **`GET /api/preferences/:team_id`**: List current settings.

### Ordering Pipeline
- **`POST /api/orders/:team_id/suggest`**: Directs Claude to compile matching dishes based on preferences.
- **`POST /api/orders/:team_id/place`**: Triggers Swiggy MCP order pipeline.
- **`GET /api/orders/:team_id/history`**: Fetches past logs.

### Budget Dashboard
- **`GET /api/budget/:team_id`**: Returns current daily limit vs remaining.
- **`POST /api/budget/:team_id/alert`**: configures alert percentages.

---

## 5. Security Architecture

### Authentication: OAuth 2.1 with PKCE
To allow MealBot to place orders via Swiggy on behalf of users securely, we use OAuth 2.1 with PKCE:
1. **Authorization Code Flow**: MealBot initiates authorization by generating a high-entropy `code_verifier` and its SHA256-hashed `code_challenge`.
2. **Consent & Verification**: The administrator logs in via Swiggy and grants access. Swiggy returns an authorization code.
3. **Token Exchange**: MealBot passes the code and original `code_verifier` to retrieve access and refresh tokens.
4. **Rotation**: The Swiggy access token rotates every 7 days; refresh tokens rotate monthly.

### Cryptographic Configuration
- **Encryption-at-Rest**: PG fields housing sensitive strings (`encrypted_oauth_token`, `encrypted_refresh_token`) are encrypted with `AES-256-GCM` using keys stored securely in AWS Secrets Manager.
- **Transport Security**: Handled strictly via TLS 1.3.
