import { createClient, SupabaseClient } from "@supabase/supabase-js";

export interface WaitlistSubmission {
  full_name: string;
  email: string;
  role: "Recruiter" | "Hiring Manager" | "Engineer" | "Other";
  architecture_focus: "Monolith" | "Microservices" | "Both";
  message?: string;
}

export interface SubmissionResult {
  success: boolean;
  message: string;
  recordId?: string;
  timestamp?: string;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured: boolean = Boolean(
  supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl.startsWith("https://") &&
    supabaseUrl !== "https://your-project-id.supabase.co" &&
    !supabaseUrl.includes("placeholder")
);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  : null;

/**
 * Persists a new waitlist submission directly into the real Supabase PostgreSQL table.
 * Enforces validation and Row Level Security (RLS) policies.
 */
export async function submitWaitlistEntry(
  entry: WaitlistSubmission
): Promise<SubmissionResult> {
  if (!isSupabaseConfigured || !supabase) {
    return {
      success: false,
      message:
        "Supabase credentials not detected. Please configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in apps/portfolio-landing/.env.local",
    };
  }

  try {
    const recordId =
      typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : undefined;

    const payload: {
      id?: string;
      full_name: string;
      email: string;
      role: string;
      architecture_focus: string;
      message: string | null;
    } = {
      ...(recordId ? { id: recordId } : {}),
      full_name: entry.full_name.trim(),
      email: entry.email.trim().toLowerCase(),
      role: entry.role,
      architecture_focus: entry.architecture_focus,
      message: entry.message?.trim() || null,
    };

    const { error } = await supabase
      .from("contacts_waitlist")
      .insert([payload]);

    if (error) {
      console.error("Supabase PostgreSQL insert error:", error);

      if (error.code === "42P01") {
        return {
          success: false,
          message:
            "The 'contacts_waitlist' table does not exist in your Supabase project. Please run the SQL migration in 'supabase/migrations/20261026000000_create_waitlist_table.sql' via your Supabase SQL Editor.",
        };
      }

      if (error.code === "42501") {
        return {
          success: false,
          message:
            "Row Level Security (RLS) policy rejected insert. In your Supabase SQL Editor, run: CREATE POLICY \"Allow public insert\" ON public.contacts_waitlist FOR INSERT TO anon, authenticated WITH CHECK (true);",
        };
      }

      return {
        success: false,
        message: error.message || "Failed to persist submission to Supabase database.",
      };
    }

    return {
      success: true,
      message: "Submission successfully persisted to Supabase Cloud PostgreSQL database.",
      recordId,
      timestamp: new Date().toISOString(),
    };
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Unexpected database connection error.";
    console.error("Supabase client exception:", err);
    return {
      success: false,
      message: errorMessage,
    };
  }
}
