// Every word and link on the site lives here. Edit this file, not the components.

export const person = {
  name: "Joe Kaltho",
  age: 18,
  place: "Nigeria",
  role: "Software developer and founder",
  email: (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) ?? "",
};

// Empty strings are hidden automatically.
export const links = {
  product: "https://kaltrixos.com",
  github: "https://github.com/joekaltho",
  x: "https://x.com/joe_kaltho",
  instagram: "https://instagram.com/joe_kaltho",
  linkedin: "",
  tiktok: "",
};

export const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Supabase (Postgres)",
  "Paystack",
  "Vercel",
];

// What the product does, grouped the way the product itself groups it.
export const fourJobs = [
  {
    title: "Get found",
    body: "A public page for every business, a Discover directory, and a shop of listings that customers can browse.",
  },
  {
    title: "Get trusted",
    body: "TrustScore built from evidence: admin verification, real reviews, bookings and invoices. Self-reported details count for little on purpose.",
  },
  {
    title: "Run your business",
    body: "Customers, bookings, invoices and listings in one dashboard, with invoices that carry your payment details.",
  },
  {
    title: "Understand your business",
    body: "Business Pulse: revenue, expenses, profit and a Business Health Score for the period you pick, from your own records.",
  },
];

export const engineeringLog = [
  {
    when: "Sep 2026",
    title: "Cut the dashboard's round trips",
    body: "Edge logs showed the auth endpoint being hit about 120 times a day because 13 components each fetched the user on their own. One cached-session helper replaced all of them, and the dashboard load went from 8 sequential awaits to 3 parallel waves.",
  },
  {
    when: "Sep 2026",
    title: "Replaced a made-up trust score with evidence",
    body: "TrustScore started life as a number an admin typed in. It is now a rule-based engine that weighs verification, real activity and capped self-reported data, and shows users the breakdown.",
  },
  {
    when: "Sep 2026",
    title: "Review integrity without auto-labelling anyone fake",
    body: "Reviews stay anonymous. The system adds a report flow, hashed-IP signals and burst and duplicate detection, then flags for a human. Nothing is removed automatically.",
  },
  {
    when: "Sep 2026",
    title: "Business Pulse, in one query",
    body: "A single RPC computes revenue, expenses, profit and the health score under RLS. I checked it against hand-computed numbers before shipping.",
  },
  {
    when: "Aug 2026",
    title: "Closed the holes before real users arrived",
    body: "Two audits of my own product found a client-side payment verification bypass, a role self-escalation path, forgeable verification flags and world-writable tables. Each fix lives in the database layer with RLS and triggers, not in the UI.",
  },
];

export const capabilities = [
  {
    title: "Software development",
    body: "Next.js, React and TypeScript on the front. Postgres on the back, with row-level security, migrations that match production, and server-side checks for anything involving money.",
  },
  {
    title: "AI and automation",
    body: "Workflows that remove repeat admin for small businesses. AI where it earns its place, and plain rules where users need to understand the result.",
  },
  {
    title: "Product",
    body: "Scoping, pricing and honest copy. I stripped claims out of my own product that were not true yet.",
  },
];

export const services = [
  {
    title: "Business platforms",
    body: "Inventory, invoicing, CRM, bookings and staff tools for a company that has outgrown spreadsheets.",
  },
  {
    title: "Redesigns",
    body: "An existing web app that works but feels slow, confusing or untrustworthy.",
  },
  {
    title: "Custom web apps",
    body: "Next.js and Supabase, deployed on Vercel, with the repo and migrations handed over.",
  },
  {
    title: "Automation",
    body: "The repeat tasks your team does by hand, turned into something that runs on its own.",
  },
];

export const process =
  "Fixed scope first, then slices you can click through every week. You get the repo, the database migrations and a deployed URL.";

// Honest numbers. Update the values and the asOf stamp together.
export const scoreboard = {
  asOf: "Sep 2026",
  rows: [
    { label: "Product", value: "KaltrixOS, live since Aug 27, 2026" },
    { label: "Businesses on it", value: "2" },
    { label: "Revenue", value: "₦0. No paying customers yet." },
    { label: "Team", value: "Solo founder" },
  ],
};

export const journey = [
  {
    when: "Jun 30, 2026",
    body: "Day 1 of documenting the build in public. KaltrixOS was already underway.",
  },
  {
    when: "Jul 2026",
    body: "Audited my own code and fixed what the audit found, including a payment verification bypass.",
  },
  {
    when: "Aug 2026",
    body: "A repair damaged my laptop's hard drive and I lost everything on it. I rebuilt my whole setup.",
  },
  {
    when: "Aug 27, 2026",
    body: "KaltrixOS launched publicly.",
  },
  {
    when: "Sep 2026",
    body: "Post-launch hardening: evidence-based TrustScore, a performance fix, review integrity and Business Pulse.",
  },
  {
    when: "Oct 2026",
    body: "New brand identity and a full UI redesign, light theme first.",
  },
  {
    when: "Next",
    body: "KaltrixPay for payments, then Velocity AI for business intelligence.",
  },
  {
    when: "Jun 2029",
    body: "The deadline for the $1 billion target.",
  },
];

export const ecosystem = [
  {
    name: "KaltrixOS",
    status: "Live",
    body: "The business operating system for Nigerian SMBs.",
  },
  {
    name: "KaltrixPay",
    status: "In development",
    body: "The payments layer, so getting paid happens inside the same system.",
  },
  {
    name: "Velocity AI",
    status: "Planned",
    body: "Business intelligence and automation on top of the data the first two collect.",
  },
];

export const thesis =
  "Most small businesses here have limited digital infrastructure. That gap is the size of the opportunity, and I'm building the infrastructure to fill it.";

export const cv = {
  summary:
    "Computer science student and full-stack developer in Nigeria. Founder of KaltrixOS, a business operating system for Nigerian SMBs that I designed, built, launched and operate alone.",
  experience: [
    {
      title: "Founder and developer, KaltrixOS",
      when: "2026 to present",
      points: [
        "Built and launched a multi-tenant business platform (inventory, invoicing, CRM, bookings, listings, analytics) on Next.js, TypeScript, Tailwind and Supabase.",
        "Ran two security audits of my own code and fixed a payment verification bypass, role escalation and unprotected tables at the database layer with row-level security.",
        "Rebuilt trust scoring from admin-entered numbers into an evidence-based, explainable engine.",
        "Cut redundant auth requests and sequential dashboard queries after profiling edge logs.",
        "Integrated Paystack with server-side verification and enforced subscription expiry in the webhook.",
      ],
    },
    {
      title: "Freelance web developer",
      when: "2026 to present",
      points: [
        "Next.js and Supabase builds, redesigns and automation for small businesses.",
      ],
    },
  ],
  education: "Computer Science undergraduate, Nigeria",
  skills: [
    "TypeScript, JavaScript, React, Next.js",
    "Tailwind CSS",
    "PostgreSQL, Supabase, row-level security",
    "Paystack, Resend, Vercel",
    "Security review, performance profiling",
  ],
};
