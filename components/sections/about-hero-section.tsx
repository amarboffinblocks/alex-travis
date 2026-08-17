import Image from "next/image";

import { Container } from "@/components/layout/container";
import { DotGrid } from "@/components/layout/dot-grid";
import { GridCrossing } from "@/components/layout/grid-crossing";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { EMAIL, PROFILE_IMAGE } from "@/lib/site-nav";
import { cn } from "@/lib/utils";

const FACTS = [
  { label: "Based in", value: "Remote" },
  { label: "Focus", value: "Fullstack + GenAI" },
  { label: "Mode", value: "Shipping, not demos" },
] as const;

function AboutHeroSection() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative z-10 border-b border-dashed border-primary/50 bg-brand-light"
    >
      <Container px={false} crossings={["tl", "tr", "bl", "br"]}>
        <div className="relative col-span-4 flex items-center justify-between gap-4 border-b border-dashed border-primary/50 px-gutter py-5 lg:col-span-12 lg:px-gutter-lg">
          <GridCrossing at="bl" clip="left" />
          <GridCrossing at="br" clip="right" />

          <Text
            as="span"
            role="label-md"
            className="inline-flex w-fit items-center rounded-full bg-accent-lime px-3 py-1.5"
          >
            About
          </Text>
          <Text as="span" role="label-sm" tone="subtle">
            01 — Profile
          </Text>
        </div>

        <div className="relative col-span-4 flex flex-col gap-3 border-b border-dashed border-primary/50 px-gutter py-10 lg:col-span-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:px-gutter-lg lg:py-14">
          <GridCrossing at="bl" clip="left" />
          <GridCrossing at="br" clip="right" />

          <Heading
            id="about-hero-heading"
            role="display"
            className="max-w-xl"
          >
            About
          </Heading>
          <Text role="body-lg" tone="muted" className="max-w-sm lg:pb-1 lg:text-right">
            The person behind the products — fullstack apps and generative AI
            systems built for production.
          </Text>
        </div>

        <div className="relative col-span-4 border-b border-dashed border-primary/50 px-gutter py-10 lg:col-span-5 lg:border-r lg:border-b-0 lg:px-gutter-lg lg:py-section-y">
          <GridCrossing at="bl" clip="left" className="lg:hidden" />
          <GridCrossing at="br" className="lg:hidden" />
          <GridCrossing at="tr" clip="top" className="hidden lg:block" />
          <GridCrossing at="br" clip="bottom" className="hidden lg:block" />

          <DotGrid className="text-brand-dark/10" />

          <div className="relative mx-auto w-full max-w-80">
            <span
              aria-hidden
              className="absolute -top-5 -left-4 size-28 rotate-[-14deg] rounded-2xl bg-accent-lime"
            />
            <span
              aria-hidden
              className="absolute -right-3 bottom-16 size-14 rotate-16 rounded-xl bg-accent-lavender"
            />

            <div className="relative overflow-hidden rounded-2xl border border-dashed border-primary/40 bg-brand-light">
              <div className="relative aspect-4/5 w-full">
                <Image
                  src={PROFILE_IMAGE}
                  alt="Amarjeet"
                  fill
                  sizes="(max-width: 1024px) 80vw, 320px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            <Text as="p" role="label-sm" tone="muted" className="mt-4 max-w-64">
              Currently building production AI into real product workflows.
            </Text>
          </div>
        </div>

        <div className="relative col-span-4 flex flex-col justify-center gap-type-stack px-gutter py-10 lg:col-span-7 lg:px-gutter-lg lg:py-section-y">
          <Text as="span" role="label-sm" tone="subtle">
            Hello
          </Text>
          <Heading as="p" role="headline-md" className="max-w-lg">
            I&apos;m Amarjeet
          </Heading>
          <Text as="p" role="title-lg" className="max-w-md text-primary">
            Fullstack &amp; generative AI developer
          </Text>
          <Text role="body-lg" tone="muted" className="max-w-md">
            I ship web apps, agents, and RAG systems that hold up in production
            — auth, data, evals, cost, and the last mile of UX.
          </Text>

          <Button
            nativeButton={false}
            render={<a href={`mailto:${EMAIL}`} />}
            className="mt-type-tight w-fit rounded-md"
          >
            Let&apos;s work together
          </Button>
        </div>

        {FACTS.map((fact, index) => {
          const isLast = index === FACTS.length - 1;

          return (
            <div
              key={fact.label}
              className={cn(
                "relative col-span-4 flex flex-col gap-1 border-t border-dashed border-primary/50 px-gutter py-6 lg:col-span-4 lg:px-gutter-lg",
                !isLast && "lg:border-r"
              )}
            >
              {!isLast && (
                <>
                  <GridCrossing at="tr" clip="top" className="hidden lg:block" />
                  <GridCrossing
                    at="br"
                    clip="bottom"
                    className="hidden lg:block"
                  />
                </>
              )}
              <Text as="span" role="label-sm" tone="subtle">
                {fact.label}
              </Text>
              <Text role="title-md">{fact.value}</Text>
            </div>
          );
        })}
      </Container>
    </section>
  );
}

export { AboutHeroSection };
