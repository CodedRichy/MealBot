# MealBot Product Documentation
## AI-Powered Office Meal & Supply Coordinator for SMEs

**Version:** 1.0  
**Last Updated:** May 2026  
**Status:** MVP (Ready for Swiggy Integration)

---

## TABLE OF CONTENTS

1. [Product Overview](#product-overview)
2. [Getting Started](#getting-started)
3. [Core Features](#core-features)
4. [How It Works](#how-it-works)
5. [Technical Architecture](#technical-architecture)
6. [API Reference](#api-reference)
7. [Pricing](#pricing)
8. [FAQ](#faq)
9. [Support](#support)

---

## PRODUCT OVERVIEW

### What is MealBot?

MealBot is an AI-powered agent that automates office meal coordination and supply management for small teams (10-50 people). It learns team preferences, enforces budget limits, coordinates Swiggy Food + Instamart orders, and saves admin teams 5+ hours per week.

### Who is it for?

- **Startups** (10-50 people)
- **Design/Creative Agencies**
- **Coworking Spaces**
- **Small Consulting Firms**
- **Tech Companies** with flexible WFH policies

### The Problem We Solve

**Before MealBot:**
- HR/Admin spends 5+ hours/week on meal coordination
- No budget control (overspend by 15-20%)
- Limited variety (same vendors, low satisfaction)
- No data on preferences or spending patterns
- Office supplies constantly run out

**After MealBot:**
- Automated daily coordination (5 min admin time)
- Budget enforced (never overspend)
- AI learns preferences (variety increases)
- Full analytics dashboard
- Supplies auto-replenished

### Key Benefits

| Benefit | Savings | Impact |
|---------|---------|--------|
| **Time Saved** | 5+ hours/week | ₹1,500-2,500/month value |
| **Cost Reduction** | 15-20% | ₹3,000-5,000/month savings |
| **Employee Satisfaction** | +40% | Better retention |
| **Budget Control** | 100% compliance | No overspending |

---

## GETTING STARTED

### Onboarding Process

#### Step 1: Sign Up (5 minutes)
- Visit MealBot dashboard (or WhatsApp)
- Enter team name, size, location
- Set daily budget limit (₹200-500/person/day)
- Confirm dietary restrictions/preferences

#### Step 2: Add Team Members (10 minutes)
- Invite via WhatsApp/email
- Members set their preferences:
  - Favorite cuisines
  - Dietary restrictions (veg, vegan, gluten-free, etc.)
  - Allergies
  - Dislikes

#### Step 3: First Coordination (Automated)
- Next day at 10 AM: MealBot sends WhatsApp reminder
- Team responds with preferences (emoji reactions or text)
- MealBot suggests restaurants + items
- Admin confirms (1 click)
- Order placed automatically
- Team notified of delivery time

#### Step 4: Payment
- Split via UPI or company credit
- Invoice generated monthly
- Expense report for accounting

### First Week Checklist

- [ ] Team fully onboarded
- [ ] All members added preferences
- [ ] Set daily budget limit
- [ ] First 5 orders completed
- [ ] Team gave feedback

---

## CORE FEATURES

### 1. Daily Meal Coordination

**How it works:**
- Daily reminder at 10 AM (customizable)
- Team responds with preferences
- AI recommends restaurants based on:
  - Team preferences (learned over time)
  - Budget limit (enforced)
  - Dietary restrictions
  - Cuisine variety (avoids repetition)
  - Delivery time
- Admin confirms in 1 click
- Order placed automatically via Swiggy

**What admin saves:**
- Instead of: "What do you want?" → manual calls → place order → track delivery (45 min)
- Now: 1 confirmation click + bot handles rest (5 min)

### 2. Preference Learning

**How it works:**
- MealBot tracks every preference selection
- Claude AI learns patterns:
  - "Raj always picks meat curry"
  - "Sarah prefers vegan"
  - "Team likes variety on Friday"
- Future recommendations improve automatically
- Admin spends less time negotiating

**Accuracy improves over time:**
- Week 1: 60% preference match
- Week 2: 75% preference match
- Week 4: 90%+ preference match

### 3. Budget Control

**Features:**
- Set daily budget per person (₹200-500)
- Real-time tracking:
  - "₹2,400/₹2,500 spent today"
  - Budget resets daily
- Alerts:
  - "Budget will exceed if you order biryani. Choose paneer instead?"
  - "50% budget used by 1 PM"
- Monthly reports:
  - Total spent: ₹45,000
  - Average per person: ₹2,250
  - Cost vs. eating out: 60% cheaper

**What this prevents:**
- Overspending (keeps you on budget)
- Financial surprises
- Accountability

### 4. Office Supplies Coordination

**Automatic restocking:**
- Coffee, tea, sugar, snacks (weekly)
- Toilet paper, hand sanitizer (bi-weekly)
- Water bottles, cups (as needed)
- Custom items (ask in settings)

**How it works:**
- Integrated with Instamart
- Auto-orders based on team size + usage
- Delivered same day
- Budget separate from meals

**Typical cost:** ₹2,000-3,000/month for 20-person team

### 5. Analytics Dashboard

**Available Reports:**
- Daily/weekly/monthly spending
- Most popular restaurants
- Most popular cuisines
- Team preferences (visual breakdown)
- Cost trends (spending over time)
- Budget compliance (on track or over?)

**Export options:**
- PDF reports for accounting
- CSV for expense management
- Email weekly summaries

### 6. Admin Controls

**Customization:**
- Change reminder time (default: 10 AM)
- Add/remove team members
- Set dietary restrictions globally
- Block restaurants (if team dislikes)
- Set budget limits (daily/monthly)
- Blackout dates (weekends, holidays)

**Approvals:**
- Manual approval required (admin clicks "yes")
- OR auto-approve if within preferences
- Override recommendations anytime

---

## HOW IT WORKS

### Daily Workflow

```
10:00 AM
├─ MealBot sends WhatsApp: "🍽️ What for lunch today?"
│
Team Responds (10:05 AM - 10:15 AM)
├─ Raj: "Biryani 🍗"
├─ Sarah: "Vegan curry 🥬"
├─ Ram: "Paneer tikka 🧀"
└─ Others: Emoji reactions
│
MealBot Processes (10:16 AM)
├─ Parses preferences (meat, vegan, paneer)
├─ Checks budget: ₹2,500 available for 20 people = ₹125/person
├─ Calls Claude: "Suggest restaurants matching preferences + budget"
├─ Claude recommends:
│  Option 1: Wow! Momo (₹120/person) - Mix of items
│  Option 2: Biryani Point (₹150/person) - Biryani focus
│  Option 3: Fresh Leaf (₹110/person) - Vegan focus
│
Admin Reviews (10:17 AM - 10:25 AM)
├─ Sees 3 options in dashboard
├─ Approves: "Go with Option 1 (Wow! Momo)"
│
MealBot Orders (10:26 AM)
├─ Calls Swiggy MCP
├─ Places order for 20 people (mix of items)
├─ Gets order ID + ETA
│
Team Notified (10:27 AM)
├─ "Order confirmed! 🎉"
├─ "Restaurant: Wow! Momo"
├─ "Delivery ETA: 12:15 PM"
├─ "Budget: ₹2,400/₹2,500 (96% used)"
│
Delivery (12:15 PM)
├─ "Order arriving now!"
├─ Team eats
│
Payment (same day or next day)
├─ ₹2,400 deducted from account
├─ Receipt generated for accounting
└─ Preferences + feedback logged
```

### Weekly Workflow

**Monday:**
- MealBot learns from past week (which restaurants were rated highest)
- Suggests new options for variety

**Friday:**
- Special "Team Dinner" mode
- Higher budget suggested (celebrate end of week)
- Admin can book from Dineout if desired

**Month-End:**
- Analytics report generated
- "Cost Savings This Month: ₹12,000"
- Budget compliance: 98%

---

## TECHNICAL ARCHITECTURE

### System Components

```
┌─────────────────────────────────────────────┐
│          MealBot Backend (AWS)              │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │ API Server (Node.js + Express)        │ │
│  │ - Team management                     │ │
│  │ - Preference handling                 │ │
│  │ - Order orchestration                 │ │
│  └───────────────────────────────────────┘ │
│                    ↓                        │
│  ┌───────────────────────────────────────┐ │
│  │ Claude API (Preference Learning)      │ │
│  │ - Analyze team preferences            │ │
│  │ - Generate recommendations            │ │
│  │ - Learn patterns                      │ │
│  └───────────────────────────────────────┘ │
│                    ↓                        │
│  ┌───────────────────────────────────────┐ │
│  │ Database Layer                        │ │
│  │ - PostgreSQL (teams, orders, prefs)   │ │
│  │ - Redis (real-time budget tracking)   │ │
│  └───────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
           ↓                    ↓              ↓
    ┌──────────────┐     ┌──────────────┐   ┌──────────────┐
    │ Swiggy MCP   │     │ Twilio API   │   │ Admin        │
    │ (Food orders)│     │ (WhatsApp)   │   │ Dashboard    │
    └──────────────┘     └──────────────┘   └──────────────┘
```

### Data Flow

```
User Input (WhatsApp)
    ↓
Twilio receives message
    ↓
MealBot API processes
    ↓
Store in PostgreSQL
    ↓
Claude API analyzes preferences
    ↓
Generate recommendations
    ↓
Admin reviews (dashboard)
    ↓
Admin approves
    ↓
Swiggy MCP: search_restaurants()
    ↓
Swiggy MCP: get_menu()
    ↓
Swiggy MCP: add_to_cart()
    ↓
Swiggy MCP: place_order()
    ↓
Order confirmation → WhatsApp
    ↓
Delivery tracking
    ↓
Budget deduction
    ↓
Log for future learning
```

### Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React (web) + Twilio (WhatsApp) | User interface |
| **Backend** | Node.js + Express | API server |
| **Database** | PostgreSQL | Persistent data |
| **Cache** | Redis | Real-time budget |
| **AI** | Claude API | Preference learning |
| **Messaging** | Twilio WhatsApp | Chat interface |
| **Payments** | Swiggy billing | Order settlement |
| **Hosting** | AWS (ap-south-1) | India region |
| **Integration** | Swiggy MCP | Food/Instamart orders |

### Authentication & Security

```
User Login Flow:
1. User clicks "Login with Swiggy"
2. OAuth 2.1 redirect to Swiggy
3. User authorizes MealBot
4. Swiggy returns auth code
5. MealBot backend exchanges code for token
6. Token encrypted in database
7. JWT issued to frontend
8. User authenticated for 15 minutes
9. Refresh token rotates every 24 hours

Data Security:
- AES-256 encryption at rest
- TLS 1.3 encryption in transit
- OAuth tokens double-encrypted
- No plaintext passwords
- Rate limiting (100 req/sec per customer)
```

---

## API REFERENCE

### Core Endpoints

#### Teams

```
POST /api/teams
Create a new team
Body: { name, size, budget_daily, location }
Response: { team_id, api_key, created_at }

GET /api/teams/{id}
Get team details
Response: { name, size, budget, members, settings }

PATCH /api/teams/{id}
Update team settings
Body: { budget_daily, reminder_time, ... }
Response: { updated_fields }
```

#### Preferences

```
POST /api/preferences/{team_id}
Save team member preference
Body: { member_name, cuisine, restrictions, dislikes }
Response: { preference_id, saved_at }

GET /api/preferences/{team_id}
Get all team preferences
Response: [ { member_name, cuisine, restrictions }, ... ]
```

#### Orders

```
POST /api/orders/{team_id}/suggest
Get AI recommendations
Body: { date, budget, preferences }
Response: [ { restaurant, items, price, rationale }, ... ]

POST /api/orders/{team_id}/place
Place order via Swiggy MCP
Body: { restaurant_id, items, delivery_address }
Response: { order_id, swiggy_order_id, eta, status }

GET /api/orders/{team_id}/history
Get past orders
Response: [ { order_id, date, items, cost, rating }, ... ]
```

#### Budget

```
GET /api/budget/{team_id}
Get real-time budget status
Response: { daily_limit, spent_today, remaining, percentage }

POST /api/budget/{team_id}/alert
Set budget alert threshold
Body: { alert_at_percentage: 80 }
Response: { alert_configured }
```

### Swiggy MCP Integration

```
// Inside MealBot backend (users don't call directly)

Swiggy.searchRestaurants({
  latitude, longitude,
  query: "biryani",
  budget_per_person: 125,
  delivery_time: 30
})
→ Returns list of restaurants

Swiggy.getMenu({
  restaurant_id
})
→ Returns menu items + prices

Swiggy.addToCart({
  restaurant_id,
  items: [ { item_id, quantity }, ... ],
  delivery_address
})
→ Returns cart with total

Swiggy.placeOrder({
  cart_id,
  delivery_address,
  payment_method: "upi"
})
→ Returns order_id, eta, status
```

---

## PRICING

### Plans

#### Basic
- **Cost:** ₹500/month
- **Team Size:** Up to 20 people
- **Features:**
  - Daily meal coordination
  - Basic preference tracking
  - Budget enforcement
  - WhatsApp bot
  - Email support
- **Ideal For:** Small teams, startups

#### Pro
- **Cost:** ₹1.5k/month
- **Team Size:** Up to 50 people
- **Features:**
  - Everything in Basic
  - Advanced preference learning
  - Supplies coordination (coffee, snacks)
  - Analytics dashboard
  - Custom dietary restrictions
  - Priority support
- **Ideal For:** Growing teams, agencies

#### Enterprise
- **Cost:** Custom (₹5k+/month)
- **Team Size:** 100+ people
- **Features:**
  - Everything in Pro
  - API access (custom integrations)
  - Dedicated account manager
  - Custom workflows
  - SLA guarantees
  - On-premise options
- **Ideal For:** Large teams, corporations

### Pricing Model

- **Monthly subscription** (auto-renew)
- **14-day free trial** (no card required)
- **Cancel anytime** (no long-term contracts)
- **Tax:** Prices exclude GST (if applicable)

### What's NOT Included

- Cost of food orders (you pay Swiggy directly)
- Delivery charges (Swiggy's standard rates apply)
- Supplies cost (Instamart pricing)

MealBot only charges for coordination automation, not for the orders themselves.

---

## FAQ

### General

**Q: How is MealBot different from Swiggy DeskEats?**
A: DeskEats is for individual ordering (type "office" in app). MealBot is for team coordination:
- Learns team preferences
- Enforces budget limits
- Coordinates supplies
- Saves admin 5+ hours/week
DeskEats requires everyone to click the app daily. MealBot requires just admin approval.

**Q: What if someone has dietary restrictions?**
A: MealBot tracks:
- Vegetarian/vegan/jain
- Gluten-free
- Lactose-free
- Nut allergies
- Halal/other restrictions
You can set these during onboarding.

**Q: How much can we save?**
A: Typical savings:
- **Time:** ₹1,500-2,500/month value
- **Cost:** 15-20% reduction (₹3,000-5,000/month)
- **Total:** ₹4,500-7,500/month benefit for typical 20-person team

**Q: Is WhatsApp secure for business?**
A: Yes. MealBot uses:
- End-to-end encryption (WhatsApp standard)
- OAuth 2.1 authentication
- No sensitive data stored unencrypted
- DPDPA 2023 compliant

### Integration

**Q: Does MealBot work with our current Swiggy account?**
A: Yes. MealBot uses Swiggy MCP (Model Context Protocol):
- You authenticate once with Swiggy
- MealBot places orders on your behalf
- Your Swiggy account/credits work normally

**Q: Can we integrate with other food apps?**
A: Currently Swiggy only (built on Swiggy MCP). Zomato integration planned for Q3 2026.

**Q: What if Swiggy is unavailable?**
A: MealBot has fallback:
- Shows cached menu data
- Allows manual order placement
- Automatic retry every 5 minutes

### Technical

**Q: Where is our data stored?**
A: AWS (Mumbai region, ap-south-1):
- Encrypted at rest (AES-256)
- Daily backups
- 99.9% uptime SLA

**Q: How does preference learning work?**
A: Claude AI analyzes:
- Every preference selection
- Past orders + ratings
- Cuisine variety (avoids repetition)
- Budget constraints
Recommendations improve over time.

**Q: Can we export our data?**
A: Yes. Anytime you can:
- Download full data export (CSV)
- Export analytics reports (PDF)
- Request complete data deletion

### Support

**Q: How do we get help?**
A: Multiple channels:
- **Email:** support@mealbot.app (24 hours)
- **WhatsApp:** +91-XXXXXXXXXX (business hours)
- **Dashboard:** Help & documentation
- **Pro/Enterprise:** Dedicated account manager

**Q: What if something breaks?**
A: We have SLA:
- **Critical issue:** Fixed within 2 hours
- **High priority:** Fixed within 24 hours
- **Medium:** Fixed within 3 days

**Q: Do you offer training?**
A: Yes (included in Pro/Enterprise):
- Onboarding call (30 min)
- Team training session (optional)
- Weekly tips & best practices

---

## SUPPORT

### Getting Help

**Before contacting support, try:**
1. Check FAQ above
2. Read documentation
3. Check dashboard help section
4. Try logging out + logging back in

### Contact Support

**Email:** support@mealbot.app  
**Response Time:** 24 hours (basic), 2 hours (pro/enterprise)

**WhatsApp:** +91-XXXXXXXXXX  
**Hours:** 10 AM - 6 PM IST, Mon-Fri

**Dashboard:** In-app help + documentation

### Feedback

We love feedback! Tell us:
- What's working well
- What needs improvement
- Features you want
- Bugs or issues

Use the feedback button in dashboard or email support@mealbot.app.

### Status & Uptime

Check real-time status at: https://status.mealbot.app  
Subscribe to status updates to get alerts for any issues.

---

## ROADMAP

### Q2 2026 (Current)
- ✅ MVP with Swiggy Food
- ✅ Preference learning
- ✅ Budget enforcement
- 🔄 Swiggy Builders Club approval

### Q3 2026
- Instamart supplies integration
- Dineout reservations
- Zomato support
- Analytics dashboard enhancements

### Q4 2026
- Slack/Teams integration
- Mobile app
- API for custom integrations
- SOC2 Type II certification

### Q1 2027
- Multi-office support
- Advanced reporting
- Integration with accounting software
- International expansion

---

## CHANGELOG

### Version 1.0 (May 2026)
- Initial MVP launch
- Swiggy Food integration
- WhatsApp bot
- Preference learning (Claude)
- Budget enforcement
- Basic analytics
- Team management

---

**Questions? Contact support@mealbot.app or WhatsApp us!**

**Last updated:** May 25, 2026  
**Next review:** June 25, 2026
