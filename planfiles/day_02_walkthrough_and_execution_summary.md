# Day 2 Walkthrough & Execution Summary

**Project Date:** Thursday, October 22, 2026  
**Phase 1:** The Monolith & Core UI (Sprints 1 - 4)  
**Sprint 1:** The Landing Gateway (CSS & NextJS)  
**Deliverable:** Day 2 — Tailwind CSS Tokens, Global CSS Variables, Typography & Color Palette  

---

## 📋 1. Day 2 Scope & Objectives
Establish the complete visual foundation and design token architecture for the recruiter showcase:
1. **Branch Management:** Branch off from `day-01` to `day-02`.
2. **Tailwind CSS v4 Configuration & Design Tokens:**
   - Define custom `@theme` and `:root` variables in `apps/portfolio-landing/src/app/globals.css`.
   - Implement dual-architecture palette tokens contrasting the Monolith (Indigo/Violet) vs. Microservices (Cyan/Emerald).
   - Configure surface, border, and glassmorphism tokens.
3. **Typography Setup:**
   - Configure display typography using Google Fonts (`Outfit`) for prominent headlines in `layout.tsx`.
   - Retain `Geist Sans` for clean body copy and `Geist Mono` for technical metrics and stack badges.
4. **Visual Polish & Utilities:**
   - Implement subtle ambient background grid (`bg-tech-grid`).
   - Create glassmorphism classes (`glass-panel`, `glass-panel-hover`).
   - Configure custom glow classes (`glow-monolith`, `glow-micro`).
5. **Interactive Design Token Specimen (`page.tsx`):**
   - Build a live visual test specimen displaying typography, color swatches, and paradigm preview cards.
6. **Turborepo Verification:** Validate build compilation across the monorepo.

---

## 💻 2. Step-by-Step Implementation & Terminal Commands

### Step 1: Branch Creation
Checked out a dedicated branch following the project conventions:

```bash
git checkout -b day-02
```

---

### Step 2: Typography Configuration in `RootLayout`
Updated `apps/portfolio-landing/src/app/layout.tsx` to import Google Fonts `Outfit`, `Geist`, and `Geist_Mono`, registering `--font-outfit`, `--font-geist-sans`, and `--font-geist-mono` CSS variables:

```typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
```

---

### Step 3: Design Tokens in `globals.css`
Implemented the complete token architecture in `apps/portfolio-landing/src/app/globals.css`:

```css
@import "tailwindcss";

@layer base {
  :root {
    /* Color Tokens - Default Dark Mode (Recruiter Showcase) */
    --background: #080c14;
    --background-subtle: #0d1322;
    --foreground: #f8fafc;
    --foreground-muted: #94a3b8;
    --foreground-subtle: #64748b;

    /* Card & Surface Tokens */
    --card: rgba(15, 23, 42, 0.75);
    --card-hover: rgba(22, 34, 61, 0.85);
    --card-border: rgba(255, 255, 255, 0.08);
    --card-border-hover: rgba(255, 255, 255, 0.18);

    /* Architecture Accent Tokens: Monolithic Paradigm */
    --monolith-primary: #6366f1;
    --monolith-primary-hover: #4f46e5;
    --monolith-secondary: #8b5cf6;
    --monolith-surface: rgba(99, 102, 241, 0.1);
    --monolith-border: rgba(99, 102, 241, 0.3);
    --monolith-glow: rgba(99, 102, 241, 0.25);

    /* Architecture Accent Tokens: Microservices Paradigm */
    --micro-primary: #06b6d4;
    --micro-primary-hover: #0891b2;
    --micro-secondary: #10b981;
    --micro-surface: rgba(6, 182, 212, 0.1);
    --micro-border: rgba(6, 182, 212, 0.3);
    --micro-glow: rgba(6, 182, 212, 0.25);

    /* Functional Accents */
    --accent-amber: #f59e0b;
    --accent-emerald: #10b981;
    --accent-rose: #f43f5e;
    
    /* Grid & Ambient Shadows */
    --grid-line: rgba(255, 255, 255, 0.035);
  }
}
```

---

### Step 4: Token Showcase UI in `page.tsx`
Updated `apps/portfolio-landing/src/app/page.tsx` with:
- Ambient glow background orbs (`indigo`, `cyan`, `emerald`).
- Ambient background technical grid pattern (`bg-tech-grid`).
- Monolith vs. Microservices glassmorphic preview cards.
- Interactive Color Palette Swatch Grid verifying HEX and CSS token resolution.
- Typography specimen demonstrating `Outfit` (Headings), `Geist` (Body), and `Geist Mono` (Code/Badges).

---

### Step 5: Turborepo Build Verification
Validated production compilation using Turborepo from the root:

```bash
pnpm build
```

**Result:**
```text
• turbo 2.11.10
• Packages in scope: portfolio-landing
• Running build in 1 package
portfolio-landing:build: ✓ Compiled successfully in 1696ms
portfolio-landing:build: ✓ Generating static pages (4/4) in 3.1s
Tasks:    1 successful, 1 total
Time:     15.397s
```

---

### Step 6: Git Staging & Day 2 Baseline Commit
Staged all modified files and recorded the Day 2 commit:

```bash
git add .
git commit -m "D02 Setup Tailwind CSS design tokens, typography, CSS variables, and color palette"
```

**Commit Log:**
```text
commit befb813a07b1e3d13aeb9b21677e75130c66a837
Author: hectapia <holivarestapia@byupathway.edu>
Date:   Thu Oct 22 19:22:27 2026 -0600

    D02 Setup Tailwind CSS design tokens, typography, CSS variables, and color palette
```

---

## 🎨 3. Token Architecture Summary

| Token Name | Value | Purpose |
| :--- | :--- | :--- |
| `--background` | `#080c14` | Deep navy-slate background base |
| `--card` | `rgba(15, 23, 42, 0.75)` | Glassmorphic surface overlay |
| `--monolith-primary` | `#6366f1` | Monolith primary accent (Electric Indigo) |
| `--micro-primary` | `#06b6d4` | Microservices primary accent (Neon Cyan) |
| `--micro-secondary` | `#10b981` | Real-time / Event-driven accent (Emerald) |
| `--accent-amber` | `#f59e0b` | Mexican Payroll / SAT records accent |
| `--font-heading` | `Outfit` | Editorial display typography |
| `--font-sans` | `Geist Sans` | Body and interface typography |
| `--font-mono` | `Geist Mono` | Code snippets, endpoints, and telemetry badges |

---

## ⏭️ 4. Upcoming: Day 3 (Fri, Oct 23)
- Build structural layouts (`Navbar`, `Footer`, and `Main Content Area`) using CSS Grid and Flexbox in `apps/portfolio-landing`.
