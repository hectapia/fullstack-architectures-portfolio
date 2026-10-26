"use client";

import React, { useState } from "react";
import {
  submitWaitlistEntry,
  isSupabaseConfigured,
  WaitlistSubmission,
  SubmissionResult,
} from "@/lib/supabaseClient";

export default function ContactWaitlistSection() {
  const [formData, setFormData] = useState<WaitlistSubmission>({
    full_name: "",
    email: "",
    role: "Recruiter",
    architecture_focus: "Both",
    message: "",
  });

  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isSupabaseConfigured) {
      setFormState("error");
      setSubmissionResult({
        success: false,
        message:
          "Supabase environment variables are missing. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to apps/portfolio-landing/.env.local and restart the server.",
      });
      return;
    }

    if (!formData.full_name.trim() || !formData.email.trim()) {
      setFormState("error");
      setSubmissionResult({
        success: false,
        message: "Please provide your full name and a valid corporate email address.",
      });
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setFormState("error");
      setSubmissionResult({
        success: false,
        message: "Please enter a valid email address.",
      });
      return;
    }

    setFormState("submitting");
    setSubmissionResult(null);

    const result = await submitWaitlistEntry(formData);

    if (result.success) {
      setFormState("success");
      setSubmissionResult(result);
    } else {
      setFormState("error");
      setSubmissionResult(result);
    }
  };

  const handleReset = () => {
    setFormData({
      full_name: "",
      email: "",
      role: "Recruiter",
      architecture_focus: "Both",
      message: "",
    });
    setFormState("idle");
    setSubmissionResult(null);
  };

  return (
    <section
      id="contact"
      className="flex flex-col gap-8 scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--color-card-border)] pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-300">
              Sprint 1 • Day 6 Deliverable
            </span>
          </div>
          <h2
            id="contact-heading"
            className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-white tracking-tight"
          >
            Connect & Recruiter Waitlist
          </h2>
          <p className="text-sm text-[var(--color-foreground-muted)] mt-1 max-w-2xl">
            Register your interest in upcoming sprint releases, schedule a technical interview, or connect directly regarding engineering opportunities.
          </p>
        </div>

        {/* Database Status Pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 self-start md:self-end font-mono text-xs">
          <span
            className={`h-2 w-2 rounded-full ${
              isSupabaseConfigured ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
            }`}
          />
          <span className="text-slate-300">
            {isSupabaseConfigured
              ? "Database: Supabase Live (Cloud PostgreSQL)"
              : "Database: Awaiting .env.local Configuration"}
          </span>
        </div>
      </div>

      {/* Main Two-Column Layout (CSS Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Architectural Value & Recruiter Briefing (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between glass-panel rounded-2xl p-6 sm:p-8 3xl:p-10 border-emerald-500/30 relative overflow-hidden">
          {/* Subtle Ambient Orb */}
          <div className="absolute top-0 right-0 h-48 w-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-6 relative z-10">
            <div>
              <span className="font-mono text-xs text-emerald-300 uppercase tracking-wider">
                Cloud Persistence Layer
              </span>
              <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold text-white mt-1">
                Real Supabase PostgreSQL
              </h3>
              <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed mt-2">
                This form connects directly to your live Supabase cloud project, storing submissions in the{" "}
                <code className="text-emerald-300 font-mono text-xs">public.contacts_waitlist</code> table with strict Row Level Security (RLS) enforcement.
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                <span className="h-5 w-5 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <span className="text-white font-medium block">Row Level Security (RLS)</span>
                  <span className="text-[var(--color-foreground-muted)]">
                    Public anonymous inserts allowed via API anon key; query reading is strictly locked to authenticated admins.
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                <span className="h-5 w-5 rounded bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <span className="text-white font-medium block">Polyglot Architecture Blueprint</span>
                  <span className="text-[var(--color-foreground-muted)]">
                    Lays the Supabase relational foundation for Phase 2 Mexican SAT Payroll (Sprint 6).
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                <span className="h-5 w-5 rounded bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <span className="text-white font-medium block">Real-time Telemetry Verification</span>
                  <span className="text-[var(--color-foreground-muted)]">
                    Returns generated PostgreSQL UUID and server timestamp upon successful commit.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Direct Contacts */}
          <div className="mt-8 pt-5 border-t border-white/10 flex flex-col gap-2 text-xs font-mono text-[var(--color-foreground-muted)]">
            <div className="flex items-center justify-between">
              <span>Candidate:</span>
              <span className="text-white font-medium">Hector Olivares Tapia</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Location:</span>
              <span className="text-slate-300">Mexico (Remote / Global)</span>
            </div>
            <div className="flex items-center justify-between">
              <span>GitHub:</span>
              <a
                href="https://github.com/hectapia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-white transition-colors"
              >
                github.com/hectapia
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form Card (7 Cols) */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 3xl:p-10 border-white/10 relative">
          {formState === "success" && submissionResult?.success ? (
            /* ======================================================== */
            /* SUCCESS STATE VIEW (REAL SUPABASE INSERTION CONFIRMATION) */
            /* ======================================================== */
            <div
              className="flex flex-col items-center justify-center py-10 px-4 text-center gap-5 min-h-[440px]"
              role="alert"
            >
              <div className="h-16 w-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-3xl shadow-lg shadow-emerald-500/20 animate-bounce">
                ✓
              </div>

              <div className="space-y-2">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
                  Successfully Stored in Supabase!
                </h3>
                <p className="text-sm text-[var(--color-foreground-muted)] max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.full_name}</strong>. Your entry has been committed to the live PostgreSQL cloud database.
                </p>
              </div>

              {/* Real Database Telemetry Card */}
              <div className="w-full max-w-md p-3.5 rounded-xl bg-slate-950/80 border border-emerald-500/30 text-left font-mono text-xs space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-emerald-400 border-b border-white/10 pb-1.5 mb-1.5">
                  <span className="uppercase tracking-wider font-semibold">PostgreSQL Commit Telemetry</span>
                  <span className="text-slate-400">table: contacts_waitlist</span>
                </div>
                {submissionResult.recordId && (
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-500">Record UUID:</span>
                    <span className="font-mono text-emerald-300 truncate max-w-[240px]">
                      {submissionResult.recordId}
                    </span>
                  </div>
                )}
                {submissionResult.timestamp && (
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-500">Committed At:</span>
                    <span>{new Date(submissionResult.timestamp).toLocaleString()}</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-500">Persona Role:</span>
                  <span className="text-cyan-300">{formData.role}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-500">Architecture:</span>
                  <span className="text-indigo-300">{formData.architecture_focus}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white px-5 py-2.5 text-xs font-mono font-medium transition-all"
                >
                  Submit Another Note
                </button>
                <a
                  href="#architectures"
                  className="rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 text-xs font-semibold shadow-lg shadow-emerald-500/20 transition-all"
                >
                  Continue Exploring Architectures
                </a>
              </div>
            </div>
          ) : (
            /* ======================================================== */
            /* FORM INPUT VIEW (Idle / Submitting / Error)              */
            /* ======================================================== */
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Not Configured Banner Alert */}
              {!isSupabaseConfigured && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono flex items-start gap-2.5">
                  <svg className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <span className="font-semibold block text-white">Live Supabase Connection Pending Configuration</span>
                    <span>
                      Add your project URL and anon public key to{" "}
                      <code className="text-amber-200 bg-amber-500/20 px-1 py-0.5 rounded">
                        apps/portfolio-landing/.env.local
                      </code>{" "}
                      to enable live PostgreSQL inserts.
                    </span>
                  </div>
                </div>
              )}

              {/* Error Notice Banner */}
              {formState === "error" && submissionResult?.message && (
                <div
                  className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-start gap-2.5"
                  role="alert"
                >
                  <svg className="h-4 w-4 shrink-0 text-rose-400 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2" />
                    <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2" />
                  </svg>
                  <span className="leading-relaxed">{submissionResult.message}</span>
                </div>
              )}

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="full_name" className="text-xs font-mono text-slate-300 font-medium">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    required
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    disabled={formState === "submitting"}
                    placeholder="e.g. Jane Doe"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-sans"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-slate-300 font-medium">
                    Corporate / Work Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={formState === "submitting"}
                    placeholder="jane@company.com"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-sans"
                  />
                </div>
              </div>

              {/* Persona Role Selection */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-slate-300 font-medium">
                  Your Role / Persona
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(["Recruiter", "Hiring Manager", "Engineer", "Other"] as const).map((roleOption) => (
                    <button
                      key={roleOption}
                      type="button"
                      onClick={() => setFormData({ ...formData, role: roleOption })}
                      disabled={formState === "submitting"}
                      className={`px-3 py-2 rounded-xl text-xs font-mono transition-all text-center border ${
                        formData.role === roleOption
                          ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-semibold shadow-sm"
                          : "bg-white/5 text-slate-400 border-white/5 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {roleOption}
                    </button>
                  ))}
                </div>
              </div>

              {/* Architecture Focus Selection */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-slate-300 font-medium">
                  Primary Architecture Focus
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(
                    [
                      { id: "Both", label: "Both Paradigms" },
                      { id: "Monolith", label: "Monolith (Django)" },
                      { id: "Microservices", label: "Microservices (GraphQL)" },
                    ] as const
                  ).map((arch) => (
                    <button
                      key={arch.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, architecture_focus: arch.id })}
                      disabled={formState === "submitting"}
                      className={`px-3 py-2 rounded-xl text-xs font-mono transition-all text-center border ${
                        formData.architecture_focus === arch.id
                          ? arch.id === "Monolith"
                            ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/40 font-semibold"
                            : arch.id === "Microservices"
                            ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-semibold"
                            : "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-semibold"
                          : "bg-white/5 text-slate-400 border-white/5 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {arch.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message / Project Notes */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-mono text-slate-300 font-medium flex items-center justify-between">
                  <span>Inquiry or Role Description</span>
                  <span className="text-[var(--color-foreground-subtle)] font-normal">Optional</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={formState === "submitting"}
                  placeholder="Share details regarding your tech stack, timeline, or open engineering opportunity..."
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-sans resize-none"
                />
              </div>

              {/* Submit Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-[var(--color-foreground-subtle)] order-2 sm:order-1 text-center sm:text-left">
                  Secured with Supabase RLS • Direct Cloud PostgreSQL Insert
                </span>

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-3 text-sm font-semibold shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none order-1 sm:order-2"
                >
                  {formState === "submitting" ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-slate-950" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      <span>Persisting to Supabase...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit to Waitlist</span>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
