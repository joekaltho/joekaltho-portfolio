import { useEffect, useState } from "react";
import { links, person } from "../data";
import { goalStatus } from "../lib/goal";

// Optional: put a photo at public/joe.jpg and it replaces the monogram tile.
function AboutPhoto() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setSrc(img.src);
    img.src = "/joe.jpg";
  }, []);

  if (src) {
    return <img src={src} alt="Joe Kaltho" className="aspect-square w-full border-2 border-ink object-cover" />;
  }
  return (
    <div className="relative aspect-square w-full overflow-hidden border-2 border-ink bg-ink text-surface" aria-hidden="true">
      <svg viewBox="0 0 400 400" className="absolute -bottom-3 -right-3 w-4/5" fill="currentColor" opacity="0.35">
        <rect x="0" y="300" width="100" height="100" opacity="0.4" />
        <rect x="100" y="200" width="100" height="200" opacity="0.6" />
        <rect x="200" y="100" width="100" height="300" opacity="0.8" />
        <rect x="300" y="0" width="100" height="400" />
        <path d="M350 120l34 34-34 34-34-34z" style={{ fill: "var(--fg)" }} />
      </svg>
      <p className="display absolute left-4 top-3 text-8xl">JK</p>
    </div>
  );
}

export function About({ side }: { side: "engineer" | "founder" }) {
  const g = goalStatus();
  const contactHref = `#/${side}/contact`;

  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[17rem_1fr]">
        <div>
          <AboutPhoto />
          <p className="mt-3 text-sm text-muted">
            {person.name}, {person.age}. {person.place}.
          </p>
        </div>

        <div>
          <h2 className="heading">About me</h2>
          <div className="prose-line mt-6 space-y-4 text-lg">
            <p>
              I'm {person.name}, {person.age}, a computer science student in Nigeria who builds
              business software. KaltrixOS is the company I'm building, and I do the product, the
              code, the database, the payments and the security myself.
            </p>
            <p>
              I'm on day {g.day} of building it in public. Most small businesses here have limited
              digital infrastructure, and I'm building the infrastructure to fill that gap.
            </p>
            <p>
              This site has two jobs. If you need something built, hire me for a freelance project
              or bring me onto your team. If you want to watch a solo founder chase $1 billion in
              three years in the open, follow the build.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col justify-between gap-5 border-2 border-ink bg-panel p-6">
              <div>
                <h3 className="text-2xl font-bold" style={{ fontStretch: "75%" }}>
                  Hire me
                </h3>
                <p className="mt-2 text-muted">
                  Freelance projects or a full-time role. Web apps, business platforms and automation.
                </p>
              </div>
              <a className="btn w-fit" href={contactHref}>
                Start a conversation
              </a>
            </div>
            <div className="flex flex-col justify-between gap-5 border-2 border-ink bg-panel p-6">
              <div>
                <h3 className="text-2xl font-bold" style={{ fontStretch: "75%" }}>
                  Watch the build
                </h3>
                <p className="mt-2 text-muted">
                  Day {g.day} of {g.total.toLocaleString("en-US")}. Real numbers, including the zeros.
                </p>
              </div>
              {side === "engineer" ? (
                <a className="btn btn-quiet w-fit" href="#/founder">
                  See the run
                </a>
              ) : (
                <a className="btn btn-quiet w-fit" href={links.instagram} target="_blank" rel="noreferrer">
                  Follow on Instagram
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}