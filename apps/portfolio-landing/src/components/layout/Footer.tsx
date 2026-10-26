import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-20 w-full border-t border-[var(--color-card-border)] bg-[var(--color-background)]/90 backdrop-blur-xl">
      {/* Upper Grid Layout Section */}
      <div className="mx-auto max-w-7xl 3xl:max-w-[1600px] 4k:max-w-[1800px] px-4 py-10 sm:px-6 sm:py-16 3xl:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Column 1: Brand & Executive Summary (spans 2 cols on wide screens) */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-white">
                Dual<span className="text-cyan-400">Arch</span> Portfolio
              </span>
            </div>

            <p className="max-w-md text-sm text-[var(--color-foreground-muted)] leading-relaxed font-sans">
              An enterprise full-stack engineering portfolio deliberately engineered to contrast monolithic transactional integrity (Django, PostgreSQL, Aiven) against distributed event-driven agility (GraphQL, Supabase, MongoDB, Firebase).
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 text-xs font-mono text-indigo-300">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                Monolith MVC
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 text-xs font-mono text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Microservices Polyglot
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-xs font-mono text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Turborepo
              </span>
            </div>
          </div>

          {/* Column 2: Monolith Architecture */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-300 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Monolith Paradigm
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[var(--color-foreground-muted)]">
              <li>
                <a href="#monolith" className="hover:text-white transition-colors">
                  Django REST Core Platform
                </a>
              </li>
              <li>
                <span className="text-[var(--color-foreground-subtle)]">Aiven PostgreSQL Cloud</span>
              </li>
              <li>
                <span className="text-[var(--color-foreground-subtle)]">Administrative PDF Parser</span>
              </li>
              <li>
                <span className="text-[var(--color-foreground-subtle)]">Relational ACID Transactions</span>
              </li>
              <li>
                <span className="text-[var(--color-foreground-subtle)]">Desktop System Monitor (Electron/Tauri)</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Microservices Architecture */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Microservices Paradigm
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[var(--color-foreground-muted)]">
              <li>
                <a href="#microservices" className="hover:text-white transition-colors">
                  Apollo GraphQL Gateway
                </a>
              </li>
              <li>
                <span className="text-[var(--color-foreground-subtle)]">Coati Mexican Payroll Engine</span>
              </li>
              <li>
                <span className="text-[var(--color-foreground-subtle)]">Telemetry Ingestion (MongoDB)</span>
              </li>
              <li>
                <span className="text-[var(--color-foreground-subtle)]">Real-time Chat (Firebase)</span>
              </li>
              <li>
                <span className="text-[var(--color-foreground-subtle)]">AI/ML Classification (pgvector)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Recruiter & Verification */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Recruiter Hub
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[var(--color-foreground-muted)]">
              <li>
                <a
                  href="https://github.com/hectapia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>GitHub Profile</span>
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#recruiter-brief"
                  className="hover:text-white transition-colors"
                >
                  Candidate Architecture Brief
                </a>
              </li>
              <li>
                <a
                  href="#roadmap"
                  className="hover:text-white transition-colors"
                >
                  10-Sprint Execution Log
                </a>
              </li>
              <li>
                <span className="text-xs font-mono text-[var(--color-foreground-subtle)]">
                  License: MIT Enterprise
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Telemetry & System Status Ribbon */}
        <div className="mt-10 sm:mt-12 rounded-xl border border-white/5 bg-white/[0.02] p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[var(--color-foreground-muted)]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Gateway: Online</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div>Next.js 16.4.2</div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div>Tailwind CSS v4</div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div>Turborepo Monorepo</div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 text-[var(--color-foreground-subtle)]">
            <span className="text-emerald-400 font-medium">Sprint 1 • Day 5 Live</span>
            <span className="text-white/20">•</span>
            <span className="text-slate-400">Multi-Display Responsive</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar (Flexbox) */}
      <div className="border-t border-white/5 bg-black/40 px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl 3xl:max-w-[1600px] 4k:max-w-[1800px] 3xl:px-12 flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs font-mono text-[var(--color-foreground-subtle)] text-center sm:text-left">
          <p>© 2026 Hector Olivares Tapia. Monolithic & Microservices Dual Architecture Portfolio.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#architectures"
              className="hover:text-white transition-colors"
            >
              Architectures
            </a>
            <a
              href="#tech-matrix"
              className="hover:text-white transition-colors"
            >
              Tech Matrix
            </a>
            <a
              href="#"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <span>Back to Top</span>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
