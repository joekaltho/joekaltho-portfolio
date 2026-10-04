# Joe Kaltho — Personal Portfolio & The Founder Journey

A production personal portfolio website for **Joe Kaltho**, an 18-year-old Nigerian Computer Science student, software developer, freelancer, and founder of **KaltrixOS**.

Built with **TypeScript**, **React**, **Tailwind CSS**, and **Supabase-ready architecture** for frictionless deployment to **Vercel** and **GitHub**.

---

## Two Distinct Experiences in One Website

1. **Professional Portfolio (“Work With Me”)**
   - Direct about statement: 18-year-old Nigerian CS undergraduate building real systems
   - Capabilities-based skills taxonomy (Software Development, AI & Automation, Product)
   - Deep-dive case study of **KaltrixOS** (Africa's Business Operating System)
   - Real freelance capabilities (Business platforms, redesigns, custom web apps, automation)
   - Interactive, ATS-friendly printable Curriculum Vitae (CV)

2. **Founder Portfolio (“The Journey”)**
   - **The Billion Dollar Build**: Honest, self-aware, and ambitious zero-to-one record
   - Real-time Building in Public logs & founder notes
   - Journey Timeline from first fundamentals to KaltrixOS and ecosystem roadmap
   - The Kaltrix Ecosystem architecture (**KaltrixOS** [Live Core MVP], **KaltrixPay** [In Development], **Velocity AI** [Planned / Future Layer])
   - Public social channels (GitHub, LinkedIn, X, Instagram, TikTok, Email)

---

## Deploying to Vercel (1-Click or Git Push)

This repository is standard and portable:
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: Joe Kaltho portfolio and founder journey"
   git remote add origin https://github.com/joekaltho/portfolio.git
   git push -u origin main
   ```
2. In [Vercel](https://vercel.com), click **Add New Project** -> **Import Git Repository**.
3. Select Framework Preset: **Vite** (or Next.js if you copy into Next.js App Router).
4. Add your optional Supabase environment variables:
   - `VITE_SUPABASE_URL` (or `NEXT_PUBLIC_SUPABASE_URL`)
   - `VITE_SUPABASE_ANON_KEY` (or `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
5. Click **Deploy**.

---

## Connecting Supabase

1. Create a project at [supabase.com](https://supabase.com).
2. Go to **SQL Editor** -> Click **New Query**.
3. Copy and run the contents of `supabase/schema.sql`.
4. Copy your **Project URL** and **anon public key** from `Settings` -> `API`.
5. Add them to your environment variables (`.env` or Vercel Environment Variables).

If environment variables are omitted, the contact form automatically falls back to local queueing and mailto dispatch, ensuring the site never breaks.
