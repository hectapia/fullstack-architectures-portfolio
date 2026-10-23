export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground bg-tech-grid flex flex-col justify-between overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Main Container */}
      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:py-20 flex flex-col gap-14">
        {/* Top Status & Sprint Milestone */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-card-border)] pb-6">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-foreground-muted)]">
              Sprint 1 • Day 2 — Design System & Design Tokens
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-foreground-subtle)]">
            <span className="rounded bg-white/5 px-2 py-1 border border-white/10">Next.js 16</span>
            <span className="rounded bg-white/5 px-2 py-1 border border-white/10">Tailwind CSS v4</span>
            <span className="rounded bg-white/5 px-2 py-1 border border-white/10">Turborepo</span>
          </div>
        </div>

        {/* Hero Specimen */}
        <section className="flex flex-col gap-6 max-w-3xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Dual Architecture{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Full-Stack Portfolio
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-foreground-muted)] leading-relaxed font-sans font-light">
            An enterprise-scale demonstration contrasting classic monolithic MVC reliability against distributed polyglot microservices agility.
          </p>
        </section>

        {/* Dual Architecture Token Showcase */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Monolith Paradigm Card */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between border-[var(--color-monolith-border)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 h-32 w-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all" />
            <div className="flex flex-col gap-5 relative z-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 border border-indigo-500/30 px-3 py-1 text-xs font-mono font-medium text-indigo-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  Paradigm A: Monolith
                </span>
                <span className="font-mono text-xs text-[var(--color-foreground-subtle)]">Django + Aiven</span>
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white">
                Centralized MVC Architecture
              </h2>
              <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed">
                Single deployable unit optimizing for transactional integrity, strict relational schemas, in-process performance, and low operational overhead.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">Python 3.12</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">Django REST</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">PostgreSQL</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">PDF Ingestion</span>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-indigo-300">
              <span>Token: <code className="text-white">--monolith-primary</code></span>
              <span className="h-4 w-4 rounded-full bg-[var(--color-monolith)] glow-monolith" />
            </div>
          </div>

          {/* Microservices Paradigm Card */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between border-[var(--color-micro-border)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 h-32 w-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />
            <div className="flex flex-col gap-5 relative z-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 border border-cyan-500/30 px-3 py-1 text-xs font-mono font-medium text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Paradigm B: Microservices
                </span>
                <span className="font-mono text-xs text-[var(--color-foreground-subtle)]">Polyglot / GraphQL</span>
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white">
                Distributed Event-Driven Services
              </h2>
              <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed">
                Independently scalable domain services connected through an Apollo GraphQL Gateway, combining Supabase, MongoDB Atlas, and Firebase Firestore.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">Node / GraphQL</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">Payroll Engine</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">Telemetry Ingest</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">WebSockets</span>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-cyan-300">
              <span>Token: <code className="text-white">--micro-primary</code></span>
              <span className="h-4 w-4 rounded-full bg-[var(--color-micro)] glow-micro" />
            </div>
          </div>
        </section>

        {/* Design System Tokens Specimen Grid */}
        <section className="glass-panel rounded-2xl p-8 flex flex-col gap-6">
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-white">
              Design System Palette & Typography Specimen
            </h3>
            <p className="text-sm text-[var(--color-foreground-muted)] mt-1">
              Engineered with CSS custom variables, Tailwind CSS v4, and Google Fonts (Outfit, Geist Sans, Geist Mono).
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
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
      </main>

      {/* Footer Status */}
      <footer className="relative z-10 border-t border-[var(--color-card-border)] py-6 px-6 sm:px-8 text-center text-xs font-mono text-[var(--color-foreground-subtle)]">
        Fullstack Architectures Portfolio • Sprint 1 Day 2 • Ready for Structural Layouts (Day 3)
      </footer>
    </div>
  );
}
