/**
 * Minimal line drawing for the boxing quote: steps draw themselves in,
 * then a small figure at the top raises its arms and keeps hopping.
 * Animation is driven by the parent `.reveal.is-visible` (see globals.css).
 */
export function StairsIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 150 130"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        className="stairs-path text-muted"
        pathLength={1}
        d="M8,122 L36,122 L36,107 L62,107 L62,92 L88,92 L88,77 L142,77"
      />
      <g className="stairs-figure">
        <circle cx="114" cy="36" r="6" />
        <path d="M114,42 L114,62 M114,62 L107,75 M114,62 L121,75" />
        <path className="stairs-arm" d="M114,47 L103,30" />
        <path className="stairs-arm" d="M114,47 L125,30" />
      </g>
    </svg>
  );
}
