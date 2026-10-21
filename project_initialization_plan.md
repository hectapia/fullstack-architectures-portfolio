# Dual Architecture Full-Stack Portfolio

## 🎯 Project Vision
To build a comprehensive software engineering portfolio that demonstrates mastery of both Monolithic and Microservices architectures. The project will run in a Monorepo workspace, allowing shared UI components and typed interfaces across both environments, culminating in a public-facing showcase for technical recruiters.

## 🗂️ Repository Structure (Monorepo)
Initialize your workspace with the following architecture:

```text
fullstack-architectures-portfolio/
├── .github/workflows/                 # CI/CD pipelines
├── apps/                              # User-facing frontends
│   ├── portfolio-landing/             # Main NextJS site (Hybrid Access Hub)
│   ├── app-monolith-web/              # NextJS client for the Monolith
│   └── app-microservices-web/         # NextJS client consuming the API Gateway
├── backend-monolith/                  # Traditional MVC approach
│   └── core-platform/                 # Django + Aiven PostgreSQL (Billing/Records)
├── backend-microservices/             # Distributed Polyglot approach
│   ├── api-gateway/                   # Node.js/GraphQL aggregator
│   ├── service-payroll/               # Python (Coati) + Supabase (Mexico Payroll)
│   ├── service-telemetry/             # Node.js + MongoDB (Desktop app logging)
│   └── service-catalog/               # Firebase (Real-time product chat/state)
├── packages/                          # Shared libraries (Turborepo/Yarn Workspaces)
│   ├── shared-ui/                     # Reusable React components (Tailwind)
│   └── shared-types/                  # TypeScript interfaces (DTOs)
├── docker-compose.monolith.yml        # Local dev: Monolith environment
└── docker-compose.microservices.yml   # Local dev: Microservices environment
```

---

## 🗓️ Execution Roadmap (10 Sprints)

### Phase 1: The Monolith & Core UI (Sprints 1 - 4)
*Focus: Building a robust, centralized application with tightly coupled frontend/backend logic.*

*   **Sprint 1: The Landing Gateway (CSS & NextJS)**
    *   Setup `portfolio-landing` NextJS app.
    *   Implement responsive CSS (Grid/Flexbox/Tailwind) for a pristine recruiter experience.
*   **Sprint 2: Core Monolith Backend (Python/Django)**
    *   Setup `core-platform` using Django and Django REST Framework.
    *   Connect to **Aiven PostgreSQL**.
    *   Build the Administrative Record Processor (PDF invoice parsing to relational models).
*   **Sprint 3: Desktop System Monitor (JS/TS)**
    *   Build an Electron/Tauri desktop app using Vanilla TS.
    *   Use Local OS APIs to monitor system resources.
*   **Sprint 4: Monolithic Integration & Testing**
    *   Connect the `app-monolith-web` NextJS client to the Django API.
    *   Implement basic load testing scripts.

### Phase 2: Microservices Deconstruction & Polyglot Persistence (Sprints 5 - 8)
*Focus: Distributed systems, NoSQL/SQL hybrids, and advanced communication protocols.*

*   **Sprint 5: Telemetry & Real-Time State (Node/Mongo/Firebase)**
    *   Route desktop app telemetry data to `service-telemetry` backed by **MongoDB**.
    *   Implement `service-catalog` using **Firebase** for a real-time live chat widget.
*   **Sprint 6: Mexican Payroll Engine Adaptation (Python/Supabase)**
    *   Deploy Coati Payroll in `service-payroll`.
    *   Connect to **Supabase PostgreSQL**.
    *   Implement Google Sheets API to read annual SAT/UMA tables for dynamic calculation.
*   **Sprint 7: The API Gateway (GraphQL/REST/gRPC)**
    *   Build the Node.js `api-gateway` to fetch data from Payroll (REST), Telemetry (gRPC/REST), and Firebase (WebSockets).
    *   Connect the `app-microservices-web` NextJS app to this unified Gateway.
*   **Sprint 8: AI/ML Integration**
    *   Add an AI classification route to structure messy input data.
    *   Store vector embeddings in Aiven PostgreSQL using `pgvector`.

### Phase 3: Infrastructure, Shared Code, and CI/CD (Sprints 9 - 10)
*Focus: "Day 2 Operations" - proving production readiness.*

*   **Sprint 9: Workspace Abstraction**
    *   Extract common React components (buttons, cards) into `packages/shared-ui/`.
    *   Extract TypeScript data models into `packages/shared-types/`.
*   **Sprint 10: Containerization & CI/CD**
    *   Write Dockerfiles for all backends and frontends.
    *   Configure GitHub Actions workflows to auto-test and build images on push.
    *   Prepare mocked data sets for the public portfolio live demos.

---

## 🗓️ Execution Roadmap & Daily Schedule (10 Sprints)
*Project Start Date: Wednesday, October 21, 2026*

### Phase 1: The Monolith & Core UI (Sprints 1 - 4)

#### Sprint 1: The Landing Gateway (CSS & NextJS)
**Scope:** Establish the monorepo workspace. Build the `portfolio-landing` NextJS application using Tailwind CSS. Focus on mobile-first responsive design, CSS Grid, Flexbox, and a visually striking UI for recruiters. Integrate a Supabase database to capture waitlist/contact emails.
*   **Day 1 (Wed, Oct 21):** Initialize Git monorepo, configure Turborepo/PNPM workspaces, and initialize the `portfolio-landing` NextJS app.
*   **Day 2 (Thu, Oct 22):** Set up Tailwind CSS, define global CSS variables, typography, and the core color palette.
*   **Day 3 (Fri, Oct 23):** Build the structural layouts (Navbar, Footer, Main Content Area) using CSS Grid and Flexbox.
*   **Day 4 (Sat, Oct 24):** Develop the "Hero" section and the dual-architecture choice cards (Monolith vs. Microservices).
*   **Day 5 (Sun, Oct 25):** Implement mobile-first media queries; ensure flawless rendering on mobile, tablet, and 4K displays.
*   **Day 6 (Mon, Oct 26):** Set up Supabase project; build the Contact/Waitlist form component with loading/error states.
*   **Day 7 (Tue, Oct 27):** Integrate Supabase JS client to save form submissions. Code review and UI polish.

#### Sprint 2: Core Monolith Backend (Python/Django)
**Scope:** Build `core-platform` in Django. This acts as the traditional monolith handling authentication, records, and billing. Connect it to an Aiven PostgreSQL database. Build the logic to parse uploaded PDF deposit slips into structured JSON.
*   **Day 1 (Wed, Oct 28):** Initialize Django project inside `/backend-monolith`. Configure virtual environment.
*   **Day 2 (Thu, Oct 29):** Provision Aiven PostgreSQL. Configure Django `settings.py` to connect via `psycopg2`.
*   **Day 3 (Fri, Oct 30):** Define relational Django Models for Users, Invoices, and Transactions. Run initial migrations.
*   **Day 4 (Sat, Oct 31):** Install and configure Django REST Framework (DRF). Build serializers for the models.
*   **Day 5 (Sun, Nov 1):** Create API endpoints for CRUD operations on Invoices and Transactions.
*   **Day 6 (Mon, Nov 2):** Integrate PyPDF2 or pandas to build a utility that extracts text/amounts from uploaded PDF files.
*   **Day 7 (Tue, Nov 3):** Connect the PDF parser to a POST endpoint. Test with Postman.

#### Sprint 3: Desktop System Monitor (JS/TS)
**Scope:** Build a native desktop app using Electron or Tauri with Vanilla TypeScript. The app uses Local OS APIs to read system telemetry (CPU/Memory) and will later send this to the microservices backend.
*   **Day 1 (Wed, Nov 4):** Initialize Tauri/Electron project inside the workspace. Configure TypeScript strictly.
*   **Day 2 (Thu, Nov 5):** Build basic HTML/CSS desktop UI for the dashboard.
*   **Day 3 (Fri, Nov 6):** Write TypeScript logic to interface with Local OS APIs (e.g., Node `os` module or Rust backend in Tauri).
*   **Day 4 (Sat, Nov 7):** Implement real-time charts/graphs in the desktop UI to display local OS data.
*   **Day 5 (Sun, Nov 8):** Add local file system logging (write telemetry to a local `.log` or `.json` file).
*   **Day 6 (Mon, Nov 9):** Implement type-safe IPC (Inter-Process Communication) between frontend and system backend.
*   **Day 7 (Tue, Nov 10):** Package the desktop app locally and record a 60-second demo video for the portfolio.

#### Sprint 4: Monolithic Integration & Testing
**Scope:** Connect the frontend to the monolith. Initialize `app-monolith-web` (NextJS) and wire it to the Django API. Write load tests.
*   **Day 1 (Wed, Nov 11):** Initialize `app-monolith-web` in NextJS.
*   **Day 2 (Thu, Nov 12):** Build the "Invoice Upload Dashboard" UI in React.
*   **Day 3 (Fri, Nov 13):** Connect the dashboard to the Django REST API (handle file uploads via `fetch` or Axios).
*   **Day 4 (Sat, Nov 14):** Display the parsed PDF JSON response in a styled data table.
*   **Day 5 (Sun, Nov 15):** Write Jest/React Testing Library tests for the UI components.
*   **Day 6 (Mon, Nov 16):** Use k6 or Postman CLI to write automated load tests against the Django API.
*   **Day 7 (Tue, Nov 17):** Evaluate monolithic performance. Refactor any bottlenecks.

---

### Phase 2: Microservices Deconstruction (Sprints 5 - 8)

#### Sprint 5: Telemetry & Real-Time State (Node/Mongo/Firebase)
**Scope:** Build independent NoSQL services. `service-telemetry` (Node/Express + MongoDB) will ingest the desktop app's logs. `service-catalog` will use Firebase for a live support chat.
*   **Day 1 (Wed, Nov 18):** Init `service-telemetry` (Node/Express). Provision MongoDB Atlas.
*   **Day 2 (Thu, Nov 19):** Build Mongoose schemas and REST ingestion endpoints for unstructured telemetry logs.
*   **Day 3 (Fri, Nov 20):** Update the Sprint 3 Desktop App to POST data to the new Node.js microservice.
*   **Day 4 (Sat, Nov 21):** Init `service-catalog` frontend widget. Set up Firebase project.
*   **Day 5 (Sun, Nov 22):** Implement Firebase Firestore WebSockets for a real-time live chat interface.
*   **Day 6 (Mon, Nov 23):** Build a basic product catalog view fetching from Firebase.
*   **Day 7 (Tue, Nov 24):** Test telemetry ingestion rate and chat latency.

#### Sprint 6: Mexican Payroll Engine (Python/Supabase)
**Scope:** Adapt an open-source payroll engine (Coati) in Python. Use Supabase PostgreSQL. Integrate Google Sheets API for Mexican UMA/ISR tables.
*   **Day 1 (Wed, Nov 25):** Clone/Init Coati or custom Python payroll microservice in `service-payroll`.
*   **Day 2 (Thu, Nov 26):** Provision Supabase PostgreSQL. Connect the Python service.
*   **Day 3 (Fri, Nov 27):** Configure Google Cloud Console, enable Sheets API, generate OAuth/Service credentials.
*   **Day 4 (Sat, Nov 28):** Write Python script to fetch UMA/ISR values from a private Google Sheet.
*   **Day 5 (Sun, Nov 29):** Implement the calculation logic (Gross Pay -> ISR deduction -> Net Pay).
*   **Day 6 (Mon, Nov 30):** Expose a REST API endpoint that takes an employee ID and returns the calculated payslip.
*   **Day 7 (Tue, Dec 1):** Seed Supabase with mock Mexican employee data for testing.

#### Sprint 7: The API Gateway (GraphQL/gRPC)
**Scope:** Build the core routing layer. `api-gateway` (Node.js/Apollo) will stitch together the REST, gRPC, and Firebase services into one endpoint.
*   **Day 1 (Wed, Dec 2):** Init `api-gateway` using Node.js and Apollo Server (GraphQL).
*   **Day 2 (Thu, Dec 3):** Define GraphQL schemas (Types, Queries, Mutations) for the entire microservices ecosystem.
*   **Day 3 (Fri, Dec 4):** Write resolvers to fetch data from `service-payroll` (REST).
*   **Day 4 (Sat, Dec 5):** Write resolvers to fetch data from `service-telemetry` (MongoDB).
*   **Day 5 (Sun, Dec 6):** Implement gRPC protocol buffer definitions between the Gateway and one of the services.
*   **Day 6 (Mon, Dec 7):** Initialize `app-microservices-web` (NextJS) and connect it to the Apollo GraphQL Gateway.
*   **Day 7 (Tue, Dec 8):** Build unified dashboard in NextJS showing Payroll, Telemetry, and Chat simultaneously.

#### Sprint 8: AI/ML Integration
**Scope:** Enhance the data pipeline. Use OpenAI or local HuggingFace models to classify transaction data, storing vector embeddings in Aiven.
*   **Day 1 (Wed, Dec 9):** Get OpenAI API keys (or setup local model).
*   **Day 2 (Thu, Dec 10):** Create a new route in the Django Monolith or Gateway to accept raw bank string text.
*   **Day 3 (Fri, Dec 11):** Send text to AI model to return a structured JSON category (e.g., "Food", "Utility").
*   **Day 4 (Sat, Dec 12):** Generate text embeddings from the AI model.
*   **Day 5 (Sun, Dec 13):** Enable `pgvector` extension in Aiven PostgreSQL.
*   **Day 6 (Mon, Dec 14):** Write SQL to store and perform semantic searches on the embeddings.
*   **Day 7 (Tue, Dec 15):** Build frontend UI to test the "AI Categorizer" functionality.

---

### Phase 3: Infrastructure & CI/CD (Sprints 9 - 10)

#### Sprint 9: Workspace Abstraction
**Scope:** Refactor code to leverage the monorepo. Move common code into `/packages`.
*   **Day 1 (Wed, Dec 16):** Set up `packages/shared-ui` using Tailwind and React.
*   **Day 2 (Thu, Dec 17):** Migrate standard Buttons, Inputs, and Cards from NextJS apps into the shared library.
*   **Day 3 (Fri, Dec 18):** Set up `packages/shared-types` for TypeScript.
*   **Day 4 (Sat, Dec 19):** Migrate DTOs, API responses, and database models to shared types.
*   **Day 5 (Sun, Dec 20):** Update all NextJS apps to import from `@portfolio/shared-ui` and `@portfolio/shared-types`.
*   **Day 6 (Mon, Dec 21):** Resolve dependency conflicts and ensure local build scripts work.
*   **Day 7 (Tue, Dec 22):** Finalize mocked data sets (remove any real PII from databases for the public portfolio).

#### Sprint 10: Containerization & CI/CD
**Scope:** Prepare for production. Dockerize everything and build automated deployment pipelines.
*   **Day 1 (Wed, Dec 23):** Write `Dockerfile` for the NextJS frontends.
*   **Day 2 (Thu, Dec 24):** Write `Dockerfile` for Python/Django and Python/Coati services.
*   **Day 3 (Fri, Dec 25):** Write `Dockerfile` for Node.js API Gateway and Telemetry services.
*   **Day 4 (Sat, Dec 26):** Finalize `docker-compose.monolith.yml` and `docker-compose.microservices.yml` for local orchestration.
*   **Day 5 (Sun, Dec 27):** Create GitHub Actions workflow (`.github/workflows/ci.yml`) for automated testing.
*   **Day 6 (Mon, Dec 28):** Create GitHub Actions workflow for building Docker images and pushing to a registry.
*   **Day 7 (Tue, Dec 29):** Deploy to production (Vercel for frontend, Render/AWS for backend containers). Portfolio is live!

---

## 🚀 Antigravity IDE Kickoff Instructions
1. Open terminal in the Antigravity IDE.
2. Run `npm init -y` or `pnpm init` at the root.
3. Set up your workspace tooling (e.g., Turborepo or PNPM workspaces) to map to the `/apps` and `/packages` directories.
4. Initialize the main NextJS app: `npx create-next-app@latest apps/portfolio-landing`.
5. Ask Gemini to generate the initial `docker-compose.monolith.yml` to spin up your local Aiven-compatible PostgreSQL container.