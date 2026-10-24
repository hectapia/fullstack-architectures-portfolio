import MainContentLayout from "@/components/layout/MainContentLayout";

export default function Home() {
  return (
    <MainContentLayout>
      {/* 1. Hero Section (Flexbox & CSS Grid) */}
      <section className="flex flex-col gap-8 max-w-4xl" aria-labelledby="hero-heading">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 px-3 py-1 text-xs font-mono font-medium text-indigo-300">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            Paradigm A: Monolith
          </span>
          <span className="text-white/20 font-mono text-xs">⇄</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 px-3 py-1 text-xs font-mono font-medium text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Paradigm B: Microservices
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 text-xs font-mono font-medium text-emerald-300">
            Next.js 16 • Tailwind v4
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <h1
            id="hero-heading"
            className="font-[family-name:var(--font-heading)] text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]"
          >
            Dual Architecture{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Full-Stack Portfolio
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-foreground-muted)] leading-relaxed font-sans font-light max-w-3xl">
            A real-world engineering showcase purposefully built to contrast classic monolithic MVC cohesion and transactional reliability against modern distributed polyglot microservices agility.
          </p>
        </div>

        {/* Action CTAs (Flexbox) */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#monolith"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore Monolith</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#microservices"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-black px-5 py-3 text-sm font-semibold shadow-lg shadow-cyan-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore Microservices</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#tech-matrix"
            className="inline-flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-3 text-sm font-medium transition-all hover:border-white/20"
          >
            <span>Architecture Matrix</span>
          </a>
        </div>
      </section>

      {/* 2. Dual Architecture Cards (CSS Grid: 2 Columns) */}
      <section id="architectures" className="flex flex-col gap-6" aria-labelledby="architectures-heading">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[var(--color-card-border)] pb-4">
          <div>
            <h2 id="architectures-heading" className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-white">
              Architectural Paradigms
            </h2>
            <p className="text-sm text-[var(--color-foreground-muted)] mt-1">
              Side-by-side comparison of two divergent approaches to enterprise system design.
            </p>
          </div>
          <span className="font-mono text-xs text-[var(--color-foreground-subtle)]">
            Layout: CSS Grid (2-Col Responsive)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Paradigm A: Monolith */}
          <article
            id="monolith"
            className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between border-[var(--color-monolith-border)] relative overflow-hidden group scroll-mt-24"
          >
            <div className="absolute top-0 right-0 h-40 w-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all" />
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 border border-indigo-500/30 px-3 py-1 text-xs font-mono font-medium text-indigo-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  Paradigm A: Monolith
                </span>
                <span className="font-mono text-xs text-indigo-300/80 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                  Django 5 + Aiven Postgres
                </span>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-semibold text-white">
                  Centralized MVC Platform
                </h3>
                <p className="text-sm sm:text-base text-[var(--color-foreground-muted)] leading-relaxed mt-2">
                  A unified application codebase maximizing schema enforcement, ACID guarantees, single-deployment simplicity, and zero-network-latency inter-module communication.
                </p>
              </div>

              {/* Monolith Highlights */}
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <svg className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Core Engine:</strong> Django REST Framework managing administrative invoicing and billing models.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <svg className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Data Store:</strong> Managed Aiven PostgreSQL with strict relational constraints and indexing.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <svg className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>In-Process Pipelines:</strong> Automated PDF deposit slip parser converting unstructured documents to relational records.</span>
                </div>
              </div>

              {/* Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">Python 3.12</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">Django REST</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">Aiven PostgreSQL</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">PDF Ingestion</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">Docker Monolith</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-indigo-300">
              <span>Token: <code className="text-white">--monolith-primary</code></span>
              <span className="h-4 w-4 rounded-full bg-[var(--color-monolith)] glow-monolith" />
            </div>
          </article>

          {/* Paradigm B: Microservices */}
          <article
            id="microservices"
            className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between border-[var(--color-micro-border)] relative overflow-hidden group scroll-mt-24"
          >
            <div className="absolute top-0 right-0 h-40 w-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all" />
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 border border-cyan-500/30 px-3 py-1 text-xs font-mono font-medium text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Paradigm B: Microservices
                </span>
                <span className="font-mono text-xs text-cyan-300/80 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  GraphQL + Polyglot Mesh
                </span>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-semibold text-white">
                  Distributed Event-Driven Mesh
                </h3>
                <p className="text-sm sm:text-base text-[var(--color-foreground-muted)] leading-relaxed mt-2">
                  Deconstructed, domain-aligned microservices leveraging polyglot persistence, asynchronous state propagation, and unified schema stitching via Apollo GraphQL.
                </p>
              </div>

              {/* Microservices Highlights */}
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <svg className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>API Gateway:</strong> Apollo Server GraphQL aggregating independent REST, gRPC, and WebSocket backends.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <svg className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Payroll Engine:</strong> Python service (Coati) running on Supabase with dynamic Mexican SAT tax calculations.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <svg className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Real-time State:</strong> Node.js telemetry pipeline on MongoDB Atlas and live support chat on Firebase.</span>
                </div>
              </div>

              {/* Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">Node / Apollo</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">Supabase Postgres</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">MongoDB Atlas</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">Firebase Firestore</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">gRPC & AI/Vector</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-cyan-300">
              <span>Token: <code className="text-white">--micro-primary</code></span>
              <span className="h-4 w-4 rounded-full bg-[var(--color-micro)] glow-micro" />
            </div>
          </article>
        </div>
      </section>

      {/* 3. Architecture Comparison Matrix (CSS Grid: 4 Columns) */}
      <section id="tech-matrix" className="flex flex-col gap-6 scroll-mt-24" aria-labelledby="matrix-heading">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[var(--color-card-border)] pb-4">
          <div>
            <h2 id="matrix-heading" className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-white">
              Architectural Trade-Off Matrix
            </h2>
            <p className="text-sm text-[var(--color-foreground-muted)] mt-1">
              Rigorous side-by-side engineering breakdown across four critical architectural dimensions.
            </p>
          </div>
          <span className="font-mono text-xs text-[var(--color-foreground-subtle)]">
            Layout: CSS Grid (4-Col Responsive)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Dimension 1: Persistence */}
          <div className="glass-panel rounded-xl p-6 flex flex-col justify-between gap-4 border-white/5">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-[var(--color-foreground-subtle)] uppercase tracking-wider">
                Dimension 01
              </span>
              <h3 className="text-lg font-semibold text-white font-[family-name:var(--font-heading)]">
                Persistence Model
              </h3>
              <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
                Single unified relational database vs. polyglot storage matched to domain workloads.
              </p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5 text-xs">
              <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                <span className="font-mono font-semibold text-indigo-300 block mb-1">Monolith</span>
                <span className="text-slate-300">PostgreSQL (Aiven). Single schema, ACID guarantees across all tables.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <span className="font-mono font-semibold text-cyan-300 block mb-1">Microservices</span>
                <span className="text-slate-300">Supabase (Relational) + MongoDB (Time-series) + Firebase (NoSQL).</span>
              </div>
            </div>
          </div>

          {/* Dimension 2: Communication */}
          <div className="glass-panel rounded-xl p-6 flex flex-col justify-between gap-4 border-white/5">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-[var(--color-foreground-subtle)] uppercase tracking-wider">
                Dimension 02
              </span>
              <h3 className="text-lg font-semibold text-white font-[family-name:var(--font-heading)]">
                Communication Protocol
              </h3>
              <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
                In-memory direct function invocations vs. network-boundary serialization and RPC.
              </p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5 text-xs">
              <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                <span className="font-mono font-semibold text-indigo-300 block mb-1">Monolith</span>
                <span className="text-slate-300">In-memory method calls, ORM querysets, zero network serialization latency.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <span className="font-mono font-semibold text-cyan-300 block mb-1">Microservices</span>
                <span className="text-slate-300">Apollo GraphQL queries, gRPC binary protocols, and WebSockets.</span>
              </div>
            </div>
          </div>

          {/* Dimension 3: Scalability */}
          <div className="glass-panel rounded-xl p-6 flex flex-col justify-between gap-4 border-white/5">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-[var(--color-foreground-subtle)] uppercase tracking-wider">
                Dimension 03
              </span>
              <h3 className="text-lg font-semibold text-white font-[family-name:var(--font-heading)]">
                Scaling & Isolation
              </h3>
              <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
                Horizontal container replication of the whole stack vs. independent service scaling.
              </p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5 text-xs">
              <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                <span className="font-mono font-semibold text-indigo-300 block mb-1">Monolith</span>
                <span className="text-slate-300">Scale all modules uniformly behind a reverse proxy or load balancer.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <span className="font-mono font-semibold text-cyan-300 block mb-1">Microservices</span>
                <span className="text-slate-300">Scale high-throughput telemetry independently of payroll or auth services.</span>
              </div>
            </div>
          </div>

          {/* Dimension 4: Operational Complexity */}
          <div className="glass-panel rounded-xl p-6 flex flex-col justify-between gap-4 border-white/5">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-[var(--color-foreground-subtle)] uppercase tracking-wider">
                Dimension 04
              </span>
              <h3 className="text-lg font-semibold text-white font-[family-name:var(--font-heading)]">
                DevOps & Governance
              </h3>
              <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
                Single CI/CD pipeline and deployment artifact vs. distributed orchestration.
              </p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5 text-xs">
              <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                <span className="font-mono font-semibold text-indigo-300 block mb-1">Monolith</span>
                <span className="text-slate-300">Single Docker container, centralized logs, simple debugging and deployment.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <span className="font-mono font-semibold text-cyan-300 block mb-1">Microservices</span>
                <span className="text-slate-300">Distributed tracing, service discovery, polyglot environments in Turborepo.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 10-Sprint Roadmap Overview (CSS Grid: 3 Columns) */}
      <section id="roadmap" className="flex flex-col gap-6 scroll-mt-24" aria-labelledby="roadmap-heading">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[var(--color-card-border)] pb-4">
          <div>
            <h2 id="roadmap-heading" className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-white">
              10-Sprint Execution Roadmap
            </h2>
            <p className="text-sm text-[var(--color-foreground-muted)] mt-1">
              Phased delivery schedule progressing from UI foundations to full microservices deconstruction.
            </p>
          </div>
          <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
            Currently: Sprint 1 (Day 3 Active)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Phase 1 Card */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between gap-6 border-indigo-500/30">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                  Phase 1
                </span>
                <span className="text-xs font-mono bg-indigo-500/20 text-indigo-200 px-2 py-0.5 rounded">
                  In Progress
                </span>
              </div>
              <h3 className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">
                The Monolith & Core UI
              </h3>
              <p className="text-xs text-[var(--color-foreground-muted)]">
                Sprints 1 through 4: Building the landing gateway, Django core backend, desktop system monitor, and integration tests.
              </p>

              <ul className="space-y-2 pt-2 text-xs text-slate-300 border-t border-white/5">
                <li className="flex items-center gap-2 text-emerald-300 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Sprint 1: Landing Gateway (Next.js 16 + Tailwind v4)
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                  Sprint 2: Core Platform (Django + Aiven Postgres)
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                  Sprint 3: Desktop System Monitor (Electron/Tauri)
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                  Sprint 4: Monolithic Integration & k6 Load Tests
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-indigo-300">
              Deliverable: Unified Relational Core
            </div>
          </div>

          {/* Phase 2 Card */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between gap-6 border-cyan-500/30">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                  Phase 2
                </span>
                <span className="text-xs font-mono bg-white/5 text-[var(--color-foreground-subtle)] px-2 py-0.5 rounded">
                  Upcoming
                </span>
              </div>
              <h3 className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">
                Microservices Deconstruction
              </h3>
              <p className="text-xs text-[var(--color-foreground-muted)]">
                Sprints 5 through 8: Polyglot persistence, Node telemetry, Mexican payroll engine, and Apollo GraphQL Gateway.
              </p>

              <ul className="space-y-2 pt-2 text-xs text-slate-400 border-t border-white/5">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                  Sprint 5: Telemetry & State (MongoDB + Firebase)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                  Sprint 6: Mexican Payroll Engine (Python/Supabase)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                  Sprint 7: Apollo GraphQL & gRPC Gateway
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                  Sprint 8: AI Vector Search (pgvector)
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-cyan-300">
              Deliverable: Polyglot Microservices Mesh
            </div>
          </div>

          {/* Phase 3 Card */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between gap-6 border-emerald-500/30">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                  Phase 3
                </span>
                <span className="text-xs font-mono bg-white/5 text-[var(--color-foreground-subtle)] px-2 py-0.5 rounded">
                  Upcoming
                </span>
              </div>
              <h3 className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">
                DevOps, Shared UI & CI/CD
              </h3>
              <p className="text-xs text-[var(--color-foreground-muted)]">
                Sprints 9 and 10: Extracting shared UI packages, Docker orchestration, and automated GitHub Actions CI/CD pipelines.
              </p>

              <ul className="space-y-2 pt-2 text-xs text-slate-400 border-t border-white/5">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                  Sprint 9: Workspace Abstraction (@portfolio/shared-ui)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                  Sprint 10: Multi-Stage Docker & GitHub Actions
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                  Live Deployment: Render / Vercel Production
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-emerald-300">
              Deliverable: Production Containerization
            </div>
          </div>
        </div>
      </section>

      {/* 5. Design Tokens Specimen (Verified from Day 2) */}
      <section className="glass-panel rounded-2xl p-8 flex flex-col gap-6" aria-labelledby="tokens-specimen-heading">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-4">
          <div>
            <h2 id="tokens-specimen-heading" className="font-[family-name:var(--font-heading)] text-xl font-semibold text-white">
              Design System Palette & Token Architecture
            </h2>
            <p className="text-xs text-[var(--color-foreground-muted)] mt-1">
              Active CSS custom variables from globals.css bound to Tailwind CSS v4 `@theme`.
            </p>
          </div>
          <span className="font-mono text-xs text-[var(--color-foreground-subtle)]">
            Verified Day 2 Baseline
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="flex flex-col gap-2">
            <div className="h-14 rounded-lg bg-[var(--color-background)] border border-white/20 flex items-end p-2">
              <span className="text-[10px] font-mono text-white/70">#080C14</span>
            </div>
            <span className="text-xs font-medium text-slate-300">Background</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-14 rounded-lg bg-[var(--color-card)] border border-white/15 flex items-end p-2">
              <span className="text-[10px] font-mono text-white/70">Surface Card</span>
            </div>
            <span className="text-xs font-medium text-slate-300">Card Surface</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-14 rounded-lg bg-[var(--color-monolith)] flex items-end p-2 shadow-lg shadow-indigo-500/20">
              <span className="text-[10px] font-mono text-white">#6366F1</span>
            </div>
            <span className="text-xs font-medium text-indigo-300">Monolith Primary</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-14 rounded-lg bg-[var(--color-micro)] flex items-end p-2 shadow-lg shadow-cyan-500/20">
              <span className="text-[10px] font-mono text-black font-semibold">#06B6D4</span>
            </div>
            <span className="text-xs font-medium text-cyan-300">Micro Primary</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-14 rounded-lg bg-[#10b981] flex items-end p-2 shadow-lg shadow-emerald-500/20">
              <span className="text-[10px] font-mono text-black font-semibold">#10B981</span>
            </div>
            <span className="text-xs font-medium text-emerald-300">Emerald Secondary</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-14 rounded-lg bg-[#f59e0b] flex items-end p-2 shadow-lg shadow-amber-500/20">
              <span className="text-[10px] font-mono text-black font-semibold">#F59E0B</span>
            </div>
            <span className="text-xs font-medium text-amber-300">Tax/SAT Accent</span>
          </div>
        </div>
      </section>

      {/* 6. Recruiter Executive Brief Section */}
      <section id="recruiter-brief" className="glass-panel rounded-2xl p-8 flex flex-col gap-6 scroll-mt-24" aria-labelledby="recruiter-brief-heading">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
            For Hiring Managers & Technical Recruiters
          </span>
          <h2 id="recruiter-brief-heading" className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-white">
            Engineering Competencies Demonstrated
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-2">
            <h3 className="font-semibold text-white font-[family-name:var(--font-heading)] flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-400" />
              Full-Stack Monolith Mastery
            </h3>
            <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
              Deep expertise in Python (Django REST), PostgreSQL, complex transaction management, asynchronous workers, and relational schema migrations.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-2">
            <h3 className="font-semibold text-white font-[family-name:var(--font-heading)] flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Distributed Systems & APIs
            </h3>
            <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
              Experience designing GraphQL gateways, multi-database persistence (SQL + MongoDB + Firebase), WebSockets, and low-latency API contracts.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-2">
            <h3 className="font-semibold text-white font-[family-name:var(--font-heading)] flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Modern Web & Monorepo Tooling
            </h3>
            <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
              Turborepo monorepo management, Next.js 16 App Router, Tailwind CSS v4 CSS design tokens, TypeScript strict mode, and Docker CI/CD pipelines.
            </p>
          </div>
        </div>
      </section>
    </MainContentLayout>
  );
}
