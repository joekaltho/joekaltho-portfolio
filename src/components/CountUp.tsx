import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../lib/useRoute";

function render(n: number, decimals: number, suffix: string) {
  return (
    n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix
  );
}

// Counts up once, the first time it scrolls into view.
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const target = parseFloat(value.replace(/,/g, ""));
  const suffix = value.replace(/[0-9.,]/g, "");
  const decimals = (value.split(".")[1] ?? "").replace(/\D/g, "").length;
  const animate = !prefersReducedMotion() && !Number.isNaN(target);
  const [text, setText] = useState(animate ? render(0, decimals, suffix) : value);

  useEffect(() => {
    const el = ref.current;
    if (!animate || !el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / 1400, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setText(render(target * eased, decimals, suffix));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [animate, target, decimals, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      {text}
    </span>
  );
}