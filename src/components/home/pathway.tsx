import { cn } from "@/lib/utils";

// The green "pathway" from the logo, used to link the page sections together.
// Both shapes are decorative, so screen readers skip them (aria-hidden).
// preserveAspectRatio="none" lets the curve stretch to fit its box, and
// vectorEffect="non-scaling-stroke" keeps the line the same thickness anyway.

/** A short winding curve between two sections. It starts and ends in the middle. */
export function PathwayConnector({ flip = false }: { flip?: boolean }) {
  return (
    <div aria-hidden="true" className="flex flex-col items-center">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className={cn("h-28 w-48 sm:h-36 sm:w-72", flip && "-scale-x-100")}
      >
        <path
          d="M50 0 C50 30 10 25 18 52 C26 80 50 70 50 100"
          fill="none"
          className="stroke-brand-green"
          strokeWidth="6"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {/* A small "stop" dot where the path reaches the next section. */}
      <span className="-mt-1.5 size-4 rounded-full bg-brand-green ring-4 ring-cream" />
    </div>
  );
}

/** A tall winding line that the "How it works" steps sit on. */
export function PathwayLine({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 400"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M24 0 C44 50 4 100 24 150 S44 250 24 300 S4 370 24 400"
        fill="none"
        className="stroke-brand-green"
        strokeWidth="6"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
