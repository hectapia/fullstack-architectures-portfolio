import { createClient, SupabaseClient } from "@supabase/supabase-js";

export interface WaitlistSubmission {
  full_name: string;
  email: string;
  role: "Recruiter" | "Hiring Manager" | "Engineer" | "Other";
  architecture_focus: "Monolith" | "Microservices" | "Both";
  message?: string;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl !== "https://your-project-id.supabase.co" &&
    !supabaseUrl.includes("placeholder")
);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string)
  : null;

/**
 * Submit waitlist or contact entry to Supabase
 * Handles graceful simulated mode when running locally without active credentials.
 */
export async function submitWaitlistEntry(entry: WaitlistSubmission): Promise<{
  success: boolean;
  message: string;
  isSimulated?: boolean;
}> {
  if (!isSupabaseConfigured || !supabase) {
    // Simulated network delay for development/demo mode
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
      success: true,
      message: "Submission received in local simulation mode (Supabase credentials pending).",
      isSimulated: true,
    };
  }

  try {
    const { error } = await supabase.from("contacts_waitlist").insert([
      {
        full_name: entry.full_name.trim(),
        email: entry.email.trim().toLowerCase(),
        role: entry.role,
        architecture_focus: entry.architecture_focus,
        message: entry.message?.trim() || null,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return {
        success: false,
        message: error.message || "Failed to persist submission to Supabase.",
      };
    }

    return {
      success: true,
      message: "Submission successfully persisted to Supabase database.",
      isSimulated: false,
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unexpected connection error.";
    console.error("Supabase submission exception:", err);
    return {
      success: false,
      message: errorMessage,
    };
  }
}
