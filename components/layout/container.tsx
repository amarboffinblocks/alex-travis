import type { ComponentProps } from "react";

import { GridCrossing, type Crossing } from "@/components/layout/grid-crossing";
import { cn } from "@/lib/utils";

type ContainerProps = ComponentProps<"div"> & {
  children: React.ReactNode;
  px?: boolean;
  crossings?: Crossing[];
};

function Container({
  className,
  px = true,
  crossings = [],
  children,
  ...props
}: ContainerProps) {
  return (
    <div className={cn("px-4 relative")}>
      <div className={cn("mx-auto relative grid w-full max-w-site grid-cols-4 ",
        "lg:grid-cols-12 ", " border-l border-r border-dashed border-primary/50", px && " px-gutter lg:px-gutter-lg", className)} {...props}>
        {children}

        {crossings.map((crossing) => (
          <GridCrossing key={crossing} at={crossing} />
        ))}
      </div>
    </div>
  );
}

export { Container };
