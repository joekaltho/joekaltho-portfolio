import type { ReactNode } from "react";
import { cv } from "../cvData";
import { links, person } from "../data";

const bare = (u: string) => u.replace(/^https?:\/\//, "");

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-7">
      <h2 className="border-b border-line pb-1 text-xl font-bold" style={{ fontStretch: "75%" }}>
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export function Cv() {
  const contact = [person.email, bare(links.github), bare(links.product), bare(links.x)].filter(Boolean);

  return (
    <main className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
      <div className="no-print mb-8 flex items-center justify-between gap-4">
        <a href="#/engineer" className="text-link font-semibold">
          Back to site
        </a>
        <button type="button" className="btn" onClick={() => window.print()}>
          Print or save as PDF
        </button>
      </div>

      <header className="border-b-2 border-ink pb-5">
        <h1 className="text-5xl font-extrabold leading-none" style={{ fontStretch: "70%" }}>
          {person.name}
        </h1>
        <p className="mt-2 text-lg">
          {person.role}, {person.place}. {cv.tagline}.
        </p>
        <p className="mt-1 text-sm text-muted">{contact.join("  |  ")}</p>
      </header>

      <Section title="Summary">
        <p>{cv.summary}</p>
      </Section>

      <Section title="Experience">
        {cv.experience.map((x) => (
          <div key={x.title} className="mb-5 break-inside-avoid last:mb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-bold">{x.title}</h3>
              <p className="text-sm text-muted">{x.when}</p>
            </div>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              {x.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section title="Selected projects">
        {cv.projects.map((p) => (
          <div key={p.name} className="mb-4 break-inside-avoid last:mb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-bold">
                {p.name} <span className="text-sm font-normal text-muted">{p.stack}</span>
              </h3>
              <p className="text-sm text-muted">{p.href}</p>
            </div>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
        <p className="mt-4 text-sm">
          <span className="font-bold">Also built: </span>
          {cv.alsoBuilt}
        </p>
      </Section>

      <Section title="Skills">
        <dl className="grid gap-x-6 gap-y-1 sm:grid-cols-[12.5rem_1fr]">
          {cv.skills.map((s) => (
            <div key={s.label} className="contents">
              <dt className="font-bold">{s.label}</dt>
              <dd>{s.items}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Education">
        <p>{cv.education}</p>
      </Section>
    </main>
  );
}