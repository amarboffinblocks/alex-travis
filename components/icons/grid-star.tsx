import { cn } from "@/lib/utils";

type GridStarProps = {
  className?: string;
};

/**
 * Four-pointed sparkle used to mark rule intersections.
 * Control points sit 7.2 from the centre of a 24 box — far enough out to keep
 * the arms solid at small sizes and when a half is clipped off.
 */
function GridStar({ className }: GridStarProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={cn("pointer-events-none size-5 shrink-0 text-brand-dark", className)}
    >
      <path
        fill="currentColor"
        d="M12 0C12 4.8 19.2 12 24 12C19.2 12 12 19.2 12 24C12 19.2 4.8 12 0 12C4.8 12 12 4.8 12 0Z"
      />
    </svg>
  );
}

export { GridStar };
