// CV content. Built from the public GitHub profile (35 repos) plus what the site already says.
export const cv = {
  tagline: "Open to freelance work and full-time roles",
  summary:
    "Full-stack developer and founder in Nigeria. I design, build, launch and run KaltrixOS, a business platform for Nigerian small businesses, covering product, database, payments and security. 35 public repositories across e-commerce, real estate, AI tools and client websites.",
  experience: [
    {
      title: "Founder and developer, KaltrixOS",
      when: "2026 to present",
      points: [
        "Designed, built, launched and operate a business platform for Nigerian small businesses (discovery, inventory, invoicing, CRM, bookings, analytics) on Next.js, TypeScript and Supabase. The code is public, with 54 commits.",
        "Ran two security audits of my own code and fixed a client-side payment verification bypass, role escalation and unprotected tables at the database layer with row-level security.",
        "Replaced an admin-entered trust score with an evidence-based, explainable engine, and added review-integrity checks that flag for human review instead of auto-removing.",
        "Profiled edge logs and cut redundant auth calls (13 components each fetching the user) and sequential dashboard queries.",
        "Integrated Paystack with server-side verification and enforced subscription expiry in the webhook.",
        "Documenting the build in public since June 30, 2026.",
      ],
    },
    {
      title: "Freelance web developer",
      when: "Since early 2026",
      points: [
        "Built websites and storefronts for small businesses, including an eyewear e-commerce store, restaurant, school and real estate sites.",
        "Scope, design and delivery end to end, handed over with the repo, database migrations and a deployed URL.",
      ],
    },
  ],
  projects: [
    {
      name: "KaltrixOS",
      stack: "Next.js, TypeScript, Supabase, Tailwind CSS, Paystack",
      href: "github.com/joekaltho/kaltrix-os",
      points: [
        "Business discovery, authentication, lead management and trust scoring in one product. Live since August 27, 2026.",
      ],
    },
    {
      name: "KaltrixPay",
      stack: "PHP",
      href: "github.com/joekaltho/kaltrixPay",
      points: [
        "Payments layer for the Kaltrix ecosystem: accept payments, manage transactions and build financial workflows through APIs. In development.",
      ],
    },
    {
      name: "Shades Array",
      stack: "Next.js, TypeScript, Supabase",
      href: "github.com/joekaltho/shades-array-Ecom-store",
      points: [
        "E-commerce store for an eyewear brand with a product catalog, admin dashboard, 3D visuals and WhatsApp ordering. Mobile first.",
      ],
    },
    {
      name: "NOVA Estates",
      stack: "TypeScript",
      href: "github.com/joekaltho/NOVA-Estates-Demo",
      points: ["Website for a Nigerian real estate brand with an editorial, luxury design."],
    },
    {
      name: "Repurpose",
      stack: "TypeScript",
      href: "github.com/joekaltho/Repurpose",
      points: [
        "Turns raw notes, a draft, a transcript or an article URL into platform-native posts.",
      ],
    },
  ],
  alsoBuilt:
    "StudySnap (Kotlin), OrbitAI (AI planning app), FORMA (architecture studio site), Lagos Bistro (restaurant site), DevHub (developer community platform), Corravale Digitals website, DOSTA school site.",
  education: "Computer Science undergraduate, Nigeria",
  skills: [
    { label: "Languages", items: "TypeScript, JavaScript, PHP, Kotlin, HTML and CSS" },
    { label: "Frontend", items: "React, Next.js, Tailwind CSS" },
    { label: "Backend and data", items: "Supabase, PostgreSQL, row-level security, REST APIs" },
    { label: "Payments and tools", items: "Paystack, Resend, Vercel, Git and GitHub" },
    { label: "Practices", items: "Security review, performance profiling, product scoping" },
  ],
};