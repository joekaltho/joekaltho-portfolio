import type { CSSProperties } from "react";

// One square for every day of the run. Filled squares are days already lived.
export function DayGrid({ total, day }: { total: number; day: number }) {
  return (
    <div className="daygrid" role="img" aria-label={`Day ${day} of ${total}`}>
      {Array.from({ length: total }, (_, i) => {
        const n = i + 1;
        const state = n < day ? "done" : n === day ? "today" : "";
        return (
          <span
            key={i}
            className={state}
            style={state ? ({ "--i": i } as CSSProperties) : undefined}
          />
        );
      })}
    </div>
  );
}
