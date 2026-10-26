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
    <section
      className="relative flex flex-col gap-8 sm:gap-10 lg:gap-14 3xl:gap-20 max-w-5xl 3xl:max-w-7xl"
      aria-labelledby="hero-heading"
    >
      {/* 1. System Status & Architecture Pill Badges */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono font-medium text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Sprint 1 • Day 5 Active
        </div>

        <span className="text-white/20 font-mono text-xs hidden sm:inline">•</span>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono font-medium text-indigo-300">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          Paradigm A: Monolith
        </span>

        <span className="text-white/20 font-mono text-xs">⇄</span>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono font-medium text-cyan-300">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          Paradigm B: Microservices
        </span>

        <span className="text-white/20 font-mono text-xs hidden md:inline">•</span>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono text-slate-300">
          Next.js 16 + Tailwind v4
        </span>
      </div>

      {/* 2. Main Value Proposition & High-Impact Headline */}
      <div className="flex flex-col gap-3.5 sm:gap-5">
        <h1
          id="hero-heading"
          className="font-[family-name:var(--font-heading)] text-3xl xs:text-4xl sm:text-6xl lg:text-7xl 3xl:text-8xl 4k:text-9xl font-bold tracking-tight text-white leading-[1.08] 3xl:leading-[1.04]"
        >
          Dual Architecture{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Full-Stack Showcase
          </span>
        </h1>

        <p className="text-sm xs:text-base sm:text-xl 3xl:text-2xl text-[var(--color-foreground-muted)] leading-relaxed font-sans font-normal max-w-3xl 3xl:max-w-5xl">
          A production-grade engineering portfolio purposefully built to contrast classic
          <span className="text-indigo-300 font-medium"> monolithic MVC cohesion and ACID transactional guarantees </span>
          against modern
          <span className="text-cyan-300 font-medium"> distributed polyglot microservices agility </span>
          within a unified Turborepo workspace.
        </p>
      </div>

      {/* 3. Interactive Quick Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 rounded-xl bg-white/5 border border-white/10 w-full sm:w-fit backdrop-blur-md 3xl:p-2.5 3xl:gap-4">
        <span className="text-[11px] sm:text-xs 3xl:text-sm font-mono text-[var(--color-foreground-subtle)] px-2 sm:px-2.5 w-full xs:w-auto">
          View Focus:
        </span>
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full xs:w-auto">
          <button
            type="button"
            onClick={() => handleTabChange("all")}
            className={`flex-1 xs:flex-initial px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs 3xl:text-sm font-medium font-mono transition-all text-center ${
              activeTab === "all"
                ? "bg-white/15 text-white shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            Compare Both
          </button>
          <button
            type="button"
            onClick={() => handleTabChange("monolith")}
            className={`flex-1 xs:flex-initial px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs 3xl:text-sm font-medium font-mono transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "monolith"
                ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shadow-sm"
                : "text-slate-400 hover:text-indigo-300 hover:bg-indigo-500/10"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
            Monolith (Django 5)
          </button>
          <button
            type="button"
            onClick={() => handleTabChange("micro")}
            className={`flex-1 xs:flex-initial px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs 3xl:text-sm font-medium font-mono transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "micro"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm"
                : "text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/10"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
            Microservices (GraphQL)
          </button>
        </div>
      </div>

      {/* 4. Action CTAs */}
      <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 sm:gap-4 3xl:gap-6">
        <a
          href="#monolith"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white px-4 sm:px-5 py-2.5 sm:py-3 3xl:px-8 3xl:py-4 text-xs sm:text-sm 3xl:text-base font-semibold shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Explore Monolith</span>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>

        <a
          href="#microservices"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 sm:px-5 py-2.5 sm:py-3 3xl:px-8 3xl:py-4 text-xs sm:text-sm 3xl:text-base font-semibold shadow-lg shadow-cyan-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Explore Microservices</span>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>

        <a
          href="#tech-matrix"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 sm:px-5 py-2.5 sm:py-3 3xl:px-8 3xl:py-4 text-xs sm:text-sm 3xl:text-base font-medium transition-all hover:border-white/20"
        >
          <span>Trade-Off Matrix</span>
        </a>

        <a
          href="#recruiter-brief"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-4 sm:px-5 py-2.5 sm:py-3 3xl:px-8 3xl:py-4 text-xs sm:text-sm 3xl:text-base font-medium transition-all"
        >
          <span>Recruiter Brief</span>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>

      {/* 5. Architectural KPI Metrics Strip (CSS Grid) */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 3xl:gap-6 pt-2">
        {/* KPI 1 */}
        <div className="glass-panel glass-panel-hover rounded-xl p-3.5 sm:p-4 3xl:p-6 flex flex-col gap-1 border-white/5">
          <span className="text-[10px] sm:text-[11px] 3xl:text-xs font-mono uppercase tracking-wider text-indigo-300">
            Monolith Speed
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl xs:text-2xl sm:text-3xl 3xl:text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
              &lt; 15ms
            </span>
          </div>
          <p className="text-[11px] sm:text-xs 3xl:text-sm text-[var(--color-foreground-muted)]">
            In-process function calls with zero network serialization
          </p>
        </div>

        {/* KPI 2 */}
        <div className="glass-panel glass-panel-hover rounded-xl p-3.5 sm:p-4 3xl:p-6 flex flex-col gap-1 border-white/5">
          <span className="text-[10px] sm:text-[11px] 3xl:text-xs font-mono uppercase tracking-wider text-cyan-300">
            Mesh Topology
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl xs:text-2xl sm:text-3xl 3xl:text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
              4 Services
            </span>
          </div>
          <p className="text-[11px] sm:text-xs 3xl:text-sm text-[var(--color-foreground-muted)]">
            Gateway, Coati Payroll, Telemetry & Chat
          </p>
        </div>

        {/* KPI 3 */}
        <div className="glass-panel glass-panel-hover rounded-xl p-3.5 sm:p-4 3xl:p-6 flex flex-col gap-1 border-white/5">
          <span className="text-[10px] sm:text-[11px] 3xl:text-xs font-mono uppercase tracking-wider text-emerald-300">
            Data Engines
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl xs:text-2xl sm:text-3xl 3xl:text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
              4 Databases
            </span>
          </div>
          <p className="text-[11px] sm:text-xs 3xl:text-sm text-[var(--color-foreground-muted)]">
            Aiven Postgres, Supabase, Mongo Atlas & Firebase
          </p>
        </div>

        {/* KPI 4 */}
        <div className="glass-panel glass-panel-hover rounded-xl p-3.5 sm:p-4 3xl:p-6 flex flex-col gap-1 border-white/5">
          <span className="text-[10px] sm:text-[11px] 3xl:text-xs font-mono uppercase tracking-wider text-amber-300">
            Delivery Scope
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl xs:text-2xl sm:text-3xl 3xl:text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
              10 Sprints
            </span>
          </div>
          <p className="text-[11px] sm:text-xs 3xl:text-sm text-[var(--color-foreground-muted)]">
            Full-lifecycle engineering with Docker & CI/CD
          </p>
        </div>
      </div>
    </section>
  );
}
