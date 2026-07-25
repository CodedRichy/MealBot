<div align="center">

# MealBot

**AI-powered office meal coordinator for Indian SMEs.**

Automates daily meal preference collection, budget compliance, menu recommendations via Claude AI, and order fulfillment via Swiggy MCP.

[![Node.js 18+](https://img.shields.io/badge/node-18+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/express-5-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com)
[![Claude AI](https://img.shields.io/badge/claude-AI-d4a574?style=flat-square)](https://anthropic.com)

</div>

---

## What It Does

Indian offices waste hours coordinating daily meals -- collecting preferences via WhatsApp, checking budgets, browsing Swiggy, placing orders. MealBot automates the entire loop:

1. **Collect** -- WhatsApp reminders ask employees for meal preferences
2. **Optimize** -- Claude AI balances variety, dietary needs, and budget constraints
3. **Order** -- Swiggy MCP client searches restaurants, builds carts, places orders
4. **Track** -- Budget compliance, preference history, and spending analytics

## Tech Stack

| Component | Technology |
|-----------|-----------|
| **Backend** | Node.js + Express |
| **Database** | PostgreSQL (tenant state, preferences) |
| **Cache** | Redis (budget state, session) |
| **AI** | Claude API (menu optimization, preference processing) |
| **Fulfillment** | Swiggy MCP (search, menu fetch, cart automation) |
| **Messaging** | Twilio WhatsApp API |

## Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL
- Redis

### Install

```bash
git clone https://github.com/CodedRichy/MealBot.git
cd MealBot/backend
npm install
cp .env.example .env
# Configure: DATABASE_URL, REDIS_URL, ANTHROPIC_API_KEY, TWILIO_*, SWIGGY_*
npm run dev
```

## Project Structure

```
MealBot/
  backend/
    src/
      config/         DB, Redis, API client config
      controllers/    Route controllers
      models/         Database schema models
      routes/         REST API endpoints
      services/       Business logic (Claude, Swiggy MCP, Twilio)
      index.js        Server entry point
  docs/
    spec/             Product docs and execution plan
    architecture.md   Technical architecture and DB schemas
    project_memory.md Project status and constraints
```

## Status

Early stage -- core architecture defined, backend scaffold in place. Active development.

---

<div align="center">

Built by [Rishi Praseeth Krishnan](https://rishipraseeth.in)

</div>
