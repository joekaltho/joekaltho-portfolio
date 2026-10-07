import { useEffect, useState } from "react";

const bars = [38, 52, 45, 60, 48, 70, 64, 80, 72, 88, 76, 95];
const nav = ["Overview", "Customers", "Bookings", "Invoices", "Listings", "Pulse"];

// A stand-in for the product. Numbers are sample data and labelled as such.
export function DashboardMock() {
  return (
    <div className="select-none border-2 border-ink bg-surface text-ink" aria-hidden="true">
      <div className="flex items-center gap-1.5 border-b-2 border-ink bg-panel px-3 py-2">
        <span className="h-2.5 w-2.5 bg-ink" />
        <span className="h-2.5 w-2.5 bg-ink opacity-60" />
        <span className="h-2.5 w-2.5 bg-ink opacity-30" />
        <span className="ml-3 flex-1 truncate border border-line bg-surface px-2 py-0.5 text-xs text-muted">
          kaltrixos.com/dashboard/pulse
        </span>
      </div>
      <div className="grid grid-cols-[1fr] sm:grid-cols-[7.5rem_1fr]">
        <div className="hidden border-r-2 border-ink bg-ink p-3 text-surface sm:block">
          <p className="mb-3 text-lg font-extrabold leading-none" style={{ fontStretch: "70%" }}>
            KaltrixOS
          </p>
          <ul className="space-y-1 text-xs">
            {nav.map((n) => (
              <li
                key={n}
                className={"px-2 py-1.5 " + (n === "Pulse" ? "bg-surface font-bold text-ink" : "opacity-80")}
              >
                {n}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-lg font-bold" style={{ fontStretch: "75%" }}>
              Business Pulse
            </p>
            <span className="border border-ink px-2 py-0.5 text-xs font-semibold">This month</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              ["Revenue", "\u20A61.24M"],
              ["Expenses", "\u20A60.61M"],
              ["Profit", "\u20A60.63M"],
              ["Health", "82/100"],
            ].map(([k, v]) => (
              <div key={k} className="border border-line bg-panel p-2">
                <p className="text-[0.7rem] text-muted">{k}</p>
                <p className="text-base font-extrabold leading-tight" style={{ fontStretch: "75%" }}>
                  {v}
                </p>
              </div>
            ))}
          </div>
          <div className="bars mt-3 flex h-24 items-end gap-1 border border-line bg-panel p-2">
            {bars.map((h, i) => (
              <span key={i} className="flex-1 bg-ink" style={{ height: `${h}%`, opacity: 0.35 + i * 0.055, animationDelay: `${500 + i * 55}ms` }} />
            ))}
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="border-2 border-ink px-2 py-0.5 font-bold">TrustScore: Verified</span>
            <span className="text-muted">Invoice 0042 paid</span>
          </div>
          <p className="mt-3 text-[0.7rem] text-muted">Sample data, not a real business.</p>
        </div>
      </div>
    </div>
  );
}

// Drop a real screenshot at public/shots/dashboard.png and it replaces the mockup.
export function ProductShot() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setSrc(img.src);
    img.src = "/shots/dashboard.png";
  }, []);

  if (src) {
    return (
      <img
        src={src}
        alt="The KaltrixOS dashboard"
        className="w-full border-2 border-ink object-cover object-top"
      />
    );
  }
  return <DashboardMock />;
}

// Optional: put a photo at public/joe.jpg and it shows up in the hero.
export function Portrait() {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <img
      src="/joe.jpg"
      alt="Joe Kaltho"
      onError={() => setOk(false)}
      className="h-16 w-16 border-2 border-ink object-cover"
    />
  );
}