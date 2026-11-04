import type { Shot } from "../../studioData";

export function Arrow({ className = "arrow h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M2 8h11M9 4l4 4-4 4" strokeLinecap="square" />
    </svg>
  );
}

export function External({ className = "arrow h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M5 3h8v8M13 3L3 13" strokeLinecap="square" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="inline-flex items-center gap-2.5 leading-none">
      <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
        <rect x="0" y="10" width="6" height="10" fill="currentColor" />
        <rect x="7" y="5" width="6" height="15" fill="currentColor" />
        <rect x="14" y="0" width="6" height="20" style={{ fill: "var(--accent)" }} />
      </svg>
      <span className="text-lg font-bold tracking-tight" style={{ fontStretch: "85%" }}>
        Kaltrix <span className="font-normal text-muted">Digitals</span>
      </span>
    </span>
  );
}

// Real screenshots in a quiet browser frame. Each image ships at 960 and 1440 wide.
export function Screenshot({ shot, eager = false, sizes }: { shot: Shot; eager?: boolean; sizes: string }) {
  return (
    <figure className="frame">
      <div className="frame-bar">
        <i />
        <i />
        <i />
        <span className="mono ml-2 truncate text-[0.68rem] normal-case tracking-normal text-muted">{shot.caption}</span>
      </div>
      <img
        src={`${shot.src}.webp`}
        srcSet={`${shot.src}-960.webp 960w, ${shot.src}.webp 1440w`}
        sizes={sizes}
        width={1440}
        height={900}
        alt={shot.alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </figure>
  );
}
