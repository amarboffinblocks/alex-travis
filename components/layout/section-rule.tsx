import type { ComponentProps } from "react";

import { GridStar } from "@/components/icons/grid-star";
import { cn } from "@/lib/utils";

type SectionRuleProps = ComponentProps<"div"> & {
  withStars?: boolean;
};

/** Full-width top border; stars on the content rail only (no outer L/R box). */
function SectionRule({ className, withStars = true, ...props }: SectionRuleProps) {
  return (
    <div
      data-slot="section-rule"
      className={cn("relative border-t border-brand-dark", className)}
      {...props}
    >
      {withStars ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-0 max-w-site px-gutter md:px-gutter-lg">
          <GridStar className="absolute top-0 left-0 z-20 -translate-x-1/2 -translate-y-1/2" />
          <GridStar className="absolute top-0 right-0 z-20 translate-x-1/2 -translate-y-1/2" />
        </div>
      ) : null}
    </div>
  );
}

export { SectionRule };
