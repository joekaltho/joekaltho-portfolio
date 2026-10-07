import { cv, links, person } from "../data";

export function Cv() {
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
        <p className="mt-2 text-lg">{person.role}, {person.place}</p>
        <p className="mt-1 text-sm text-muted">
          {[person.email, links.github.replace("https://", ""), links.product.replace("https://", "")]
            .filter(Boolean)
            .join("  |  ")}
        </p>
      </header>

      <section className="mt-6">
        <h2 className="text-2xl font-bold" style={{ fontStretch: "75%" }}>Summary</h2>
        <p className="mt-2">{cv.summary}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-bold" style={{ fontStretch: "75%" }}>Experience</h2>
        {cv.experience.map((x) => (
          <div key={x.title} className="mt-4">
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
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-bold" style={{ fontStretch: "75%" }}>Education</h2>
        <p className="mt-2">{cv.education}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-bold" style={{ fontStretch: "75%" }}>Skills</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {cv.skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
