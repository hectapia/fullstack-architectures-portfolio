# Dual Architecture Full-Stack Portfolio

[![Turborepo](https://img.shields.io/badge/Monorepo-Turborepo_2-blue?logo=turborepo)](https://turbo.build/)
[![PNPM Workspaces](https://img.shields.io/badge/Package_Manager-PNPM_9-orange?logo=pnpm)](https://pnpm.io/)
[![Next.js](https://img.shields.io/badge/Frontend-Next.js_16_App_Router-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript_5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Backend-Python_3.12-3776AB?logo=python)](https://python.org/)
[![Django](https://img.shields.io/badge/Monolith-Django_REST_Framework-092E20?logo=django)](https://www.djangoproject.com/)
[![GraphQL](https://img.shields.io/badge/Microservices-Apollo_GraphQL-E10098?logo=graphql)](https://www.apollographql.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

An enterprise-grade software engineering portfolio engineered as a polyglot monorepo. This workspace delivers a side-by-side demonstration of two paradigms: a traditional centralized **Monolithic** system versus a distributed, event-driven **Microservices** ecosystem, unified through shared type systems, UI component packages, and a central interactive recruiter portal.

---

## 🎯 Architectural Vision

Modern full-stack engineering demands fluent navigation between architectural paradigms based on business scale, operational costs, and domain requirements. This repository demonstrates end-to-end fluency across both models:

```
                               ┌──────────────────────────────────────────────┐
                               │       apps/portfolio-landing (Next.js)       │
                               │          Hybrid Access Gateway & Hub         │
                               └──────────────┬────────────────┬──────────────┘
                                              │                │
                     ┌────────────────────────┘                └────────────────────────┐
                     ▼                                                                  ▼
      ┌─────────────────────────────┐                                    ┌─────────────────────────────┐
      │     apps/app-monolith-web   │                                    │  apps/app-microservices-web │
      │    (Next.js Client - MVC)   │                                    │  (Next.js Client - Unified) │
      └──────────────┬──────────────┘                                    └──────────────┬──────────────┘
                     │ REST API                                                         │ GraphQL / WSS
                     ▼                                                                  ▼
      ┌─────────────────────────────┐                                    ┌─────────────────────────────┐
      │  backend-monolith/          │                                    │  backend-microservices/     │
      │  core-platform (Django)     │                                    │  api-gateway (Node/Apollo)  │
      └──────────────┬──────────────┘                                    └──────┬───────┬───────┬──────┘
                     │                                                          │       │       │
                     ▼                                                  ┌───────┘       │       └───────┐
          [ Aiven PostgreSQL ]                                          ▼               ▼               ▼
                                                                [service-payroll] [service-telemetry] [service-catalog]
                                                                  (Python/Supa)     (Node/Mongo)     (Firebase/WSS)
```

---

## ⚖️ Architectural Matrix

| Dimension | Monolithic Architecture (`backend-monolith`) | Microservices Ecosystem (`backend-microservices`) |
| :--- | :--- | :--- |
| **Primary Framework** | Django 5 + Django REST Framework | Apollo GraphQL Gateway (Node.js) + Python FastAPI/Coati |
| **Persistence Strategy** | Centralized Relational (Aiven PostgreSQL) | Polyglot (Supabase PostgreSQL, MongoDB Atlas, Cloud Firestore) |
| **Communication Pattern** | Synchronous RESTful APIs & Direct In-Process Logic | Federated GraphQL, gRPC inter-service RPCs, WebSocket subscriptions |
| **Frontend Integration** | Dedicated Next.js client (`app-monolith-web`) | Unified aggregation client (`app-microservices-web`) |
| **Data Workloads** | Relational Invoicing, ACID Transactions, PDF Parsing | Real-time Telemetry Ingestion, Payroll Engine, Live Support State |
| **Shared Codebase** | Reusable UI design system (`@portfolio/shared-ui`) & typed DTO contracts (`@portfolio/shared-types`) |

---

## 🗂️ Monorepo Directory Layout

```text
fullstack-architectures-portfolio/
├── .github/
│   └── workflows/                       # GitHub Actions CI/CD pipelines
├── apps/
│   ├── portfolio-landing/               # Showcase portal & recruiter entry hub (Next.js 16 + Tailwind v4)
│   ├── app-monolith-web/                # Dedicated frontend client for the Django Monolith
│   └── app-microservices-web/           # Unified frontend client consuming the GraphQL Gateway
├── backend-monolith/
│   └── core-platform/                   # Django + DRF administrative billing & invoice processor
├── backend-microservices/
│   ├── api-gateway/                     # Apollo Server / Node.js unified GraphQL aggregation layer
│   ├── service-payroll/                 # Mexican Statutory Payroll Engine (Python + Supabase)
│   ├── service-telemetry/               # Desktop app log ingestion engine (Node.js + MongoDB)
│   └── service-catalog/                 # Real-time state & support chat (Firebase Firestore)
├── packages/
│   ├── shared-ui/                       # Shared React component library (Tailwind CSS)
│   └── shared-types/                    # Cross-workspace TypeScript interfaces & DTO schemas
├── planfiles/
│   ├── project_initialization_plan.md   # Complete 10-sprint engineering specification
│   └── day_01_walkthrough_and_execution_summary.md # Baseline execution record
├── .gitignore                           # Multi-stack environment & cache filter
├── package.json                         # Workspace scripts & Turborepo dependencies
├── pnpm-lock.yaml                       # Deterministic dependency graph
├── pnpm-workspace.yaml                  # PNPM package boundary definitions
└── turbo.json                           # Turborepo task pipeline configuration
```

---

## 🛠️ Technology Stack

- **Runtime & Workspace:** Node.js `>= 20.x`, PNPM `>= 9.x`, Turborepo `2.x`
- **Frontend Core:** Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS v4
- **Backend Monolith:** Python 3.12, Django 5, Django REST Framework, `psycopg2`, PyPDF2 / pdfplumber
- **Backend Microservices:** Apollo Server 4, GraphQL, Express, gRPC Protocol Buffers, Supabase SDK, Mongoose / MongoDB Atlas, Firebase Admin SDK
- **Databases & Storage:** Aiven PostgreSQL, Supabase PostgreSQL, MongoDB Atlas, Firebase Cloud Firestore
- **Tooling & Quality:** ESLint 9, Prettier, Jest, React Testing Library, k6 Load Testing, Docker & Docker Compose

---

## 🚀 Quick Start Guide

### Prerequisites
Make sure the following tools are available on your development machine:
- [Node.js](https://nodejs.org/) (version `20.18.0` or higher recommended; verified with `v24.15.0`)
- [PNPM](https://pnpm.io/installation) (version `9.7.0` or higher)
- [Python](https://www.python.org/) (`3.12` or higher)
- [Git](https://git-scm.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/hectapia/fullstack-architectures-portfolio.git
cd fullstack-architectures-portfolio
```

### 2. Install Dependencies
Install all workspace dependencies across all applications and shared packages using PNPM:
```bash
pnpm install
```

### 3. Build the Entire Workspace
Run Turborepo's parallel build pipeline across all packages:
```bash
pnpm build
```

### 4. Run Development Servers
To start all application dev servers simultaneously through Turborepo:
```bash
pnpm dev
```

To run a specific application (e.g. `portfolio-landing`):
```bash
pnpm --filter portfolio-landing dev
```
Then navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Monorepo Scripts Reference

| Command | Description |
| :--- | :--- |
| `pnpm build` | Compiles all apps and packages via Turborepo caching |
| `pnpm dev` | Starts active development servers with hot-module reload |
| `pnpm lint` | Runs ESLint analysis across all workspace packages |
| `pnpm clean` | Cleans `.turbo`, `.next`, and build caches |

---

## 🗓️ 10-Sprint Execution Roadmap

- [x] **Phase 1: The Monolith & Core UI**
  - [x] **Sprint 1 (In Progress):** The Landing Gateway (`portfolio-landing` Next.js, design system, responsive UI, waitlist)
  - [ ] **Sprint 2:** Core Monolith Backend (Django + DRF + Aiven PostgreSQL + PDF deposit parser)
  - [ ] **Sprint 3:** Desktop System Monitor (Vanilla TS + Local OS Telemetry APIs)
  - [ ] **Sprint 4:** Monolithic Integration & Testing (`app-monolith-web` + automated load testing)
- [ ] **Phase 2: Microservices Deconstruction & Polyglot Persistence**
  - [ ] **Sprint 5:** Telemetry & Real-Time State (`service-telemetry` MongoDB + `service-catalog` Firebase)
  - [ ] **Sprint 6:** Mexican Payroll Engine (Python + Supabase + Google Sheets SAT/UMA tables)
  - [ ] **Sprint 7:** Unified API Gateway (Apollo GraphQL + gRPC + `app-microservices-web`)
  - [ ] **Sprint 8:** AI/ML Vector Integration (Semantic classification + `pgvector` in Aiven)
- [ ] **Phase 3: Infrastructure, Shared Code, and CI/CD**
  - [ ] **Sprint 9:** Workspace Abstraction (`packages/shared-ui` + `packages/shared-types`)
  - [ ] **Sprint 10:** Containerization & Production CI/CD (Docker Compose + GitHub Actions pipelines)

---

## 👤 Author & Architecture Lead
- **Héctor Olivares Tapia**  
- Portfolio / Repository: [hectapia/fullstack-architectures-portfolio](https://github.com/hectapia/fullstack-architectures-portfolio)
- Contact: [holivarestapia@byupathway.edu](mailto:holivarestapia@byupathway.edu)

---

## 📄 License
This project is open-source and licensed under the [MIT License](LICENSE).
