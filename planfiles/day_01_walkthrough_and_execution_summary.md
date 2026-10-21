# Day 1 Walkthrough & Execution Summary

**Project Start Date:** Wednesday, October 21, 2026  
**Phase 1:** The Monolith & Core UI (Sprints 1 - 4)  
**Sprint 1:** The Landing Gateway (CSS & NextJS)  
**Deliverable:** Day 1 — Workspace & App Initialization  

---

## 📋 1. Day 1 Scope & Objectives
Establish the foundation of the polyglot monorepo:
1. Initialize the root Git repository with environment-safe ignoring rules.
2. Configure **PNPM Workspaces** and **Turborepo** task orchestration.
3. Scaffold the complete architectural folder hierarchy (frontends, backends, shared packages, and CI/CD).
4. Bootstrap the **`portfolio-landing`** Next.js application with TypeScript, App Router, and Tailwind CSS.
5. Verify the monorepo build pipeline via Turborepo.
6. Commit the baseline into version control.

---

## 💻 2. Step-by-Step Terminal Commands & Walkthrough

### Step 1: Environment & Tooling Verification
Checked installed tooling versions to confirm compatibility with Turborepo and PNPM:

```bash
git status
node -v      # Output: v24.15.0
npm -v       # Output: 11.12.1
pnpm -v      # Output: 9.7.0
turbo --version
```

---

### Step 2: Git Repository Initialization
Initialized the root Git repository and created a multi-stack `.gitignore` covering Node, Turborepo, Next.js artifacts, Python/Django caches, virtual environments, database files, and `.env` secrets:

```bash
git init
```

**Created File:** `.gitignore`

---

### Step 3: PNPM Workspaces & Turborepo Setup
Configured workspace glob patterns in `pnpm-workspace.yaml`:

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

Configured root `package.json` with Turborepo:

```json
{
  "name": "fullstack-architectures-portfolio",
  "private": true,
  "scripts": {
    "build": "turbo build",
    "dev": "turbo dev",
    "lint": "turbo lint",
    "clean": "turbo clean"
  },
  "devDependencies": {
    "turbo": "^2.4.4"
  },
  "packageManager": "pnpm@9.7.0",
  "engines": {
    "node": ">=20"
  }
}
```

Configured pipeline caching and task dependencies in `turbo.json`:

```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**"]
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

Installed root workspace dependencies via PNPM:

```bash
pnpm install
```

---

### Step 4: Monorepo Structural Scaffold
Created the architecture directory tree per the specification:

```powershell
New-Item -ItemType Directory -Force -Path apps, packages, backend-monolith, backend-microservices
```

Added tracked `.gitkeep` placeholders for all future applications and services:
- `apps/app-monolith-web/.gitkeep`
- `apps/app-microservices-web/.gitkeep`
- `backend-monolith/core-platform/.gitkeep`
- `backend-microservices/api-gateway/.gitkeep`
- `backend-microservices/service-payroll/.gitkeep`
- `backend-microservices/service-telemetry/.gitkeep`
- `backend-microservices/service-catalog/.gitkeep`
- `packages/shared-ui/.gitkeep`
- `packages/shared-types/.gitkeep`
- `.github/workflows/.gitkeep`

---

### Step 5: Next.js `portfolio-landing` Scaffolding
Inspected available non-interactive options:

```bash
npx -y create-next-app@latest --help
```

Scaffolded the landing application non-interactively using modern defaults (TypeScript, Tailwind CSS, App Router, `src/` directory, and PNPM package manager):

```bash
npx -y create-next-app@latest apps/portfolio-landing \
  --ts \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --use-pnpm \
  --disable-git
```

**Key dependencies installed in `apps/portfolio-landing`:**
- `next`: `16.4.2`
- `react`: `19.3.0`
- `react-dom`: `19.3.0`
- `tailwindcss`: `4.3.3`
- `@tailwindcss/turbopack`: `4.3.3`
- `typescript`: `5.9.3`

---

### Step 6: Pipeline Verification
Tested root-level Turborepo compilation across the workspace:

```bash
pnpm build
```

**Turborepo Execution Output:**
```text
• turbo 2.11.10
• Packages in scope: portfolio-landing
• Running build in 1 package
portfolio-landing:build: ✓ Compiled successfully in 18.9s
portfolio-landing:build: ✓ Generating static pages (4/4) in 1403ms
Tasks:    1 successful, 1 total
Time:     38.627s
```

---

### Step 7: Baseline Commit
Staged all files and recorded the Day 1 baseline commit:

```bash
git add .
git commit -m "D01 Initialize monorepo, PNPM workspaces, Turborepo, and portfolio-landing app"
```

**Commit Log:**
```text
commit e1192f534e391bbc37a8605e2f56040ae0f43012
Author: hectapia <holivarestapia@byupathway.edu>
Date:   Wed Oct 21 14:59:03 2026 -0600

    D01 Initialize monorepo, PNPM workspaces, Turborepo, and portfolio-landing app
```

---

## 🗂️ 3. Resulting Repository Layout

```text
fullstack-architectures-portfolio/
├── .github/
│   └── workflows/
│       └── .gitkeep
├── apps/
│   ├── app-microservices-web/
│   │   └── .gitkeep
│   ├── app-monolith-web/
│   │   └── .gitkeep
│   └── portfolio-landing/
│       ├── public/
│       ├── src/
│       │   └── app/
│       │       ├── favicon.ico
│       │       ├── globals.css
│       │       ├── layout.tsx
│       │       └── page.tsx
│       ├── eslint.config.mjs
│       ├── next.config.ts
│       ├── package.json
│       └── tsconfig.json
├── backend-microservices/
│   ├── api-gateway/
│   │   └── .gitkeep
│   ├── service-catalog/
│   │   └── .gitkeep
│   ├── service-payroll/
│   │   └── .gitkeep
│   └── service-telemetry/
│       └── .gitkeep
├── backend-monolith/
│   └── core-platform/
│       └── .gitkeep
├── packages/
│   ├── shared-types/
│   │   └── .gitkeep
│   └── shared-ui/
│       └── .gitkeep
├── planfiles/
│   ├── project_initialization_plan.md
│   └── day_01_walkthrough_and_execution_summary.md
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── turbo.json
```

---

## ⏭️ 4. Upcoming: Day 2 (Thu, Oct 22)
- Configure Tailwind CSS design tokens, custom color palette (HSL-tailored dark/light modes), CSS variables, and typography in `apps/portfolio-landing/src/app/globals.css`.
