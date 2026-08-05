import type { ComponentProps } from "react";

import { GridCrossing, type Crossing } from "@/components/layout/grid-crossing";
import { cn } from "@/lib/utils";

type GridFrameProps = ComponentProps<"div"> & {
  stars?: Crossing[];
};

function GridFrame({
  className,
  children,
  stars = ["tl", "tr", "bl", "br"],
  ...props
}: GridFrameProps) {
  return (
    <div
      data-slot="grid-frame"
      className={cn("relative border border-brand-dark", className)}
      {...props}
    >
      {stars.map((star) => (
        <GridCrossing key={star} at={star} className="text-brand-dark" />
      ))}
      {children}
    </div>
  );
}

export { GridFrame };
