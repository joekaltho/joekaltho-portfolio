import { ecosystem, journey, links, scoreboard, thesis } from "../data";
import { GOAL_LABEL, goalStatus } from "../lib/goal";
import { About } from "./About";import { Contact } from "./Contact";import { CountUp } from "./CountUp";
import { DayGrid } from "./DayGrid";
import { Stairs } from "./Stairs";

const stepHeights = ["md:min-h-48", "md:min-h-64", "md:min-h-80"];
const stepClass: Record<string, string> = {
  Live: "step-live",
  "In development": "step-dev",
  Planned: "step-planned",
};

export function Founder() {
  const g = goalStatus();
  const fmt = (n: number) => n.toLocaleString("en-US");

  return (
    <main>
      <section className="hero-bg">
        <Stairs className="stairs pointer-events-none absolute -bottom-6 right-0 -z-10 w-[min(32rem,70vw)] opacity-20" />
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
          <h1 className="display text-[clamp(3.75rem,13vw,11rem)]">
            {GOAL_LABEL.replace("$1 billion", "$1B")}.
          </h1>
          <p className="prose-line mt-6 text-xl">
            I'm a solo founder building the business operating system for African small businesses.
            This page keeps the score in public, including the days where the number is zero.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              [fmt(g.day), "Day of the run"],
              [fmt(g.remaining), "Days left"],
              [`${g.percent}%`, "Of the time gone"],
            ].map(([n, label]) => (
              <div key={label} className="border-2 border-ink bg-panel p-5">
                <dd className="display text-6xl"><CountUp value={n} /></dd>
                <dt className="mt-2 text-muted">{label}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <DayGrid total={g.total} day={g.day} />
            <p className="mt-3 text-sm text-muted">
              One square per day, from day one on June 30, 2026 to the deadline in
              June 2029.
            </p>
          </div>
        </div>
      </section>

      <section id="scoreboard" className="border-t border-line bg-panel">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="heading">Where I actually am</h2>
          <dl className="mt-10 divide-y divide-line border-y border-line">
            {scoreboard.rows.map((r) => (
              <div key={r.label} className="grid gap-1 py-5 md:grid-cols-[14rem_1fr] md:gap-8">
                <dt className="text-muted">{r.label}</dt>
                <dd className="text-xl font-semibold">{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-muted">Last updated {scoreboard.asOf}.</p>
        </div>
      </section>

      <About side="founder" /><section id="why" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="heading max-w-3xl">Why a billion-dollar company can start here.</h2>
        <p
          className="mt-8 max-w-4xl border-l-8 border-ink pl-6 text-3xl font-semibold leading-tight md:text-5xl"
          style={{ fontStretch: "75%" }}
        >
          {thesis}
        </p>
      </section>

      <section id="ecosystem" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="heading max-w-3xl">Three products, each standing on the last.</h2>
          <div className="mt-12 grid items-end gap-4 md:grid-cols-3">
            {ecosystem.map((p, i) => (
              <div key={p.name} className={`step flex flex-col justify-between gap-6 ${stepClass[p.status]} ${stepHeights[i]}`}>
                <div>
                  <h3 className="text-3xl font-extrabold" style={{ fontStretch: "70%" }}>
                    {p.name}
                  </h3>
                  <p className="mt-2">{p.body}</p>
                </div>
                <p className="font-semibold">{p.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="border-t border-line bg-panel">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="heading">The run so far</h2>
          <ol className="mt-12 border-l-2 border-ink">
            {journey.map((j) => (
              <li key={j.when + j.body} className="relative pb-9 pl-8 last:pb-0">
                <span className="absolute -left-[9px] top-2 h-4 w-4 bg-ink" aria-hidden="true" />
                <p className="text-xl font-bold" style={{ fontStretch: "75%" }}>
                  {j.when}
                </p>
                <p className="prose-line mt-1 text-muted">{j.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="follow" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="heading max-w-3xl">Follow it as it happens.</h2>
        <p className="prose-line mt-5 text-lg text-muted">
          I post the goals, the numbers and the ship log on Instagram and X.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {links.instagram && (
            <a className="btn" href={links.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          )}
          {links.x && (
            <a className="btn btn-quiet" href={links.x} target="_blank" rel="noreferrer">
              X
            </a>
          )}
          <a className="btn btn-quiet" href={links.product} target="_blank" rel="noreferrer">
            Try KaltrixOS
          </a>
        </div>
      </section>

      <Contact
        topics={["Investing", "Partnership", "Interview or press", "Something else"]} heading="Investor, partner or fellow founder?"
        lead="Tell me who you are and what you have in mind. I answer every real message."
      />
    </main>
  );
}