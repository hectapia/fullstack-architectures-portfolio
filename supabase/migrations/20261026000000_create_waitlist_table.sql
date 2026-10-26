-- ==============================================================================
-- Supabase Schema Migration: Contacts & Waitlist
-- Sprint 1, Day 6 Deliverable
-- ==============================================================================

-- 1. Create the contacts_waitlist table
CREATE TABLE IF NOT EXISTS public.contacts_waitlist (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'Other',
    architecture_focus TEXT NOT NULL DEFAULT 'Both',
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Add table comments for documentation
COMMENT ON TABLE public.contacts_waitlist IS 'Submissions from recruiters, hiring managers, and engineers on the Dual Architecture Portfolio.';
COMMENT ON COLUMN public.contacts_waitlist.architecture_focus IS 'Selected paradigm of interest: Monolith, Microservices, or Both.';

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.contacts_waitlist ENABLE ROW LEVEL SECURITY;

-- 4. Policy: Allow unauthenticated (anon) visitors to insert submissions
DROP POLICY IF EXISTS "Allow public insert to contacts_waitlist" ON public.contacts_waitlist;
CREATE POLICY "Allow public insert to contacts_waitlist"
    ON public.contacts_waitlist
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- 5. Policy: Restrict reading submissions strictly to authenticated admins/dashboard users
DROP POLICY IF EXISTS "Allow authenticated users to view contacts_waitlist" ON public.contacts_waitlist;
CREATE POLICY "Allow authenticated users to view contacts_waitlist"
    ON public.contacts_waitlist
    FOR SELECT
    TO authenticated
    USING (true);
