import { useEffect, useLayoutEffect } from "react";
import { Cv } from "./components/Cv";
import { Door } from "./components/Door";
import { Engineer } from "./components/Engineer";
import { Footer } from "./components/Footer";
import { Founder } from "./components/Founder";
import { Nav } from "./components/Nav";
import { prefersReducedMotion, useRoute } from "./lib/useRoute";import { useReveal } from "./lib/useReveal";

const titles = {
  door: "Joe Kaltho | Engineer and founder building KaltrixOS",
  engineer: "Joe Kaltho | Full-stack engineer for business software",
  founder: "Joe Kaltho | Founder: $1B in three years, in public",
  cv: "Joe Kaltho | CV",
} as const;

export default function App() {
  const { page, section } = useRoute();  useReveal(page);

  // The side decides the palette for the whole document, including the body.
  useLayoutEffect(() => {
    document.documentElement.dataset.side = page;
    document.title = titles[page];
  }, [page]);

  useEffect(() => {
    const behavior: ScrollBehavior = prefersReducedMotion() ? "auto" : "smooth";
    if (section) {
      requestAnimationFrame(() => {
        document.getElementById(section)?.scrollIntoView({ behavior });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [page, section]);

  if (page === "door") return <Door />;
  if (page === "cv") return <Cv />;

  return (
    <>
      <Nav page={page} />
      {page === "engineer" ? <Engineer /> : <Founder />}
      <Footer />
    </>
  );
}
