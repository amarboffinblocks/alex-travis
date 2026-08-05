import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva("font-heading text-balance text-brand-dark", {
  variants: {
    role: {
      display: "text-display",
      "headline-lg": "text-headline-lg",
      "headline-md": "text-headline-md",
      "headline-sm": "text-headline-sm",
      "title-lg": "text-title-lg",
      "title-md": "text-title-md",
    },
  },
  defaultVariants: {
    role: "headline-lg",
  },
});

type HeadingRole = NonNullable<VariantProps<typeof headingVariants>["role"]>;

const defaultHeadingTag: Record<HeadingRole, ElementType> = {
  display: "h1",
  "headline-lg": "h1",
  "headline-md": "h2",
  "headline-sm": "h3",
  "title-lg": "h3",
  "title-md": "h4",
};

type HeadingProps = ComponentPropsWithoutRef<"h1"> &
  VariantProps<typeof headingVariants> & {
    as?: ElementType;
  };

function Heading({
  className,
  role = "headline-lg",
  as,
  ...props
}: HeadingProps) {
  const resolvedRole = role ?? "headline-lg";
  const Comp = as ?? defaultHeadingTag[resolvedRole];

  return (
    <Comp
      className={cn(headingVariants({ role: resolvedRole }), className)}
      {...props}
    />
  );
}

const textVariants = cva("font-sans text-pretty", {
  variants: {
    role: {
      "body-lg": "text-body-lg",
      "body-md": "text-body-md",
      "body-sm": "text-body-sm",
      "label-lg": "text-label-lg",
      "label-md": "text-label-md",
      "label-sm": "text-label-sm",
    },
    tone: {
      default: "text-brand-dark",
      muted: "text-brand-dark/65",
      subtle: "text-brand-dark/50",
      inverse: "text-white",
    },
  },
  defaultVariants: {
    role: "body-md",
    tone: "default",
  },
});

type TextProps = ComponentPropsWithoutRef<"p"> &
  VariantProps<typeof textVariants> & {
    as?: ElementType;
  };

function Text({
  className,
  role = "body-md",
  tone = "default",
  as: Comp = "p",
  ...props
}: TextProps) {
  return (
    <Comp
      className={cn(textVariants({ role, tone }), className)}
      {...props}
    />
  );
}

export { Heading, Text, headingVariants, textVariants };
