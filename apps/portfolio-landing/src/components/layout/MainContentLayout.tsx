import React from "react";

interface MainContentLayoutProps {
  children: React.ReactNode;
}

export default function MainContentLayout({ children }: MainContentLayoutProps) {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] w-full flex flex-col bg-background text-foreground bg-tech-grid overflow-hidden">
      {/* Ambient background glow orbs - dynamically scaled for mobile to 4K displays */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/4 h-[24rem] sm:h-[32rem] 3xl:h-[50rem] w-[24rem] sm:w-[32rem] 3xl:w-[50rem] rounded-full bg-indigo-500/15 blur-[90px] sm:blur-[120px] 3xl:blur-[180px]" 
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute top-1/3 -right-20 h-[22rem] sm:h-[30rem] 3xl:h-[46rem] w-[22rem] sm:w-[30rem] 3xl:w-[46rem] rounded-full bg-cyan-500/15 blur-[90px] sm:blur-[120px] 3xl:blur-[180px]" 
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute -bottom-20 left-1/3 h-[20rem] sm:h-[28rem] 3xl:h-[42rem] w-[20rem] sm:w-[28rem] 3xl:w-[42rem] rounded-full bg-emerald-500/10 blur-[90px] sm:blur-[120px] 3xl:blur-[180px]" 
        aria-hidden="true"
      />

      {/* Main Structural Stage */}
      <main id="main-content" className="relative z-10 mx-auto w-full max-w-7xl 3xl:max-w-[1600px] 4k:max-w-[1800px] px-3.5 sm:px-6 lg:px-8 3xl:px-12 py-8 sm:py-14 3xl:py-20 flex flex-col gap-12 sm:gap-16 3xl:gap-24 flex-grow">
        {/* Milestone Tracker Strip (CSS Flexbox) */}
        <section aria-label="Milestone Progress" className="w-full">
          <div className="glass-panel rounded-xl px-3.5 py-3 sm:px-6 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-[var(--color-card-border)]">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500" />
              </span>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  Sprint 2 • Day 2 Active
                </span>
                <span className="hidden sm:inline text-white/30">•</span>
                <span className="text-xs text-[var(--color-foreground-muted)] hidden sm:inline">
                  Aiven PostgreSQL Database Connection & psycopg2 Integration
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-[var(--color-foreground-subtle)] self-start sm:self-auto">
              <span className="rounded bg-white/5 px-2 py-0.5 border border-white/10 text-indigo-300">
                Monolith [Django]
              </span>
              <span className="text-white/20">⇄</span>
              <span className="rounded bg-white/5 px-2 py-0.5 border border-white/10 text-cyan-300">
                Microservices [GraphQL]
              </span>
            </div>
          </div>
        </section>

        {/* Page Main Content Area */}
        {children}
      </main>
    </div>
  );
}
