# Project Tasks Checklist

This checklist tracks deliverables based on the MealBot 6-Week Execution Plan.

---

## Active Phase: Week 1-2 Workspace Setup

### [x] Phase 0: Workspace Reorganization & Documentation
- [x] Create `docs/` and `docs/spec/` directories
- [x] Relocate legacy specifications (`MealBot_Product_Documentation.md`, etc.) to `docs/spec/`
- [x] Initialize primary memory documents:
  - [x] `docs/project_memory.md`
  - [x] `docs/architecture.md`
  - [x] `docs/dev_log.md`
  - [x] `docs/tasks.md`
- [x] Initialize Node.js Express skeleton backend in `/backend`

---

## Upcoming Phases

### [ ] Phase 1: Manual MVP Validation (Week 1-2)
- [ ] Create spreadsheet templates for tracking manual preference collection
- [ ] Establish initial Google Form for customer onboarding
- [ ] Pitch and sign up 3 initial SME test teams in Kochi/Kerala
- [ ] Run manual daily coordination iterations (10 AM ping → option selection → manual Swiggy placement)
- [ ] Collect time savings metrics and pricing validation feedback

### [ ] Phase 2: Build Twilio WhatsApp Bot MVP (Week 3)
- [ ] Configure Twilio Sandbox for WhatsApp messaging
- [ ] Integrate Express webhook handler to parse incoming messages/emoji reactions
- [ ] Build basic Claude API integration to analyze team preferences and suggest options
- [ ] Set up PostgreSQL models (Teams, Preferences, Orders) on database server
- [ ] Conduct end-to-end testing with 2 sandbox teams

### [ ] Phase 3: Scaling & Customer Acquisition (Week 4)
- [ ] Onboard 3-5 more teams onto the automated WhatsApp MVP
- [ ] Implement paid tiers billing setup (₹500 Basic / ₹1,500 Pro)
- [ ] Collect feedback and measure prediction accuracy of Claude's suggestions

### [ ] Phase 4: Swiggy Builders Club Preparation & Submission (Week 5-6)
- [ ] Complete security hardening checklist (AES-256 field encryption for OAuth tokens)
- [ ] Compile case studies, user testimonials, and MRR metrics
- [ ] Complete and submit the Swiggy Builders Club application
- [ ] Draft preparation responses for Swiggy's security and scale questions
