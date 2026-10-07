import { useLayoutEffect } from "react";
import { prefersReducedMotion } from "./useRoute";

const SELECTOR =
  "main h1, main h2, main h3, main p, main li, main dl > div, main form, main .shadow-block, main .step, main .btn";

// Calm entrance: blocks fade and rise as they scroll into view, staggered within a row.
export function useReveal(page: string) {
  useLayoutEffect(() => {
    if (page === "cv" || prefersReducedMotion() || !("IntersectionObserver" in window)) return;

    const timers: number[] = [];
    const seen = new Map<Element, number>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          el.classList.add("is-in");
          const delay = parseFloat(el.style.getPropertyValue("--d")) || 0;
          // Once settled, hand control back to the element's own hover transitions.
          timers.push(
            window.setTimeout(() => {
              el.classList.remove("reveal", "is-in");
              el.style.removeProperty("--d");
            }, 1400 + delay),
          );
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
    );

    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR)).filter(
      (el) => !el.closest("[aria-hidden='true'], .fade-bottom"),
    );

    for (const el of els) {
      const parent = el.parentElement as Element;
      const idx = seen.get(parent) ?? 0;
      seen.set(parent, idx + 1);
      el.style.setProperty("--d", `${Math.min(idx, 3) * 90}ms`);
      el.classList.add("reveal");
      io.observe(el);
    }

    return () => {
      io.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
      for (const el of els) {
        el.classList.remove("reveal", "is-in");
        el.style.removeProperty("--d");
      }
    };
  }, [page]);
}