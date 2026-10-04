-- Supabase Database Schema for Joe Kaltho's Portfolio & Journey
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)

-- 1. Contact Submissions Table
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    type TEXT NOT NULL DEFAULT 'general',
    message TEXT NOT NULL,
    status TEXT DEFAULT 'unread'
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Allow anonymous visitors to submit contact messages
CREATE POLICY "Allow anonymous insert on contacts"
ON public.contacts
FOR INSERT
TO anon
WITH CHECK (true);

-- 2. Optional: Journey Posts Table (if moving dynamic posts from static to Supabase)
CREATE TABLE IF NOT EXISTS public.journey_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    summary TEXT NOT NULL,
    content JSONB NOT NULL,
    tags TEXT[] DEFAULT '{}',
    read_time TEXT DEFAULT '3 min read',
    published BOOLEAN DEFAULT true
);

ALTER TABLE public.journey_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on journey_posts"
ON public.journey_posts
FOR SELECT
TO anon
USING (published = true);

-- 3. Optional: Projects Table (for remote project management)
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    tagline TEXT NOT NULL,
    description TEXT NOT NULL,
    problem TEXT NOT NULL,
    solution TEXT NOT NULL,
    role TEXT NOT NULL,
    tech_stack TEXT[] DEFAULT '{}',
    technical_details TEXT[] DEFAULT '{}',
    live_url TEXT,
    github_url TEXT,
    status TEXT DEFAULT 'mvp',
    featured BOOLEAN DEFAULT false,
    is_founder BOOLEAN DEFAULT false
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on projects"
ON public.projects
FOR SELECT
TO anon
USING (true);
