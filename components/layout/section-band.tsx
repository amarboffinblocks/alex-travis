import type { ComponentProps } from "react";

import { DotGrid } from "@/components/layout/dot-grid";
import { GridCrossing } from "@/components/layout/grid-crossing";
import { cn } from "@/lib/utils";

const sizeClass = {
  sm: "h-12",
  md: "h-20",
  lg: "h-28",
} as const;

type SectionBandProps = ComponentProps<"div"> & {
  /** Vertical rhythm before section content. */
  size?: keyof typeof sizeClass;
  /** Fill the band with the dotted backdrop. */
  withDots?: boolean;
  /**
   * Stars where this band's bottom rule meets the container rails.
   * Outward arm is clipped — the horizontal rule only runs inside the rails.
   */
  withCrossings?: boolean;
};

/**
 * Decorative spacer used at the top of a section inside `Container`.
 * Spans the full grid by default (`col-span-4 lg:col-span-12`).
 */
function SectionBand({
  className,
  size = "md",
  withDots = true,
  withCrossings = true,
  ...props
}: SectionBandProps) {
  return (
    <div
      data-slot="section-band"
      aria-hidden="true"
      className={cn(
        "relative col-span-4 border-b border-dashed border-primary/50 lg:col-span-12",
        sizeClass[size],
        className
      )}
      {...props}
    >
      {withDots ? <DotGrid /> : null}
      {withCrossings ? (
        <>
          <GridCrossing at="bl" clip="left" />
          <GridCrossing at="br" clip="right" />
        </>
      ) : null}
    </div>
  );
}

export { SectionBand };
