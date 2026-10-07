import { goalStatus } from "../lib/goal";
import { person } from "../data";
import { DayGrid } from "./DayGrid";
import { ProductShot } from "./Mock";

export function Door() {
  const g = goalStatus();
  return (
    <main className="flex min-h-svh flex-col">
      <div className="flex items-baseline justify-between gap-4 border-b border-line px-5 py-4 sm:px-8">
        <p className="text-2xl font-extrabold leading-none" style={{ fontStretch: "70%" }}>
          {person.name}
        </p>
        <p className="text-sm text-muted">
          {person.age}, Nigeria. I built and run KaltrixOS.
        </p>
      </div>

      <div className="door-grid grid flex-1 md:grid-cols-2">
        <a
          href="#/engineer"
          data-side="engineer" data-door="a"
          className="group flex min-w-0 flex-col justify-between gap-10 overflow-hidden bg-surface p-6 text-ink sm:p-10"
        >
          <div>
            <h1 className="display text-[clamp(2.75rem,7.5vw,7rem)]">Hire the engineer.</h1>
            <p className="prose-line mt-6 text-lg text-muted">
              Business software that holds up when real users and real money show up. Next.js,
              Supabase and Paystack, shipped and running.
            </p>
          </div>
          <div className="fade-bottom hidden max-h-56 overflow-hidden md:block">
            <ProductShot />
          </div>
          <span className="btn w-fit group-hover:bg-transparent group-hover:text-ink">See the work</span>
        </a>

        <a
          href="#/founder"
          data-side="founder" data-door="b"
          className="group flex min-w-0 flex-col justify-between gap-10 overflow-hidden bg-surface p-6 text-ink sm:p-10"
        >
          <div>
            <h2 className="display text-[clamp(2.75rem,7.5vw,7rem)]">Follow the founder.</h2>
            <p className="prose-line mt-6 text-lg text-muted">
              $1 billion in three years, run in public with real numbers. Today is day {g.day} of{" "}
              {g.total.toLocaleString("en-US")}.
            </p>
          </div>
          <div className="fade-bottom hidden max-h-56 overflow-hidden md:block">
            <DayGrid total={g.total} day={g.day} />
          </div>
          <span className="btn w-fit group-hover:bg-transparent group-hover:text-ink">Follow the run</span>
        </a>
      </div>
    </main>
  );
}