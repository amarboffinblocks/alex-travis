import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type DotGridProps = ComponentProps<"div"> & {
  /** Distance between dot centres, in px. */
  spacing?: number;
  /** Dot radius, in px. */
  radius?: number;
};

/**
 * Decorative dotted backdrop. Absolute by default, so it fills the nearest
 * positioned ancestor. Colour comes from `currentColor` — set it with any
 * text utility (`text-brand-dark/20`), and inset it with `inset-*`.
 */
function DotGrid({
  className,
  spacing = 16,
  radius = 1,
  style,
  ...props
}: DotGridProps) {
  return (
    <div
      data-slot="dot-grid"
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 text-brand-dark/15 ",
        className
      )}
      style={{
        backgroundImage: `radial-gradient(circle at center, currentColor ${radius}px, transparent ${radius}px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
        ...style,
      }}
      {...props}
    />
  );
}

export { DotGrid };
