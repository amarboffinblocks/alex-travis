"use client";

import { Container } from "@/components/layout/container";
import { DotGrid } from "@/components/layout/dot-grid";
import { GridCrossing } from "@/components/layout/grid-crossing";
import { Button } from "@/components/ui/button";
import { TypeCycle } from "@/components/ui/type-cycle";
import { Heading, Text } from "@/components/ui/typography";

const PROFILE_IMAGE =
  "https://cdn.prod.website-files.com/68702569b799febef1f58c88/6874024ecca5623a42ccd83f_03e5e77fc0cfea4491d607a4741fadfb_Profile%2002.avif";

const ROLE_WORDS = ["Fullstack", "Generative AI"] as const;

function HeroSection() {
  return (
    <section className="relative z-10 border-b border-dashed border-primary/50 bg-brand-light">
      <Container px={false} crossings={["bl", "br"]}>
        {/* Left — copy */}
        <div className="relative col-span-4 flex flex-col justify-center gap-type-stack border-b border-dashed border-primary/50 px-gutter py-section-y lg:col-span-6 lg:border-r lg:border-b-0 lg:px-gutter-lg">
          <GridCrossing at="bl" clip="left" className="lg:hidden" />
          <GridCrossing at="br" clip="right" className="lg:hidden" />
          <GridCrossing at="tr" clip="top" className="hidden lg:block" />
          <GridCrossing at="br" clip="bottom" className="hidden lg:block" />

          <Text
            as="span"
            role="label-md"
            className="inline-flex w-fit items-center rounded-full bg-accent-yellow px-3 py-1.5"
          >
            Hi, I'm Amarjeet 👋
          </Text>

          <Heading role="display" className="max-w-xl">
            A{" "}
            <span className="text-primary">
              <TypeCycle words={ROLE_WORDS} accent />
            </span>{" "}
            developer.
          </Heading>

          <Text role="body-lg" tone="muted" className="max-w-md">
            I ship production web apps, agents, and RAG systems — built to
            scale, not just demo.
          </Text>

          <div className="mt-type-tight flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button className="rounded-md">Hire Me!</Button>
            <Button variant="outline" className="rounded-md">
              See My Portfolio
            </Button>
          </div>
        </div>

        {/* Right — visual */}
        <div className="relative col-span-4 flex items-center justify-center p-4 sm:p-10 lg:col-span-6">
          <DotGrid />
          <div className="relative mx-auto max-h-[500px] w-full max-w-[480px] overflow-hidden rounded-4xl">
            <img
              src={PROFILE_IMAGE}
              alt="Amarjeet"
              className="h-full w-full object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export { HeroSection };
