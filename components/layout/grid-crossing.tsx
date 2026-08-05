import { GridStar } from "@/components/icons/grid-star";
import { cn } from "@/lib/utils";

/** Corner of a bordered box, where two rules meet. */
type Crossing = "tl" | "tr" | "bl" | "br";

/** The side with no rule running off it, on a T-junction. */
type Clip = "top" | "bottom" | "left" | "right";

const crossingPosition: Record<Crossing, string> = {
  tl: "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
  tr: "top-0 right-0 translate-x-1/2 -translate-y-1/2",
  bl: "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
  br: "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
};

/**
 * Cut just past the middle, not exactly on it. A 1px rule is painted inside its
 * owner's edge while the star centres on that edge, so a clip at a flat 50%
 * leaves the rule stranded outside the star. The extra pixel swallows it.
 */
const clipPath: Record<Clip, string> = {
  top: "[clip-path:inset(calc(50%_-_1px)_0_0_0)]",
  bottom: "[clip-path:inset(0_0_calc(50%_-_1px)_0)]",
  left: "[clip-path:inset(0_0_0_calc(50%_-_1px))]",
  right: "[clip-path:inset(0_calc(50%_-_1px)_0_0)]",
};

type GridCrossingProps = {
  at: Crossing;
  /**
   * Drop the arm pointing this way, for junctions where only three rules meet.
   * Omit on a full four-way crossing.
   */
  clip?: Clip;
  className?: string;
};

/** Marks a rule intersection. The parent must be positioned. */
function GridCrossing({ at, clip, className }: GridCrossingProps) {
  return (
    <GridStar
      className={cn(
        "absolute z-20 text-primary",
        crossingPosition[at],
        clip && clipPath[clip],
        className
      )}
    />
  );
}

export { GridCrossing };
export type { Crossing };
