// Kaltrix Digitals (the studio page at #/studio). Edit copy and links here, not in the components.
import { engineeringLog, links, person } from "./data";

const env = import.meta.env as Record<string, string | undefined>;

export const studio = {
  name: "Kaltrix Digitals",
  founder: person.name,
  statement: "We build digital products designed to work in the real world.",
  email: person.email,
  // Digits only, with country code, e.g. 2348012345678. Empty hides every WhatsApp button.
  whatsapp: (env.VITE_WHATSAPP_NUMBER ?? "").replace(/\D/g, ""),
  // A Calendly/Cal.com style link. Empty sends "Book a discovery call" to the inquiry form instead.
  booking: (env.VITE_BOOKING_URL ?? "").trim(),
};

export function whatsappHref(text = "Hi Kaltrix Digitals, I'd like to talk about a project.") {
  return studio.whatsapp ? `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(text)}` : "";
}

export const studioNav = [
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
  { id: "faq", label: "FAQ" },
] as const;

export const hero = {
  eyebrow: "Product engineering studio",
  headline: "Digital products built to do more than look good.",
  lead: "Kaltrix Digitals builds high-performance websites and web applications for businesses ready to operate, grow and compete online.",
};

// What every product we ship stands on. Each line is true of KaltrixOS in production.
export const layers = [
  { id: "01", name: "Interface", detail: "Next.js, TypeScript and Tailwind CSS. Fast on a phone first." },
  { id: "02", name: "Authentication", detail: "Accounts and roles, with sessions checked on the server." },
  { id: "03", name: "Database", detail: "Postgres on Supabase, locked down with row-level security." },
  { id: "04", name: "Payments", detail: "Paystack, verified server-side through webhooks." },
  { id: "05", name: "Deployment", detail: "Shipped on Vercel, from preview to production." },
];

export const stackLine = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Paystack", "Vercel"];

export type Topic = "Business website" | "Custom web application" | "MVP development" | "Discovery call" | "Something else";

export const topics: Topic[] = [
  "Business website",
  "Custom web application",
  "MVP development",
  "Discovery call",
  "Something else",
];

export const offers: {
  id: string;
  title: string;
  price: string;
  body: string;
  fit: string;
  cta: string;
  topic: Topic;
}[] = [
  {
    id: "01",
    title: "Business Websites",
    price: "From \u20A675,000",
    body: "A fast, mobile-first website that explains what your business does and makes it easy for customers to reach you.",
    fit: "For businesses that need a credible home online.",
    cta: "Start a website",
    topic: "Business website",
  },
  {
    id: "02",
    title: "Custom Web Applications",
    price: "Custom quotation",
    body: "Dashboards, portals and internal tools with accounts, data and the business logic your operation runs on.",
    fit: "Quoted on your requirements after a discovery call.",
    cta: "Request a quote",
    topic: "Custom web application",
  },
  {
    id: "03",
    title: "MVP Development",
    price: "Scoped with you",
    body: "For founders who need to turn an idea into a working product: the smallest version worth launching, built to take real users.",
    fit: "For founders validating an idea with a real product.",
    cta: "Discuss your MVP",
    topic: "MVP development",
  },
];

export type Shot = { src: string; alt: string; caption: string };

export const work = {
  kaltrixos: {
    index: "Project 01",
    label: "Flagship \u00B7 Our own product",
    name: "KaltrixOS",
    tagline: "Africa\u2019s Business Operating System.",
    body: "A business platform for Nigerian businesses, designed, built, launched and operated by Kaltrix Digitals\u2019 founder. It runs the parts most portfolios skip: authentication, payments, a locked-down database and production deployment.",
    features: [
      "Business profiles and TrustScore",
      "Inventory management and stock history",
      "Invoicing and shareable invoice pages",
      "Customer management",
      "Business Pulse dashboard",
      "Paystack subscriptions",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Paystack", "Vercel"],
    live: links.product,
    notes: engineeringLog.slice(0, 3),
    shots: [
      {
        src: "/work/kaltrixos-home",
        alt: "The KaltrixOS homepage at kaltrixos.com",
        caption: "kaltrixos.com",
      },
      {
        src: "/work/kaltrixos-discover",
        alt: "The KaltrixOS Discover directory of listed businesses",
        caption: "kaltrixos.com/discover",
      },
    ] as Shot[],
  },
  shades: {
    index: "Project 02",
    label: "Ecommerce \u00B7 Storefront and admin",
    name: "Shades Array",
    tagline: "A sunglasses store with its own back office.",
    body: "Shoppers browse the collection, fill a bag and finish the order on WhatsApp. Behind it, an admin dashboard runs the catalogue, orders and store details.",
    features: [
      "Storefront with collections, product pages and a bag",
      "WhatsApp checkout that records each order with a reference",
      "Products: draft or live, featured, photos resized before upload",
      "Orders: New, Confirmed, Paid, Delivered, with stock kept in step",
      "Categories, store settings and CSV export",
      "Admin access limited to listed admins at the database layer",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Supabase", "Vercel"],
    source: "https://github.com/joekaltho/shades-array-Ecom-store",
    shots: [
      { src: "/work/shades-store", alt: "The Shades Array storefront homepage", caption: "Storefront" },
      { src: "/work/shades-admin-overview", alt: "The Shades Array admin overview", caption: "Admin \u00B7 Overview" },
      { src: "/work/shades-admin-products", alt: "The Shades Array admin product list", caption: "Admin \u00B7 Products" },
    ] as Shot[],
    shotsNote: "Screenshots show the build running on its bundled sample data.",
  },
};

export const steps = [
  { n: "01", title: "Discover", body: "Understand the problem and requirements." },
  { n: "02", title: "Define", body: "Scope, proposal and timeline." },
  { n: "03", title: "Build", body: "Design, engineering and regular updates." },
  { n: "04", title: "Launch", body: "Testing, deployment and handover." },
];

export const founder = {
  heading: "About the founder",
  body: [
    `${person.name} is the founder and developer behind Kaltrix Digitals.`,
    "He builds and operates KaltrixOS, handling the product, the code, the database, the payments and the security himself, and brings the same production-minded engineering to every studio project.",
  ],
};

export const faqs = [
  {
    q: "What kinds of projects do you accept?",
    a: "Business websites, custom web applications and MVPs for businesses and startups. If you are not sure which one fits, describe the problem and we will tell you honestly whether we are the right team for it.",
  },
  {
    q: "How much does a website cost?",
    a: "Business websites start from \u20A675,000. Custom web applications and MVPs are quoted on your requirements after a discovery call, so you see the scope and the price before anything starts.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on the scope. You get a timeline in the proposal during the Define step, before any build work begins.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work remotely, with regular written updates and a deployed link you can check as the build progresses. Payment terms are agreed in the proposal.",
  },
  {
    q: "Who owns the code?",
    a: "Handover includes the repository, the database migrations and the deployed product. Ownership terms are written into the proposal so there are no surprises.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Support after launch can be arranged as a separate agreement. Raise it during discovery and it can be scoped alongside the build.",
  },
];

export const finalCta = {
  headline: "Have something worth building?",
  body: "Let\u2019s turn your idea or business requirements into a working digital product.",
  cta: "Book a discovery call",
};

export const socials = [
  { label: "GitHub", href: links.github },
  { label: "X", href: links.x },
  { label: "Instagram", href: links.instagram },
  { label: "LinkedIn", href: links.linkedin },
].filter((s) => s.href);
