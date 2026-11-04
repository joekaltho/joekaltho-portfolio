import { useEffect, useState } from "react";
import { studioNav } from "../../studioData";
import { Arrow, Wordmark } from "./Bits";

export function StudioNav({ section, onStart }: { section?: string; onStart: () => void }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 900 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  useEffect(() => setOpen(false), [section]);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <a href="#/studio" aria-label="Kaltrix Digitals, back to top">
          <Wordmark />
        </a>

        <nav aria-label="Kaltrix Digitals" className="hidden items-center gap-8 min-[900px]:flex">
          {studioNav.map((n) => (
            <a
              key={n.id}
              href={`#/studio/${n.id}`}
              aria-current={section === n.id ? "location" : undefined}
              className="text-[0.95rem] text-muted transition-colors hover:text-ink aria-[current=location]:text-ink"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#/studio/contact" onClick={onStart} className="btn hidden !min-h-10 !px-4 text-sm sm:inline-flex">
            Start a project <Arrow />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-line min-[900px]:hidden"
            aria-expanded={open}
            aria-controls="studio-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
            </svg>
          </button>
        </div>
      </div>

      <div id="studio-menu" className="studio-menu min-[900px]:hidden" data-open={open} hidden={!open}>
        <div>
          <nav aria-label="Kaltrix Digitals menu" className="mx-auto grid max-w-7xl px-5 pb-6 sm:px-8">
            {studioNav.map((n) => (
              <a
                key={n.id}
                href={`#/studio/${n.id}`}
                onClick={() => setOpen(false)}
                className="studio-h3 flex items-center justify-between border-b border-line py-4 text-2xl"
              >
                {n.label}
                <Arrow className="h-4 w-4 text-muted" />
              </a>
            ))}
            <a
              href="#/studio/contact"
              onClick={() => {
                setOpen(false);
                onStart();
              }}
              className="btn mt-6 w-full"
            >
              Start a project <Arrow />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
