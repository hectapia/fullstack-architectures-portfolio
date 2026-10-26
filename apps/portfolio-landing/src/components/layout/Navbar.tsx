"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeParadigm, setActiveParadigm] = useState<"all" | "monolith" | "micro">("all");

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[var(--color-background)]/80 border-b border-[var(--color-card-border)] transition-colors">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl 3xl:max-w-[1600px] 4k:max-w-[1800px] items-center justify-between px-4 sm:px-6 lg:px-8 3xl:px-12">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="Dual Architecture Portfolio Home"
          >
            {/* Dual Architecture Icon Glyph */}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-inner overflow-hidden group-hover:border-indigo-500/50 transition-colors">
              <span className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-cyan-500/20" />
              <svg
                className="h-5 w-5 text-white relative z-10 transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Monolith Cube + Microservices Nodes */}
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                Dual<span className="text-cyan-400">Arch</span>
                <span className="hidden sm:inline-block rounded-full bg-indigo-500/15 border border-indigo-500/30 px-2 py-0.5 text-[10px] font-mono font-medium text-indigo-300">
                  Portfolio
                </span>
              </span>
              <span className="text-[10px] font-mono text-[var(--color-foreground-subtle)] -mt-1 hidden sm:block">
                Monolith ⇄ Microservices
              </span>
            </div>
          </Link>

          {/* System Status Indicator Badge */}
          <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono text-[var(--color-foreground-muted)]">
              SYSTEM: ONLINE
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2"
          aria-label="Main Navigation"
        >
          <a
            href="#architectures"
            className="px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium text-[var(--color-foreground-muted)] hover:text-white hover:bg-white/5 transition-all"
          >
            Architectures
          </a>
          <a
            href="#monolith"
            className="group px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium text-[var(--color-foreground-muted)] hover:text-indigo-300 hover:bg-indigo-500/10 transition-all flex items-center gap-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 opacity-60 group-hover:opacity-100" />
            Monolith
          </a>
          <a
            href="#microservices"
            className="group px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium text-[var(--color-foreground-muted)] hover:text-cyan-300 hover:bg-cyan-500/10 transition-all flex items-center gap-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 opacity-60 group-hover:opacity-100" />
            Microservices
          </a>
          <a
            href="#tech-matrix"
            className="px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium text-[var(--color-foreground-muted)] hover:text-white hover:bg-white/5 transition-all"
          >
            Tech Matrix
          </a>
          <a
            href="#roadmap"
            className="px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium text-[var(--color-foreground-muted)] hover:text-white hover:bg-white/5 transition-all"
          >
            Roadmap
          </a>
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Paradigm Quick Highlight Selector (Desktop) */}
          <div className="hidden xl:flex items-center p-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono">
            <button
              type="button"
              onClick={() => setActiveParadigm("all")}
              className={`px-2 py-1 rounded transition-colors ${
                activeParadigm === "all"
                  ? "bg-white/10 text-white font-medium"
                  : "text-[var(--color-foreground-subtle)] hover:text-white"
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setActiveParadigm("monolith")}
              className={`px-2 py-1 rounded transition-colors flex items-center gap-1 ${
                activeParadigm === "monolith"
                  ? "bg-indigo-500/20 text-indigo-300 font-medium"
                  : "text-[var(--color-foreground-subtle)] hover:text-indigo-300"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Monolith
            </button>
            <button
              type="button"
              onClick={() => setActiveParadigm("micro")}
              className={`px-2 py-1 rounded transition-colors flex items-center gap-1 ${
                activeParadigm === "micro"
                  ? "bg-cyan-500/20 text-cyan-300 font-medium"
                  : "text-[var(--color-foreground-subtle)] hover:text-cyan-300"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Micro
            </button>
          </div>

          {/* GitHub Repository Link */}
          <a
            href="https://github.com/hectapia/fullstack-architectures-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-mono text-slate-300 transition-all hover:border-white/20"
            aria-label="GitHub Repository"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span className="hidden sm:inline">Repo</span>
          </a>

          {/* Recruiter Showcase CTA Button */}
          <a
            href="#recruiter-brief"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 p-[1px] font-sans text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:shadow-cyan-500/25 active:scale-95"
          >
            <span className="flex items-center gap-1.5 rounded-[7px] bg-[var(--color-background)] px-3 py-1.5 transition-all duration-200 group-hover:bg-transparent">
              <span className="hidden lg:inline">Recruiter</span> Brief
              <svg
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex md:hidden items-center justify-center min-h-[44px] min-w-[44px] rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all touch-manipulation cursor-pointer select-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-5 w-5 pointer-events-none"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 pointer-events-none"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--color-card-border)] bg-[var(--background)]/95 backdrop-blur-2xl px-4 py-6 transition-all duration-200 max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <nav className="flex flex-col gap-2">
            <a
              href="#architectures"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 text-sm font-medium text-white hover:bg-white/10"
            >
              <span>Dual Architectures</span>
              <span className="text-xs font-mono text-[var(--color-foreground-subtle)]">Overview</span>
            </a>
            <a
              href="#monolith"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-sm font-medium text-indigo-300 hover:bg-indigo-500/20"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
                <span>Monolith (Django + Aiven)</span>
              </div>
              <span className="text-xs font-mono">Sprint 2</span>
            </a>
            <a
              href="#microservices"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-sm font-medium text-cyan-300 hover:bg-cyan-500/20"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                <span>Microservices (GraphQL/Polyglot)</span>
              </div>
              <span className="text-xs font-mono">Sprint 5-8</span>
            </a>
            <a
              href="#tech-matrix"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 text-sm font-medium text-white hover:bg-white/10"
            >
              <span>Tech Stack Matrix</span>
              <span className="text-xs font-mono text-[var(--color-foreground-subtle)]">Grid</span>
            </a>
            <a
              href="#roadmap"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 text-sm font-medium text-white hover:bg-white/10"
            >
              <span>10-Sprint Roadmap</span>
              <span className="text-xs font-mono text-[var(--color-foreground-subtle)]">Phases 1-3</span>
            </a>
          </nav>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-[var(--color-foreground-muted)]">
                Sprint 1 • Day 5 Live
              </span>
            </div>
            <span className="text-xs font-mono text-[var(--color-foreground-subtle)]">
              Next.js 16 + Tailwind v4
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
