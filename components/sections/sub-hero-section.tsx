import type { ReactNode } from "react";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { DotGrid } from "@/components/layout/dot-grid";
import { GridCrossing } from "@/components/layout/grid-crossing";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type SubHeroSectionProps = {
  id?: string;
  heading: ReactNode;
  subtitle?: string;
  description?: string;
  avatar?: {
    src: string;
    alt: string;
  };
  className?: string;
};

function SubHeroSection({
  id = "sub-hero-heading",
  heading,
  subtitle,
  description,
  avatar,
  className,
}: SubHeroSectionProps) {
  return (
    <section
      aria-labelledby={id}
      className={cn(
        "relative z-10 border-b border-dashed border-primary/50 bg-brand-light",
        className
      )}
    >
      <Container px={false} crossings={["bl", "br"]}>
        <div className="relative col-span-4 flex flex-col items-center px-gutter py-section-y text-center lg:col-span-12 lg:px-gutter-lg">
          <GridCrossing at="bl" clip="left" />
          <GridCrossing at="br" clip="right" />
          <DotGrid className="text-brand-dark/8" />

          {avatar ? (
            <div className="relative z-10 mb-6">
              <span
                aria-hidden
                className="absolute top-1/2 left-1/2 size-16 translate-x-[-42%] translate-y-[-58%] rotate-[-18deg] rounded-xl bg-accent-yellow"
              />
              <span className="relative block size-14 overflow-hidden rounded-full ring-2 ring-brand-light sm:size-16">
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                  priority
                />
              </span>
            </div>
          ) : null}

          <div className="relative z-10 flex flex-col items-center gap-2">
            <Heading
              id={id}
              role="display"
              className="max-w-3xl text-balance"
            >
              {heading}
            </Heading>

            {subtitle ? (
              <Heading as="p" role="title-lg" className="text-primary">
                {subtitle}
              </Heading>
            ) : null}
          </div>

          {description ? (
            <Text
              role="body-lg"
              tone="muted"
              className="relative z-10 mt-type-stack max-w-xl text-pretty"
            >
              {description}
            </Text>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export { SubHeroSection };
export type { SubHeroSectionProps };
