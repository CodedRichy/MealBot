# MealBot

AI-Powered Office Meal & Supply Coordinator for small and medium-sized enterprises (SMEs) in India. MealBot automates daily meal preference collection, enforces budget compliance, recommends menu options using Claude AI, and automates order fulfillment via Swiggy MCP (Model Context Protocol).

---

## 📂 Repository Layout

```
MealBot/
├── docs/                      # Project Memory & Documentation
│   ├── project_memory.md      # Core project status, stats, and constraints
│   ├── architecture.md        # Technical architecture, DB schemas, API references
│   ├── dev_log.md             # Developer logs, technical debt tracking, decision records
│   ├── tasks.md               # Dynamic project checklists
│   └── spec/                  # Product and business spec sheets
│       ├── product_documentation.md
│       ├── execution_plan.md
│       └── swiggy_builders_application.md
├── backend/                   # Node.js + Express API server
│   ├── src/                   # Source code
│   │   ├── config/            # DB, Redis, and API clients config
│   │   ├── controllers/       # Route controllers
│   │   ├── models/            # Database schema models
│   │   ├── routes/            # REST API endpoints
│   │   ├── services/          # Business logic & external APIs (Claude, Swiggy MCP, Twilio)
│   │   └── index.js           # Server entry point
│   ├── tests/                 # Jest integration and unit tests
│   ├── .env.example           # Example environmental variables template
│   └── package.json           # Backend npm dependency manifest
├── .gitignore                 # Dependency and secret exclusions
└── README.md                  # This file
```

---

## 🛠️ Tech Stack & Key Integrations
- **Core Engine**: Node.js + Express
- **Databases**: PostgreSQL (tenant state, preference storage), Redis (budget caches)
- **AI recommendation**: Claude API (variety optimization and preference processing)
- **Fulfillment**: Swiggy MCP client (search, menu fetches, automated carts)
- **Messaging**: Twilio WhatsApp API (automated user reminders & preference reactions)

---

## 🚀 Setup & Execution

### Prerequisites
- Node.js (v18+)
- PostgreSQL Database
- Redis Cache Instance

### Installation
1. Clone the repository.
2. Initialize backend packages:
   ```bash
   cd backend
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Fill in database links, API keys for Twilio, Claude, and Swiggy client OAuth configurations.
4. Launch the developer server:
   ```bash
   npm run dev
   ```

---

## 📄 Development Rules
MealBot adheres to the **Memory-First** workspace protocol.
- **Project state**: Consult [project_memory.md](file:///c:/Users/rishi/Documents/GitHub/MealBot/docs/project_memory.md) for current specs.
- **Tasks**: Check [tasks.md](file:///c:/Users/rishi/Documents/GitHub/MealBot/docs/tasks.md) for current checklists.
- **Decisions**: Refer to [dev_log.md](file:///c:/Users/rishi/Documents/GitHub/MealBot/docs/dev_log.md) before introducing structural changes.
- **Updates**: Always update memory documentation when modifying code files or updating deliverables.