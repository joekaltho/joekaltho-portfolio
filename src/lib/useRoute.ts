import { useEffect, useState } from "react";

export type Page = "door" | "engineer" | "founder" | "cv";
export type Route = { page: Page; section?: string };

function parse(hash: string): Route {
  const [, first = "", second] = hash.replace(/^#/, "").split("/");
  if (first === "engineer") return { page: "engineer", section: second };
  if (first === "founder") return { page: "founder", section: second };
  if (first === "cv") return { page: "cv" };
  return { page: "door" };
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash));

  useEffect(() => {
    const onChange = () => setRoute(parse(window.location.hash));
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
