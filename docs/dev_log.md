# Developer Log & Decision Records

This log details the developmental progression, architectural decisions, and tracked technical debt in the MealBot project.

---

## Technical Decisions Log

### 2026-05-25: Restructure Workspace & Establish Documentation
* **Context**: The repository was initialized with only high-level specs in the root directory, lacking a structured source-of-truth and a clear folder hierarchy for development.
* **Decision**: 
  - Relocated specification documents (`Product Specs`, `Execution Plan`, and `Swiggy Builders Application`) from the root directory into `docs/spec/`.
  - Created standard memory documents (`project_memory.md`, `architecture.md`, `tasks.md`, `dev_log.md`) in `docs/` to satisfy strict context retention guidelines.
  - Setup the initial Node.js Express backend framework.
* **Status**: Completed.

### 2026-05-25: Multi-tenant Scoping using PostgreSQL & Redis
* **Context**: Need robust budget validation to prevent double-ordering and isolate data access.
* **Decision**: Adopt PostgreSQL as the primary transactional system for team records and order history, paired with Redis for atomic daily budget decrements and active session state.
* **Rationale**: Multi-tenant security requires relational constraints, while active budget checking requires sub-millisecond atomic locking to block concurrent checkout requests from exceeding daily limits.
* **Status**: Planned (Design validated).

---

## Technical Debt Tracker

### [TECH_DEBT] Swiggy MCP Sandbox Testing
* **Severity**: MEDIUM
* **Impact**: We cannot perform end-to-end integration testing of order placement APIs without the Swiggy Builders Club sandboxed API credentials.
* **Mitigation**: Implement a mock Swiggy client interface (`MockSwiggyService`) to stub `searchRestaurants`, `getMenu`, `addToCart`, and `placeOrder` methods for local development and test coverage until approval is finalized.

### [TECH_DEBT] OAuth 2.1 PKCE Encryption Strategy
* **Severity**: HIGH
* **Impact**: Storing Swiggy API authorization keys securely is critical. If compromised, attackers could place unauthorized transactions on customer accounts.
* **Mitigation**: Develop a helper module utilizing Node's native `crypto` library (AES-256-GCM) with key rotation. Ensure keys are NEVER committed to source control and are loaded exclusively from environmental variables.

---

## Change Log

### v0.1.0-alpha (2026-05-25)
- Repository organization: Moved legacy doc sheets to `docs/spec/`.
- Configured `.gitignore` and `README.md` layout.
- Created `project_memory.md`, `architecture.md`, `dev_log.md`, and `tasks.md`.
- Initialized Node.js Express skeleton under `backend/`.
