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
    <section
      id="architectures"
      className="flex flex-col gap-8 scroll-mt-24"
      aria-labelledby="architectures-heading"
    >
      {/* Header & Paradigm Switcher Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--color-card-border)] pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-cyan-300">
              Comparative Analysis
            </span>
          </div>
          <h2
            id="architectures-heading"
            className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-white tracking-tight"
          >
            Dual Architecture Choice Cards
          </h2>
          <p className="text-sm text-[var(--color-foreground-muted)] mt-1 max-w-2xl">
            Compare architectural trade-offs, data persistence strategies, and communication protocols side-by-side.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 self-start md:self-end">
          <button
            type="button"
            onClick={() => onParadigmChange?.("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeParadigm === "all"
                ? "bg-white/15 text-white font-medium"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            All Paradigms
          </button>
          <button
            type="button"
            onClick={() => onParadigmChange?.("monolith")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              activeParadigm === "monolith"
                ? "bg-indigo-500/25 text-indigo-300 font-medium border border-indigo-500/30"
                : "text-slate-400 hover:text-indigo-300 hover:bg-indigo-500/10"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            Monolith
          </button>
          <button
            type="button"
            onClick={() => onParadigmChange?.("micro")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              activeParadigm === "micro"
                ? "bg-cyan-500/25 text-cyan-300 font-medium border border-cyan-500/30"
                : "text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/10"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Microservices
          </button>
        </div>
      </div>

      {/* Choice Cards Container (Responsive Grid: 1 Col on mobile, 2 Col on desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* ============================================================ */}
        {/* PARADIGM A: MONOLITH CARD                                   */}
        {/* ============================================================ */}
        <article
          id="monolith"
          className={`glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border transition-all duration-300 relative overflow-hidden group scroll-mt-24 ${
            isMonolithActive
              ? "border-indigo-500/40 shadow-xl shadow-indigo-500/10 opacity-100 ring-1 ring-indigo-500/20"
              : "border-white/5 opacity-50 hover:opacity-80"
          }`}
        >
          {/* Ambient Glow Orb */}
          <div className="absolute top-0 right-0 h-48 w-48 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/25 transition-all" />

          <div className="flex flex-col gap-6 relative z-10">
            {/* Top Badges */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 border border-indigo-500/30 px-3 py-1 text-xs font-mono font-medium text-indigo-300">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                Paradigm A: Monolith
              </span>
              <span className="font-mono text-xs text-indigo-300/90 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                Phase 1 • Sprint 2 Deliverable
              </span>
            </div>

            {/* Title & Core Philosophy */}
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-white">
                Centralized MVC Platform
              </h3>
              <p className="text-sm sm:text-base text-[var(--color-foreground-muted)] leading-relaxed mt-2 font-normal">
                A single unified application repository maximizing schema cohesion, ACID transaction guarantees, simplified zero-network in-memory operations, and effortless single-container deployment.
              </p>
            </div>

            {/* Interactive Architecture Schematic Simulation */}
            <div className="rounded-xl bg-slate-950/70 border border-indigo-500/20 p-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                <span className="text-[11px] uppercase tracking-wider text-indigo-400 font-semibold flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Monolithic Request Pipeline
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setActiveSimulation(activeSimulation === "monolith" ? "none" : "monolith")
                  }
                  className="px-2 py-0.5 rounded bg-indigo-500/20 hover:bg-indigo-500/30 text-[10px] text-indigo-200 transition-colors"
                >
                  {activeSimulation === "monolith" ? "Reset Flow" : "Simulate Flow"}
                </button>
              </div>

              {/* Data Flow Sequence */}
              <div className="space-y-2">
                <div
                  className={`flex items-center gap-2 p-2 rounded-lg transition-all ${
                    activeSimulation === "monolith"
                      ? "bg-indigo-500/20 text-white font-medium"
                      : "bg-white/[0.02] text-slate-300"
                  }`}
                >
                  <span className="h-5 w-5 rounded bg-indigo-500/30 text-indigo-300 flex items-center justify-center text-[10px] shrink-0">
                    1
                  </span>
                  <div className="flex-1 flex justify-between">
                    <span>HTTP Client (Next.js)</span>
                    <span className="text-white/40 text-[10px]">POST /api/invoices/</span>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-2 p-2 rounded-lg transition-all ${
                    activeSimulation === "monolith"
                      ? "bg-indigo-500/25 text-white font-medium pl-4"
                      : "bg-white/[0.02] text-slate-300"
                  }`}
                >
                  <span className="h-5 w-5 rounded bg-indigo-500/30 text-indigo-300 flex items-center justify-center text-[10px] shrink-0">
                    2
                  </span>
                  <div className="flex-1 flex justify-between">
                    <span>Django 5 REST Core</span>
                    <span className="text-white/40 text-[10px]">Auth + PDF Ingestion</span>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-2 p-2 rounded-lg transition-all ${
                    activeSimulation === "monolith"
                      ? "bg-indigo-500/30 text-white font-medium pl-6 border border-indigo-500/40"
                      : "bg-white/[0.02] text-slate-300"
                  }`}
                >
                  <span className="h-5 w-5 rounded bg-indigo-500/30 text-indigo-300 flex items-center justify-center text-[10px] shrink-0">
                    3
                  </span>
                  <div className="flex-1 flex justify-between">
                    <span>Aiven PostgreSQL</span>
                    <span className="text-emerald-400 text-[10px]">ACID Commit (0.8ms)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Architectural Pillars */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <div className="h-5 w-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <strong className="text-white font-medium">ACID Guarantees: </strong>
                  Single relational schema prevents state drift and distributed transaction failure modes.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="h-5 w-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <strong className="text-white font-medium">Zero Network Latency: </strong>
                  In-memory method calls and ORM queries without RPC/HTTP serialization penalty.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="h-5 w-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <strong className="text-white font-medium">Domain Focus: </strong>
                  Administrative invoicing, billing models, and native PDF deposit slip parser pipeline.
                </div>
              </div>
            </div>

            {/* Technology Stack Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-indigo-200">
                Python 3.12
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-indigo-200">
                Django 5.x
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-indigo-200">
                Django REST
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-indigo-200">
                Aiven PostgreSQL
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-indigo-200">
                PyPDF Parser
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-indigo-200">
                Docker Single Unit
              </span>
            </div>
          </div>

          {/* Bottom Card Footer & Action */}
          <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
            <a
              href="#tech-matrix"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-indigo-300 hover:text-white transition-colors"
            >
              <span>View Monolith Matrix</span>
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <span className="text-xs font-mono text-[var(--color-foreground-subtle)]">
              Latency: <span className="text-indigo-300 font-semibold">&lt; 15ms</span>
            </span>
          </div>
        </article>

        {/* ============================================================ */}
        {/* PARADIGM B: MICROSERVICES CARD                              */}
        {/* ============================================================ */}
        <article
          id="microservices"
          className={`glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border transition-all duration-300 relative overflow-hidden group scroll-mt-24 ${
            isMicroActive
              ? "border-cyan-500/40 shadow-xl shadow-cyan-500/10 opacity-100 ring-1 ring-cyan-500/20"
              : "border-white/5 opacity-50 hover:opacity-80"
          }`}
        >
          {/* Ambient Glow Orb */}
          <div className="absolute top-0 right-0 h-48 w-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/25 transition-all" />

          <div className="flex flex-col gap-6 relative z-10">
            {/* Top Badges */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 border border-cyan-500/30 px-3 py-1 text-xs font-mono font-medium text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Paradigm B: Microservices
              </span>
              <span className="font-mono text-xs text-cyan-300/90 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                Phase 2 • Sprints 5-8 Mesh
              </span>
            </div>

            {/* Title & Core Philosophy */}
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-white">
                Distributed Event Mesh
              </h3>
              <p className="text-sm sm:text-base text-[var(--color-foreground-muted)] leading-relaxed mt-2 font-normal">
                Deconstructed, domain-aligned independent microservices leveraging polyglot storage, high-throughput independent autoscaling, and schema stitching via an Apollo GraphQL Gateway.
              </p>
            </div>

            {/* Interactive Architecture Schematic Simulation */}
            <div className="rounded-xl bg-slate-950/70 border border-cyan-500/20 p-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                <span className="text-[11px] uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Federated Gateway Pipeline
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setActiveSimulation(activeSimulation === "micro" ? "none" : "micro")
                  }
                  className="px-2 py-0.5 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-[10px] text-cyan-200 transition-colors"
                >
                  {activeSimulation === "micro" ? "Reset Flow" : "Simulate Flow"}
                </button>
              </div>

              {/* Data Flow Sequence */}
              <div className="space-y-2">
                <div
                  className={`flex items-center gap-2 p-2 rounded-lg transition-all ${
                    activeSimulation === "micro"
                      ? "bg-cyan-500/20 text-white font-medium"
                      : "bg-white/[0.02] text-slate-300"
                  }`}
                >
                  <span className="h-5 w-5 rounded bg-cyan-500/30 text-cyan-300 flex items-center justify-center text-[10px] shrink-0">
                    1
                  </span>
                  <div className="flex-1 flex justify-between">
                    <span>GraphQL Client</span>
                    <span className="text-white/40 text-[10px]">query {`{ payroll, telemetry }`}</span>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-2 p-2 rounded-lg transition-all ${
                    activeSimulation === "micro"
                      ? "bg-cyan-500/25 text-white font-medium pl-4"
                      : "bg-white/[0.02] text-slate-300"
                  }`}
                >
                  <span className="h-5 w-5 rounded bg-cyan-500/30 text-cyan-300 flex items-center justify-center text-[10px] shrink-0">
                    2
                  </span>
                  <div className="flex-1 flex justify-between">
                    <span>Apollo GraphQL Gateway</span>
                    <span className="text-cyan-300 text-[10px]">Concurrent Dispatch</span>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-2 p-2 rounded-lg transition-all ${
                    activeSimulation === "micro"
                      ? "bg-cyan-500/30 text-white font-medium pl-6 border border-cyan-500/40"
                      : "bg-white/[0.02] text-slate-300"
                  }`}
                >
                  <span className="h-5 w-5 rounded bg-cyan-500/30 text-cyan-300 flex items-center justify-center text-[10px] shrink-0">
                    3
                  </span>
                  <div className="flex-1 flex justify-between">
                    <span>Polyglot Mesh (Supabase/Mongo/Firebase)</span>
                    <span className="text-emerald-400 text-[10px]">Aggregated JSON</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Architectural Pillars */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <div className="h-5 w-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <strong className="text-white font-medium">Polyglot Persistence: </strong>
                  Matching storage to domain: Supabase Postgres (Payroll), MongoDB (Telemetry), Firebase (Real-time).
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="h-5 w-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <strong className="text-white font-medium">Isolated Failure Domains: </strong>
                  Heavy desktop telemetry ingestion cannot bring down mission-critical payroll calculations.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="h-5 w-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <strong className="text-white font-medium">Domain Focus: </strong>
                  Mexican SAT tax calculator (Coati), high-speed MongoDB telemetry, and live WebSocket support chat.
                </div>
              </div>
            </div>

            {/* Technology Stack Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-200">
                Node / Apollo
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-200">
                GraphQL + gRPC
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-200">
                Supabase Postgres
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-200">
                MongoDB Atlas
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-200">
                Firebase Firestore
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-200">
                Python (Coati)
              </span>
            </div>
          </div>

          {/* Bottom Card Footer & Action */}
          <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
            <a
              href="#tech-matrix"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-300 hover:text-white transition-colors"
            >
              <span>View Microservices Matrix</span>
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <span className="text-xs font-mono text-[var(--color-foreground-subtle)]">
              Scalability: <span className="text-cyan-300 font-semibold">Independent Pods</span>
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
