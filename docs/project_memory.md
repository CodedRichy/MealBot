# Project Memory - MealBot

## Project Overview
MealBot is an AI-powered office meal and supply coordinator built for small and medium-sized enterprises (SMEs) with 10-50 people in India. It automates daily team preferences collection, enforces budget compliance, recommends optimal meals using Claude, and places orders via the Swiggy Model Context Protocol (MCP) or Instamart.

### Key Stats & Traction (As of May 2026)
- **Customers**: 8 paying SME customers (onboarded via manual/WhatsApp MVP)
- **MRR (Monthly Recurring Revenue)**: ~₹18,000 (Average Pro plan ₹1,500/month/team)
- **Orders Processed**: 250+ total orders (150 manual, 100 via WhatsApp MVP)
- **Uptime/Retention**: 100% Week 1 retention

---

## Core Features & Daily Flow
1. **10:00 AM WhatsApp Reminder**: Twilio sends a daily message to the team: "What's for lunch?"
2. **Preference Collection**: Team members reply with text/emoji responses on WhatsApp.
3. **AI Recommendation (Claude)**: Recommends 3-4 options matching budget limits, dietary restrictions, and historical cuisine variety.
4. **Admin Approval**: Admin reviews choices on a simple dashboard or WhatsApp message and clicks to approve.
5. **Swiggy MCP Fulfillment**: Orders are automatically placed using the approved cart config.
6. **Delivery Updates**: Status updates are pushed back to the team via WhatsApp.
7. **Instamart Restocking**: Coffee, tea, snacks, and toiletries are replenished weekly/bi-weekly.

---

## Architecture & Technology Stack
- **Backend**: Node.js + Express (API server)
- **Database**: PostgreSQL (relational team, preferences, order history, and PKCE credentials)
- **Caching**: Redis (real-time per-team daily budget tracking)
- **AI Engine**: Claude API (preference parsing, cuisine variety engine, menu combinations)
- **Messaging**: Twilio WhatsApp API
- **Order Delivery**: Swiggy MCP (Model Context Protocol client for food/Instamart orders)
- **Hosting**: AWS ap-south-1 (Mumbai)

---

## Technical Constraints & Design Principles
1. **Multi-tenant Isolation**: All team data (preferences, budgets, order history, and Swiggy OAuth tokens) must be strictly isolated per `team_id`.
2. **Security & Encryption**: 
   - OAuth 2.1 with PKCE for Swiggy accounts.
   - All access tokens and sensitive data double-encrypted in PostgreSQL using AES-256.
   - Strictly parameterized SQL queries (no string concatenation) to prevent SQL injection.
   - PII must be completely stripped or excluded from application log streams.
3. **Budget Enforcement**: Daily per-person budget tracking resides in Redis for atomic operations to prevent race conditions (overspending).
4. **Rate Limits**: 
   - 100 req/sec per customer
   - Swiggy MCP: 50 req/sec per team
5. **Compliance**: Indian Data Protection (DPDPA 2023) compliant.

---

## Core Documents Map
- **Project Memory**: `docs/project_memory.md` (This file)
- **Task Checklist**: `docs/tasks.md` (Active development pipeline)
- **Architecture**: `docs/architecture.md` (Database models, endpoints, data flow details)
- **Dev Log**: `docs/dev_log.md` (Technical log of decisions, changelogs, and tech debt)
- **Specifications Subfolder**: `docs/spec/`
  - [Product Specs](file:///c:/Users/rishi/Documents/GitHub/MealBot/docs/spec/product_documentation.md)
  - [Execution Roadmap](file:///c:/Users/rishi/Documents/GitHub/MealBot/docs/spec/execution_plan.md)
  - [Swiggy Builders Application](file:///c:/Users/rishi/Documents/GitHub/MealBot/docs/spec/swiggy_builders_application.md)
