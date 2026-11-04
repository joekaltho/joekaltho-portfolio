import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { links } from "../../data";
import { prefersReducedMotion } from "../../lib/useRoute";
import {
  faqs,
  finalCta,
  founder,
  hero,
  layers,
  offers,
  socials,
  stackLine,
  steps,
  studio,
  whatsappHref,
  work,
  type Topic,
} from "../../studioData";
import { Arrow, External, Screenshot, Wordmark } from "./Bits";
import { Inquiry } from "./Inquiry";
import { StudioNav } from "./StudioNav";

const DESCRIPTION =
  "Kaltrix Digitals is a product engineering studio building fast, secure, production-ready websites and MVPs for businesses and startups.";

function useMetaDescription(text: string) {
  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) return;
    const before = meta.content;
    meta.content = text;
    return () => {
      meta.content = before;
    };
  }, [text]);
}

// Lights one layer at a time, in step with the pulse on the track.
function useLitLayer(count: number) {
  const [lit, setLit] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = window.setInterval(() => setLit((i) => (i + 1) % count), 1000);
    return () => window.clearInterval(id);
  }, [count]);
  return lit;
}

function Schematic() {
  const lit = useLitLayer(layers.length);
  const reduced = typeof window !== "undefined" && prefersReducedMotion();
  return (
    <figure className="schematic">
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3">
        <span className="mono text-muted">Production stack · as it runs in KaltrixOS</span>
        <span className="mono inline-flex items-center gap-2">
          <span className="dot" aria-hidden="true" /> Live
        </span>
      </figcaption>
      <ol className="schematic-track">
        <span className="schematic-pulse" aria-hidden="true" />
        {layers.map((l, i) => (
          <li key={l.id} className={"schematic-node" + (reduced || lit === i ? " is-lit" : "")}>
            <p className="mono text-muted">{l.id}</p>
            <p className="studio-h3 mt-1 text-xl">{l.name}</p>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{l.detail}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}

function SectionHead({ index, label, title, children }: { index: string; label: string; title: string; children?: ReactNode }) {
  return (
    <div className="grid gap-6 md:grid-cols-12">
      <p className="mono text-muted md:col-span-3">
        <span className="accent">{index}</span> — {label}
      </p>
      <div className="md:col-span-9">
        <h2 className="studio-h2">{title}</h2>
        {children}
      </div>
    </div>
  );
}

function Features({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-8 sm:grid-cols-2">
      {items.map((f) => (
        <li key={f} className="flex gap-3 border-t border-line py-3 text-[0.98rem]">
          <span className="dot mt-2 flex-none" aria-hidden="true" />
          {f}
        </li>
      ))}
    </ul>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <p className="mono flex flex-wrap gap-x-4 gap-y-1 text-muted">
      {items.map((s) => (
        <span key={s}>{s}</span>
      ))}
    </p>
  );
}

export function Studio({ section }: { section?: string }) {
  useMetaDescription(DESCRIPTION);
  const [topic, setTopic] = useState<Topic>("Business website");
  const wa = whatsappHref();

  // Pick the right inquiry type, and scroll even when the hash is already #/studio/contact.
  const toContact = (t?: Topic) => (e?: MouseEvent) => {
    if (t) setTopic(t);
    if (window.location.hash === "#/studio/contact") {
      e?.preventDefault();
      document.getElementById("contact")?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
    }
  };

  const bookingProps = studio.booking
    ? { href: studio.booking, target: "_blank", rel: "noreferrer" }
    : { href: "#/studio/contact", onClick: toContact("Discovery call") };

  const k = work.kaltrixos;
  const s = work.shades;

  return (
    <div className="studio">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-surface">
        Skip to content
      </a>
      <StudioNav section={section} onStart={() => toContact()()} />

      <main id="main">
        {/* Hero */}
        <section id="top" className="mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 md:pt-20 lg:pb-24">
          <p className="mono flex items-center gap-2.5 text-muted">
            <span className="dot" aria-hidden="true" />
            {studio.name} — {hero.eyebrow}
          </p>
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
            <h1 className="studio-display text-[clamp(2.9rem,7.4vw,6.6rem)] lg:col-span-8">{hero.headline}</h1>
            <div className="lg:col-span-4 lg:pb-2">
              <p className="text-lg leading-relaxed text-muted">{hero.lead}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#/studio/contact" onClick={toContact()} className="btn">
                  Start a project <Arrow />
                </a>
                <a href="#/studio/work" className="btn btn-quiet">
                  Explore our work
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 lg:mt-20">
            <Schematic />
            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-3">
              <p className="max-w-xl text-sm text-muted">{studio.statement} Every layer above is something we build, run and fix in our own product.</p>
              <Stack items={stackLine} />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t border-line">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
            <SectionHead index="01" label="Services" title="Three ways to work with us.">
              <p className="mt-5 max-w-2xl text-lg text-muted">
                Pick the closest fit. Every engagement starts with a conversation about what the product needs to do.
              </p>
            </SectionHead>
            <div className="mt-14 grid border-t-[1.5px] border-ink md:grid-cols-3">
              {offers.map((o, i) => (
                <article
                  key={o.id}
                  className={"offer flex flex-col justify-between gap-10 border-line px-0 py-8 md:px-7 md:py-10 " + (i > 0 ? "border-t md:border-l md:border-t-0" : "")}
                >
                  <div>
                    <p className="mono text-muted">{o.id}</p>
                    <h3 className="studio-h3 mt-6 text-3xl">{o.title}</h3>
                    <p className="mono accent mt-3 text-sm normal-case tracking-normal">{o.price}</p>
                    <p className="mt-5 leading-relaxed">{o.body}</p>
                    <p className="mt-3 text-sm text-muted">{o.fit}</p>
                  </div>
                  <a href="#/studio/contact" onClick={toContact(o.topic)} className="link-arrow w-fit">
                    {o.cta} <Arrow />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Selected work */}
        <section id="work" className="studio-dark">
          <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8 lg:pt-28">
            <SectionHead index="02" label="Selected work" title="Proof, not promises." />
          </div>

          {/* Project 01: KaltrixOS */}
          <article className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20" aria-labelledby="p-kaltrixos">
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-t-[1.5px] border-ink pt-5">
              <p className="mono">
                <span className="accent">{k.index}</span> — {k.label}
              </p>
              <a href={k.live} target="_blank" rel="noreferrer" className="link-arrow text-sm">
                kaltrixos.com <External />
              </a>
            </div>
            <div className="mt-10 grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h3 id="p-kaltrixos" className="studio-display text-[clamp(3rem,6vw,5.5rem)]">
                  {k.name}
                </h3>
                <p className="studio-h3 mt-3 text-2xl text-muted">{k.tagline}</p>
                <p className="mt-6 text-lg leading-relaxed">{k.body}</p>
                <div className="mt-8">
                  <Features items={k.features} />
                </div>
                <div className="mt-6">
                  <Stack items={k.stack} />
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a href={k.live} target="_blank" rel="noreferrer" className="btn">
                    Visit the live product <External />
                  </a>
                  <a href="#/studio/contact" onClick={toContact("Custom web application")} className="btn btn-quiet">
                    Build something like this
                  </a>
                </div>
              </div>
              <div className="grid content-start gap-5 lg:col-span-7">
                <Screenshot shot={k.shots[0]} sizes="(min-width: 1024px) 56vw, 100vw" />
                <div className="grid gap-5 sm:grid-cols-[1fr_1.1fr]">
                  <Screenshot shot={k.shots[1]} sizes="(min-width: 1024px) 27vw, (min-width: 640px) 48vw, 100vw" />
                  <div className="border border-line p-5">
                    <p className="mono text-muted">From the engineering log</p>
                    <ul className="mt-3 grid gap-4">
                      {k.notes.map((n) => (
                        <li key={n.title}>
                          <p className="font-semibold leading-snug">{n.title}</p>
                          <p className="mono mt-1 text-[0.68rem] text-muted">{n.when}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Project 02: Shades Array */}
          <article className="mx-auto max-w-7xl px-5 pb-20 pt-4 sm:px-8 lg:pb-28" aria-labelledby="p-shades">
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-t-[1.5px] border-ink pt-5">
              <p className="mono">
                <span className="accent">{s.index}</span> — {s.label}
              </p>
              <a href={s.source} target="_blank" rel="noreferrer" className="link-arrow text-sm">
                Source on GitHub <External />
              </a>
            </div>
            <div className="mt-10 grid gap-12 lg:grid-cols-12">
              <div className="order-2 grid content-start gap-5 lg:order-1 lg:col-span-7">
                <Screenshot shot={s.shots[0]} sizes="(min-width: 1024px) 56vw, 100vw" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Screenshot shot={s.shots[1]} sizes="(min-width: 1024px) 27vw, (min-width: 640px) 48vw, 100vw" />
                  <Screenshot shot={s.shots[2]} sizes="(min-width: 1024px) 27vw, (min-width: 640px) 48vw, 100vw" />
                </div>
                <p className="text-sm text-muted">{s.shotsNote}</p>
              </div>
              <div className="order-1 lg:order-2 lg:col-span-5">
                <h3 id="p-shades" className="studio-display text-[clamp(3rem,6vw,5.5rem)]">
                  {s.name}
                </h3>
                <p className="studio-h3 mt-3 text-2xl text-muted">{s.tagline}</p>
                <p className="mt-6 text-lg leading-relaxed">{s.body}</p>
                <div className="mt-8">
                  <Features items={s.features} />
                </div>
                <div className="mt-6">
                  <Stack items={s.stack} />
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a href="#/studio/contact" onClick={toContact("Custom web application")} className="btn">
                    Start a store like this <Arrow />
                  </a>
                  <a href={s.source} target="_blank" rel="noreferrer" className="btn btn-quiet">
                    View the code <External />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* Process */}
        <section id="process" className="border-b border-line">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
            <SectionHead index="03" label="Process" title="Four steps from first call to launch." />
            <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {steps.map((st) => (
                <li key={st.n} className="process-step">
                  <div className="step-line" aria-hidden="true" />
                  <p className="mono accent mt-5">{st.n}</p>
                  <h3 className="studio-h3 mt-2 text-3xl">{st.title}</h3>
                  <p className="mt-3 text-muted">{st.body}</p>
                </li>
              ))}
            </ol>
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="#/studio/contact" onClick={toContact("Discovery call")} className="btn">
                Start with discovery <Arrow />
              </a>
              <p className="text-sm text-muted">The first step is a conversation. No commitment.</p>
            </div>
          </div>
        </section>

        {/* About the founder */}
        <section id="about">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-12 lg:py-28">
            <p className="mono text-muted md:col-span-3">
              <span className="accent">04</span> — {founder.heading}
            </p>
            <div className="md:col-span-9">
              <p className="studio-h2 max-w-4xl">{founder.body[0]}</p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{founder.body[1]}</p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                <a href={links.product} target="_blank" rel="noreferrer" className="link-arrow">
                  KaltrixOS <External />
                </a>
                <a href="#/engineer" className="link-arrow">
                  Engineering profile <Arrow />
                </a>
                <a href="#/founder" className="link-arrow">
                  Follow the build <Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-line">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-12 lg:py-28">
            <div className="md:col-span-4">
              <p className="mono text-muted">
                <span className="accent">05</span> — FAQ
              </p>
              <h2 className="studio-h2 mt-6">Questions founders ask first.</h2>
              <p className="mt-5 text-muted">
                Something else on your mind?{" "}
                <a href="#/studio/contact" onClick={toContact("Something else")} className="text-link font-semibold text-ink">
                  Ask us directly
                </a>
                .
              </p>
            </div>
            <div className="faq border-t-[1.5px] border-ink md:col-span-8">
              {faqs.map((f) => (
                <details key={f.q} className="group border-b border-line">
                  <summary className="flex items-center justify-between gap-6 py-6">
                    <h3 className="studio-h3 text-xl transition-colors sm:text-2xl">{f.q}</h3>
                    <span className="plus" aria-hidden="true" />
                  </summary>
                  <p className="max-w-2xl pb-7 leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA + inquiry */}
        <section id="contact" className="studio-dark">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
            <div className="lg:col-span-5">
              <p className="mono flex items-center gap-2.5 text-muted">
                <span className="dot" aria-hidden="true" /> Start a project
              </p>
              <h2 className="studio-display mt-6 text-[clamp(2.75rem,5.6vw,5rem)]">{finalCta.headline}</h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{finalCta.body}</p>
              <a {...bookingProps} className="btn mt-8">
                {finalCta.cta} <Arrow />
              </a>

              <dl className="mt-12 grid gap-5 border-t border-line pt-8 text-[0.98rem]">
                {studio.email && (
                  <div>
                    <dt className="mono text-muted">Email</dt>
                    <dd className="mt-1">
                      <a href={`mailto:${studio.email}`} className="link-arrow break-all">
                        {studio.email}
                      </a>
                    </dd>
                  </div>
                )}
                {wa && (
                  <div>
                    <dt className="mono text-muted">WhatsApp</dt>
                    <dd className="mt-1">
                      <a href={wa} target="_blank" rel="noreferrer" className="link-arrow">
                        Chat on WhatsApp <External />
                      </a>
                    </dd>
                  </div>
                )}
                {socials.length > 0 && (
                  <div>
                    <dt className="mono text-muted">Elsewhere</dt>
                    <dd className="mt-1 flex flex-wrap gap-x-5 gap-y-2">
                      {socials.map((so) => (
                        <a key={so.label} href={so.href} target="_blank" rel="noreferrer" className="link-arrow">
                          {so.label}
                        </a>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
            <div className="lg:col-span-7 lg:pl-8">
              <Inquiry topic={topic} onTopic={setTopic} />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark />
            <p className="mt-4 max-w-sm text-sm text-muted">{studio.statement}</p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3 md:col-span-7">
            <div className="grid content-start gap-2">
              <p className="mono text-muted">Studio</p>
              <a href="#/studio/services" className="hover:text-[var(--accent)]">Services</a>
              <a href="#/studio/work" className="hover:text-[var(--accent)]">Work</a>
              <a href="#/studio/process" className="hover:text-[var(--accent)]">Process</a>
              <a href="#/studio/faq" className="hover:text-[var(--accent)]">FAQ</a>
            </div>
            <div className="grid content-start gap-2">
              <p className="mono text-muted">Contact</p>
              <a href="#/studio/contact" onClick={toContact()} className="hover:text-[var(--accent)]">Start a project</a>
              {studio.email && (
                <a href={`mailto:${studio.email}`} className="hover:text-[var(--accent)]">Email</a>
              )}
              {wa && (
                <a href={wa} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">WhatsApp</a>
              )}
              {socials.map((so) => (
                <a key={so.label} href={so.href} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">
                  {so.label}
                </a>
              ))}
            </div>
            <div className="grid content-start gap-2">
              <p className="mono text-muted">{studio.founder}</p>
              <a href="#/engineer" className="hover:text-[var(--accent)]">Engineer</a>
              <a href="#/founder" className="hover:text-[var(--accent)]">Founder</a>
              <a href={links.product} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">KaltrixOS</a>
            </div>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl border-t border-line px-5 py-5 text-xs text-muted sm:px-8">
          {studio.name} · Built in Nigeria · © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}
