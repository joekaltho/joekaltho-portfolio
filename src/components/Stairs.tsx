// The stepped-block motif from the KaltrixOS mark: each step stands on the last.
export function Stairs({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      style={{ color: "var(--bright)" }}
      fill="currentColor"
    >
      <rect x="0" y="300" width="100" height="100" opacity="0.3" />
      <rect x="100" y="200" width="100" height="200" opacity="0.5" />
      <rect x="200" y="100" width="100" height="300" opacity="0.72" />
      <rect x="300" y="0" width="100" height="400" />
      <path d="M350 120l34 34-34 34-34-34z" style={{ fill: "var(--bg)" }} />
    </svg>
  );
}