import type { ReactElement } from "react";
import {
  capabilities,
  engineeringLog,
  fourJobs,
  links,
  person,
  process,
  scoreboard,
  services,
  stack,
} from "../data";
import { Contact } from "./Contact";
import { goalStatus } from "../lib/goal";import { About } from "./About";import { Portrait, ProductShot } from "./Mock";

const svg = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "square" as const,
  className: "h-6 w-6",
  "aria-hidden": true,
};

const icons: ReactElement[] = [
  <svg key="found" {...svg}>
    <circle cx="11" cy="11" r="6" />
    <path d="M16 16l5 5" />
  </svg>,
  <svg key="trust" {...svg}>
    <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  <svg key="run" {...svg}>
    <rect x="4" y="4" width="7" height="7" />
    <rect x="13" y="4" width="7" height="7" />
    <rect x="4" y="13" width="7" height="7" />
    <rect x="13" y="13" width="7" height="7" />
  </svg>,
  <svg key="understand" {...svg}>
    <path d="M5 20V12M12 20V5M19 20V9" />
  </svg>,
];

export function Engineer() {  const g = goalStatus();
  const live = scoreboard.rows.find((r) => r.label === "Businesses on it")?.value ?? "";
  const facts = [
    ["Live since", "Aug 27, 2026"],
    ["Businesses on it", live],
    ["Build in public", `Day ${g.day}`],
    ["Stack", "Next.js, Supabase, Paystack"],
  ];

  return (
    <main>
      <section className="hero-bg">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <Portrait />
              <p className="font-semibold leading-tight">
                {person.name}
                <span className="block font-normal text-muted">
                  {person.age}, {person.place}
                </span>
              </p>
            </div>
            <p className="mb-5 inline-flex items-center gap-2 border-2 border-ink px-3 py-1 text-sm font-semibold"><span className="h-2.5 w-2.5 bg-ink" />Open to freelance work and full-time roles</p><h1 className="display text-[clamp(2.75rem,9vw,5rem)] lg:text-[clamp(2.5rem,4.8vw,4.75rem)]">
              Business software that holds up when real money shows up.
            </h1>
            <p className="prose-line mt-6 text-xl">
              I'm a computer science student building full-stack products for businesses. I designed,
              built, launched and now operate KaltrixOS on my own.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn" href="#/engineer/contact">
                Hire me
              </a>
              <a className="btn btn-quiet" href={links.product} target="_blank" rel="noreferrer">
                Open KaltrixOS
              </a>
              <a className="btn btn-quiet" href="#/cv">
                View CV
              </a>
            </div>
          </div>
          <div className="shadow-block mr-2.5 mb-2.5">
            <ProductShot />
          </div>
        </div>
        <dl className="mx-auto grid max-w-6xl grid-cols-2 border-t-2 border-ink px-5 sm:px-8 md:grid-cols-4">
          {facts.map(([k, v]) => (
            <div key={k} className="border-b border-line py-5 pr-4 md:border-b-0">
              <dt className="text-sm text-muted">{k}</dt>
              <dd className="text-lg font-bold leading-snug">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <About side="engineer" /><section id="kaltrixos" className="border-t border-line bg-panel">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="heading max-w-3xl">KaltrixOS: one dashboard for a Nigerian small business.</h2>
          <p className="prose-line mt-5 text-lg text-muted">
            Inventory, invoicing, CRM, bookings and staff tools, plus a public profile that helps
            customers find and trust the business. Live since August 27, 2026.
          </p>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {fourJobs.map((j, i) => (
              <div key={j.title} className="flex gap-5 border-t-2 border-ink pt-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center border-2 border-ink bg-ink text-surface">
                  {icons[i]}
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ fontStretch: "75%" }}>
                    {j.title}
                  </h3>
                  <p className="prose-line mt-2 text-muted">{j.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-muted">
            Built with {stack.join(", ")}. The code is public at{" "}
            <a className="text-link font-semibold text-ink" href={`${links.github}/kaltrix-os`} target="_blank" rel="noreferrer">
              github.com/joekaltho/kaltrix-os
            </a>
            .
          </p>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="heading max-w-3xl">What I fixed in my own product, and why it matters to yours.</h2>
        <p className="prose-line mt-5 text-lg text-muted">
          Anyone can ship a demo. This is the unglamorous work that decides whether software is safe
          to put in front of customers.
        </p>
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {engineeringLog.map((e) => (
            <li key={e.title} className="grid gap-2 py-6 md:grid-cols-[9rem_1fr_2fr] md:gap-8">
              <p className="text-muted">{e.when}</p>
              <h3 className="text-xl font-bold leading-snug">{e.title}</h3>
              <p className="text-muted">{e.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="skills" className="border-t border-line bg-panel">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="heading">What I'm good at</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className="border-2 border-ink bg-surface p-6">
                <h3 className="text-2xl font-bold" style={{ fontStretch: "75%" }}>
                  {c.title}
                </h3>
                <p className="mt-3 text-muted">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hire" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="heading">What you can hire me for</h2>
        <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="border-t-2 border-ink pt-4">
              <h3 className="text-2xl font-bold" style={{ fontStretch: "75%" }}>
                {s.title}
              </h3>
              <p className="prose-line mt-2 text-muted">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="prose-line mt-10 border-l-4 border-ink pl-5 text-lg">{process}</p>
      </section>

      <Contact
        topics={["Freelance project", "Full-time role", "Something else"]} heading="Tell me what you need built."
        lead="Describe the business, the problem and when you need it. I'll reply with a scope and a rough timeline."
      />
    </main>
  );
}