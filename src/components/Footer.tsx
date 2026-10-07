import { links, person } from "../data";

export function Footer() {
  const items = [
    { label: "GitHub", href: links.github },
    { label: "X", href: links.x },
    { label: "Instagram", href: links.instagram },
    { label: "LinkedIn", href: links.linkedin },
    { label: "TikTok", href: links.tiktok },
    { label: "Email", href: person.email ? `mailto:${person.email}` : "" },
  ].filter((i) => i.href);

  return (
    <footer className="no-print border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm sm:px-8">
        <p className="text-muted">Joe Kaltho. Built in Nigeria.</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {items.map((i) => (
            <li key={i.label}>
              <a className="text-link font-semibold" href={i.href} target="_blank" rel="noreferrer">
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
