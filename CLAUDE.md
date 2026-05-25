# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

Documentation-complete, implementation-ready. Awaiting Swiggy Builders Club approval before full MCP integration. Core validation done: 8 paying SME customers, ₹18k MRR, 250+ orders via manual/WhatsApp MVP.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Node.js + Express |
| Database | PostgreSQL (primary), Redis (real-time budget cache) |
| AI | Claude API (preference learning & meal recommendations) |
| Messaging | Twilio WhatsApp API |
| Order integration | Swiggy MCP (food + Instamart) |
| Hosting | AWS ap-south-1 (Mumbai) |

## Architecture

```
WhatsApp (User) → Twilio → Express API → Claude API
                                      → Swiggy MCP → Swiggy Backend
                                      → PostgreSQL + Redis
```

**Core daily flow:** 10 AM WhatsApp reminder → team preference collection → Claude generates 3-4 restaurant options → admin 1-click approval → Swiggy MCP places order → delivery tracking pushed to WhatsApp.

## Key Specifications

- **`MealBot_Product_Documentation.md`** — full product spec, API reference, feature definitions
- **`MealBot_6Week_Execution_Plan.md`** — phased rollout plan, checkpoint metrics
- **`MealBot_Swiggy_Builders_Application.md`** — Swiggy MCP integration architecture, OAuth 2.1 config, security posture, infra scaling plan

## API Structure

```
POST   /api/teams
GET    /api/teams/:id
PATCH  /api/teams/:id

POST   /api/preferences/:team_id
GET    /api/preferences/:team_id

POST   /api/orders/:team_id/suggest    # Claude generates recommendations
POST   /api/orders/:team_id/place      # Places via Swiggy MCP
GET    /api/orders/:team_id/history

GET    /api/budget/:team_id            # Redis-backed real-time status
POST   /api/budget/:team_id/alert
```

## Swiggy MCP Endpoints

`search_restaurants`, `get_menu`, `add_to_cart`, `place_order`, `get_order_status`
Instamart: `search_products`, `add_to_cart`, `place_order`

Auth: OAuth 2.1 with PKCE. Redirect URIs:
- Prod: `https://mealbot.app/auth/swiggy/callback`
- Dev: `http://localhost:3000/auth/swiggy/callback`

## Security Requirements

- JWT (15 min expiry) + refresh tokens (30-day rotation)
- AES-256 at rest (PostgreSQL), TLS 1.3 in transit
- Parameterized queries only (no string concatenation in SQL)
- Rate limiting: 100 req/sec per customer
- Secrets in AWS Secrets Manager — never hardcoded
- PII excluded from logs
- DPDPA 2023 compliant (India)

## Data Model (Planned)

Multi-tenant by team. Each team has isolated preferences, orders, and budget data. Redis keys scoped per `team_id` for real-time budget tracking. Budget alerts fire at 50%, 75%, 80% thresholds.

## Planned Tooling

- Tests: Jest
- CI/CD: GitHub Actions
- Deploy: Docker + AWS CodeDeploy
- Dev server: Node.js with hot reload
