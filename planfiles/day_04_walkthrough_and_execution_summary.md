# Day 4 Walkthrough & Execution Summary

**Project Date:** Saturday, October 24, 2026  
**Phase 1:** The Monolith & Core UI (Sprints 1 - 4)  
**Sprint 1:** The Landing Gateway (CSS & NextJS)  
**Deliverable:** Day 4 — Develop the "Hero" Section and Dual-Architecture Choice Cards (Monolith vs. Microservices)  

---

## 📋 1. Day 4 Scope & Objectives
Per `project_initialization_plan.md` (Sprint 1, Day 4), build out the core interactive showcase components for the `portfolio-landing` application:
1. **Branch Management:** Branch created and tracked on `sprint-01-day-04`.
2. **Dedicated Hero Component (`HeroSection.tsx`):**
   - High-impact value proposition contrasting Monolithic MVC cohesion/ACID guarantees against Distributed Polyglot Microservices agility.
   - Interactive Paradigm Quick-Filter bar (`Compare Both`, `Monolith (Django 5)`, `Microservices (GraphQL)`).
   - 4 Architectural KPI Metric Cards in glassmorphic panels:
     - **Monolith Speed:** `< 15ms` in-process execution with zero network serialization.
     - **Mesh Topology:** `4 Services` (Apollo Gateway, Coati Payroll, Telemetry, and Real-time Catalog Chat).
     - **Data Engines:** `4 Databases` (Aiven PostgreSQL, Supabase, MongoDB Atlas, and Firebase Firestore).
     - **Delivery Scope:** `10 Sprints` progressing from frontend design tokens to Dockerized production CI/CD.
   - Primary and secondary action CTAs with smooth anchor scrolling and gradient border highlights.
3. **Dedicated Architecture Choice Cards (`ArchitectureChoiceCards.tsx`):**
   - **Paradigm A: Centralized MVC Platform (Monolith)**:
     - Deep dive into Django REST Framework, Aiven PostgreSQL, and the native PDF deposit slip parser pipeline.
     - Interactive **"Simulate Flow"** schematic demonstrating the 3-step in-memory transaction and ACID commit (0.8ms).
     - Technology stack tags: Python 3.12, Django 5.x, DRF, Aiven PostgreSQL, PyPDF Parser, Docker Single Unit.
   - **Paradigm B: Distributed Event Mesh (Microservices)**:
     - Deep dive into Apollo GraphQL API Gateway, polyglot persistence, and isolated failure domains.
     - Interactive **"Simulate Flow"** schematic demonstrating concurrent request dispatch across Supabase, MongoDB, and Firebase.
     - Technology stack tags: Node / Apollo, GraphQL + gRPC, Supabase Postgres, MongoDB Atlas, Firebase Firestore, Python (Coati).
   - **Spotlight Mode**:
     - Selecting a paradigm highlights the target architecture card while gracefully dimming the other for focused inspection.
4. **Refactored Home Page (`page.tsx`):**
   - Modularized `page.tsx` by replacing inlined layout code with reusable client components.
   - Connected `activeParadigm` state between the Hero quick-filter and the Choice Cards.
5. **Mobile Network Hydration & Interactivity Resolution:**
   - Diagnosed Next.js 15/16 cross-site dev server security restrictions (`blockCrossSiteDEV`) that prevented client hydration when connecting over local network IP addresses (`192.168.1.X`).
   - Configured dynamic `allowedDevOrigins` in `next.config.ts` querying `os.networkInterfaces()` and standard local subnet wildcards (`192.168.*.*`, `10.*.*.*`, `172.16.*.*`, `*.local`).
   - Bound Next.js dev server explicitly to `0.0.0.0` in `package.json`.
   - Upgraded mobile hamburger button in `Navbar.tsx` to `min-h-[44px] min-w-[44px]` touch target with `touch-manipulation`, `pointer-events-none` on SVGs, and dynamic viewport scrolling (`100dvh`).
6. **Milestone Synchronization:**
   - Synchronized milestone badges across `Navbar.tsx`, `MainContentLayout.tsx`, and `page.tsx` to **Sprint 1 • Day 4 Live**.
7. **Monorepo Build & Dev Verification:**
   - Validated complete production bundle build via `pnpm build`.
   - Validated Turborepo local server startup and execution via `pnpm dev`.

---

## 💻 2. Step-by-Step Implementation & Terminal Commands

### Step 1: Mobile Network Hydration & Hamburger Button Fix

#### Diagnosis
When connecting to Next.js from mobile devices on LAN (e.g. `http://192.168.1.11:3000`), Next.js 15+ blocks development chunks and WebSocket HMR from non-localhost origins due to `blockCrossSiteDEV`, leaving React unhydrated and the mobile hamburger button unresponsive.

#### Solution
Updated `apps/portfolio-landing/next.config.ts` to dynamically resolve local network interfaces:

```typescript
import type { NextConfig } from "next";
import os from "node:os";

function getLocalDevOrigins(): string[] {
  const origins = [
    "localhost",
    "127.0.0.1",
    "*.local",
    "192.168.*.*",
    "10.*.*.*",
    "172.16.*.*",
    "172.17.*.*",
    "172.18.*.*",
    "172.19.*.*",
    "172.2*.*.*",
    "172.3*.*.*",
  ];

  try {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
      for (const iface of interfaces[name] || []) {
        if (iface.family === "IPv4" && !iface.internal) {
          origins.push(iface.address);
        }
      }
    }
  } catch {
    // fallback to wildcard patterns
  }

  return Array.from(new Set(origins));
}

const nextConfig: NextConfig = {
  allowedDevOrigins: getLocalDevOrigins(),
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
```

Updated `apps/portfolio-landing/package.json` to bind across all interfaces:
```json
"scripts": {
  "dev": "next dev -H 0.0.0.0",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

Enhanced mobile button in `apps/portfolio-landing/src/components/layout/Navbar.tsx`:
```tsx
<button
  type="button"
  onClick={() => setMobileMenuOpen((prev) => !prev)}
  className="flex md:hidden items-center justify-center min-h-[44px] min-w-[44px] rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all touch-manipulation cursor-pointer select-none"
  aria-expanded={mobileMenuOpen}
  aria-label="Toggle mobile navigation menu"
>
  ...
</button>
```

---

### Step 2: Dedicated Hero Section (`apps/portfolio-landing/src/components/home/HeroSection.tsx`)
Created `HeroSection.tsx` with interactive view switching and 4 architecture KPIs:

```tsx
"use client";

import React, { useState } from "react";

interface HeroSectionProps {
  onSelectParadigm?: (paradigm: "all" | "monolith" | "micro") => void;
  selectedParadigm?: "all" | "monolith" | "micro";
}

export default function HeroSection({
  onSelectParadigm,
  selectedParadigm = "all",
}: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<"all" | "monolith" | "micro">(selectedParadigm);

  const handleTabChange = (tab: "all" | "monolith" | "micro") => {
    setActiveTab(tab);
    onSelectParadigm?.(tab);
  };

  return (
    <section className="relative flex flex-col gap-10 lg:gap-14 max-w-5xl" aria-labelledby="hero-heading">
      {/* 1. Status & Architecture Pill Badges */}
      ...
      {/* 2. Main Headline & Value Proposition */}
      ...
      {/* 3. Interactive Quick Filter Bar */}
      ...
      {/* 4. Action CTAs */}
      ...
      {/* 5. Architectural KPI Metrics Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
        {/* Monolith Speed (< 15ms) */}
        {/* Mesh Topology (4 Services) */}
        {/* Data Engines (4 Databases) */}
        {/* Delivery Scope (10 Sprints) */}
      </div>
    </section>
  );
}
```

---

### Step 3: Architecture Choice Cards (`apps/portfolio-landing/src/components/home/ArchitectureChoiceCards.tsx`)
Constructed `ArchitectureChoiceCards.tsx` featuring side-by-side comparative analysis and interactive request flow simulation:

```tsx
"use client";

import React, { useState } from "react";

interface ArchitectureChoiceCardsProps {
  activeParadigm?: "all" | "monolith" | "micro";
  onParadigmChange?: (paradigm: "all" | "monolith" | "micro") => void;
}

export default function ArchitectureChoiceCards({
  activeParadigm = "all",
  onParadigmChange,
}: ArchitectureChoiceCardsProps) {
  const [activeSimulation, setActiveSimulation] = useState<"none" | "monolith" | "micro">("none");

  const isMonolithActive = activeParadigm === "all" || activeParadigm === "monolith";
  const isMicroActive = activeParadigm === "all" || activeParadigm === "micro";

  return (
    <section id="architectures" className="flex flex-col gap-8 scroll-mt-24" aria-labelledby="architectures-heading">
      {/* Section Header & Paradigm Filter Pills */}
      ...
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Paradigm A: Monolith Card with Request Pipeline Flow */}
        ...
        {/* Paradigm B: Microservices Card with Federated Gateway Flow */}
        ...
      </div>
    </section>
  );
}
```

---

### Step 4: Modular Page Assembly (`apps/portfolio-landing/src/app/page.tsx`)
Refactored `page.tsx` to mount the newly created Day 4 components and bind state:

```tsx
"use client";

import { useState } from "react";
import MainContentLayout from "@/components/layout/MainContentLayout";
import HeroSection from "@/components/home/HeroSection";
import ArchitectureChoiceCards from "@/components/home/ArchitectureChoiceCards";

export default function Home() {
  const [activeParadigm, setActiveParadigm] = useState<"all" | "monolith" | "micro">("all");

  return (
    <MainContentLayout>
      {/* 1. Day 4 Hero Section with Interactive Paradigm Focus & KPIs */}
      <HeroSection
        selectedParadigm={activeParadigm}
        onSelectParadigm={setActiveParadigm}
      />

      {/* 2. Day 4 Dual Architecture Choice Cards with Interactive Request Simulation */}
      <ArchitectureChoiceCards
        activeParadigm={activeParadigm}
        onParadigmChange={setActiveParadigm}
      />

      {/* 3. Architecture Comparison Matrix */}
      ...
      {/* 4. 10-Sprint Execution Roadmap */}
      ...
      {/* 5. Design Tokens Specimen */}
      ...
      {/* 6. Recruiter Executive Brief Section */}
      ...
    </MainContentLayout>
  );
}
```

---

### Step 5: TypeScript Compilation Verification
Executed TypeScript typecheck across the landing package:

```bash
pnpm exec tsc --noEmit
# Exit code 0 (clean compilation)
```

---

### Step 6: Turborepo Build Verification
Executed production bundle compilation from the root repository:

```bash
pnpm build
```

**Build Output:**
```text
> fullstack-architectures-portfolio@ build C:\dev\fullstack-architectures-portfolio
> turbo build

   • turbo 2.11.10
   • Packages in scope: portfolio-landing
   • Running build in 1 package
   • Remote caching disabled

portfolio-landing:build: ✓ Compiled successfully in 2.4s
portfolio-landing:build:   Running TypeScript ...
portfolio-landing:build:   Finished TypeScript in 3.6s ...
portfolio-landing:build:   Collecting page data using 5 workers ...
portfolio-landing:build: ✓ Generating static pages using 5 workers (4/4) in 910ms
portfolio-landing:build:   Finalizing page optimization ...

Tasks:    1 successful, 1 total
Cached:    0 cached, 1 total
Time:      28.412s
```

---

### Step 7: Local Server Execution & Port Cleanliness
Executed local dev server:

```bash
pnpm dev
```

**Dev Server Startup:**
```text
▲ Next.js 16.4.2 (Turbopack)
- Local:         http://localhost:3000
- Network:       http://0.0.0.0:3000
✓ Ready in 513ms
✓ Running next.config.ts took 53ms
- Cache Components enabled
- Partial Prefetching enabled
```

---

### Step 8: Git Commit & Remote Tracking
Pushed changes to the remote repository:

```bash
git push -u origin sprint-01-day-04
```

**Commit Information:**
- **Branch:** `sprint-01-day-04`
- **Commit:** `74c6d50`
- **Message:** `S01D04 Develop Hero section and dual-architecture choice cards (Monolith vs Microservices)`
- **Remote PR Link:** [Create PR on GitHub](https://github.com/hectapia/fullstack-architectures-portfolio/pull/new/sprint-01-day-04)

---

## 📐 3. Day 4 Feature Architecture Summary

| Component | Display Model | Interactive Features | Key Engineering Highlights |
| :--- | :--- | :--- | :--- |
| **`HeroSection.tsx`** | Flexbox & CSS Grid (`grid-cols-2 md:grid-cols-4`) | Paradigm Quick-Filter pills, anchor action jumps | Value proposition, 4 KPI cards (`< 15ms`, `4 Services`, `4 Databases`, `10 Sprints`) |
| **`ArchitectureChoiceCards.tsx`** | CSS Grid (`grid-cols-1 lg:grid-cols-2`) | "Simulate Flow" interactive toggle, spotlight mode | Monolith (Django 5/Aiven ACID) vs. Microservices (Apollo GraphQL/Supabase/Mongo/Firebase) |
| **`next.config.ts`** | Server Config | Dynamic `allowedDevOrigins` | Auto-discovers local IPv4 via `os.networkInterfaces()` to enable cross-device LAN mobile testing |
| **`Navbar.tsx`** | Flexbox | Responsive hamburger menu with `100dvh` scroll | Apple/Android accessibility compliance (`min-h-[44px] min-w-[44px]`), functional state toggle |

---

## ⏭️ 4. Upcoming: Day 5 (Sun, Oct 25)
Per `project_initialization_plan.md`:
- **Sprint 1, Day 5:** Implement mobile-first media queries; ensure flawless rendering on mobile, tablet, and 4K displays.
