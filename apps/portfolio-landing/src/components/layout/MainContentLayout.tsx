import React from "react";

interface MainContentLayoutProps {
  children: React.ReactNode;
}

export default function MainContentLayout({ children }: MainContentLayoutProps) {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] w-full flex flex-col bg-background text-foreground bg-tech-grid overflow-hidden">
      {/* Ambient background glow orbs */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-indigo-500/15 blur-[120px]" 
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute top-1/3 -right-20 h-[30rem] w-[30rem] rounded-full bg-cyan-500/15 blur-[120px]" 
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute -bottom-20 left-1/3 h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-[120px]" 
        aria-hidden="true"
      />

      {/* Main Structural Stage */}
      <main id="main-content" className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex flex-col gap-14 sm:gap-20 flex-grow">
        {/* Milestone Tracker Strip (CSS Flexbox) */}
        <section aria-label="Milestone Progress" className="w-full">
          <div className="glass-panel rounded-xl px-4 py-3 sm:px-6 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-[var(--color-card-border)]">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
                  Sprint 1 • Day 3
                </span>
                <span className="hidden sm:inline text-white/30">•</span>
                <span className="text-xs text-[var(--color-foreground-muted)] hidden sm:inline">
                  Structural Layouts (Navbar, Footer & CSS Grid Main Stage)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--color-foreground-subtle)]">
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
