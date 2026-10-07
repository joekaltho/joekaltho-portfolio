import type { Page } from "../lib/useRoute";

const sides = [
  { id: "engineer", label: "Engineer" },
  { id: "founder", label: "Founder" },
] as const;

export function Nav({ page }: { page: Page }) {
  const contactHref = page === "founder" ? "#/founder/contact" : "#/engineer/contact";
  return (
    <header className="no-print sticky top-0 z-20 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a
          href="#/"
          className="text-2xl font-extrabold leading-none"
          style={{ fontStretch: "70%" }}
        >
          Joe Kaltho
        </a>
        <nav aria-label="Switch between the two sides of this site" className="flex border-2 border-ink">
          {sides.map((s) => {
            const active = page === s.id;
            return (
              <a
                key={s.id}
                href={`#/${s.id}`}
                aria-current={active ? "page" : undefined}
                className={
                  "px-4 py-1.5 text-sm font-semibold transition-colors " +
                  (active ? "bg-ink text-surface" : "hover:bg-panel")
                }
              >
                {s.label}
              </a>
            );
          })}
        </nav>
        <a href={contactHref} className="hidden font-semibold text-link sm:inline">
          Contact
        </a>
      </div>
    </header>
  );
}
