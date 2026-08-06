import type { LucideIcon } from "lucide-react";
import { Bot, Code2, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/container";
import { GridCrossing } from "@/components/layout/grid-crossing";
import { SectionBand } from "@/components/layout/section-band";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type Capability = {
  title: string;
  description: string;
  badge: string;
  badgeTone: "lime" | "yellow" | "lavender";
  icon: LucideIcon;
  items: string[];
};

const CAPABILITIES: Capability[] = [
  {
    title: "Fullstack Web Apps",
    description:
      "End-to-end products — UI, APIs, auth, and data — built to scale and stay maintainable.",
    badge: "Next.js",
    badgeTone: "lime",
    icon: Code2,
    items: [
      "APIs & Auth",
      "Dashboards",
      "Postgres",
      "Realtime",
      "CI/CD",
      "Performance",
    ],
  },
  {
    title: "Generative AI Systems",
    description:
      "Agents, RAG, and LLM workflows wired into real products with evals, cost, and latency in mind.",
    badge: "LLMs",
    badgeTone: "lavender",
    icon: Sparkles,
    items: [
      "RAG pipelines",
      "Agents",
      "Evals",
      "Tool calling",
      "Prompt ops",
      "Cost control",
    ],
  },
  {
    title: "AI-native Product Features",
    description:
      "Copilots, chat, and automation that feel native — not bolted-on chat widgets.",
    badge: "Agents",
    badgeTone: "yellow",
    icon: Bot,
    items: [
      "Streaming UX",
      "Copilots",
      "Workflows",
      "Context memory",
      "Human-in-loop",
      "Observability",
    ],
  },
];

const badgeClass: Record<Capability["badgeTone"], string> = {
  lime: "bg-accent-lime text-brand-dark",
  yellow: "bg-accent-yellow text-brand-dark",
  lavender: "bg-accent-lavender text-brand-dark",
};

const WhatIBuildSection = () => {
  return (
    <section className="relative z-10 border-b border-dashed border-primary/50 bg-brand-light">
      <Container px={false} crossings={["tl", "tr", "bl", "br"]}>
        <SectionBand size="md" />

        {/* Intro — single band, compact */}
        <div className="relative col-span-4 flex flex-col gap-2 border-b border-dashed border-primary/50 px-gutter py-8 lg:col-span-12 lg:px-gutter-lg lg:py-10">
          {/* Top edge of the cards row: intro rule meets the container rails. */}
          <GridCrossing at="bl" clip="left" />
          <GridCrossing at="br" clip="right" />
          <Text as="span" role="label-md" tone="subtle">
            What I build
          </Text>
          <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <Heading role="headline-md" className="max-w-md">
              Fullstack products & generative AI
            </Heading>
            <Text role="body-md" tone="muted" className="max-w-sm lg:text-right">
              Web apps, agents, and RAG pipelines — built for production, not
              demos.
            </Text>
          </div>
        </div>

        {/* Capability cards */}
        {CAPABILITIES.map((capability, index) => {
          const Icon = capability.icon;
          const isLast = index === CAPABILITIES.length - 1;

          return (
            <div
              key={capability.title}
              className={cn(
                "relative col-span-4 flex flex-col gap-5 border-dashed border-primary/50 px-gutter py-10 lg:col-span-4 lg:gap-6 lg:px-gutter-lg lg:py-12",
                !isLast && "border-b lg:border-b-0 lg:border-r"
              )}
            >
              {!isLast && (
                <>
                  <GridCrossing
                    at="tr"
                    clip="top"
                    className="hidden lg:block"
                  />
                  <GridCrossing
                    at="br"
                    clip="bottom"
                    className="hidden lg:block"
                  />
                  <GridCrossing
                    at="bl"
                    clip="left"
                    className="lg:hidden"
                  />
                  <GridCrossing
                    at="br"
                    clip="right"
                    className="lg:hidden"
                  />
                </>
              )}

              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex size-11 items-center justify-center text-primary">
                  <Icon aria-hidden className="size-6 stroke-[1.5]" />
                </span>
                <Text
                  as="span"
                  role="label-sm"
                  className={cn(
                    "inline-flex shrink-0 items-center rounded-md px-2.5 py-1",
                    badgeClass[capability.badgeTone]
                  )}
                >
                  {capability.badge}
                </Text>
              </div>

              <div className="flex flex-col gap-2.5">
                <Heading as="h3" role="title-lg">
                  {capability.title}
                </Heading>
                <Text role="body-sm" tone="muted" className="max-w-sm">
                  {capability.description}
                </Text>
              </div>

              <ul className="mt-auto grid grid-cols-2 gap-x-5 gap-y-2.5 border-t border-dashed border-primary/30 pt-5">
                {capability.items.map((item) => (
                  <li key={item}>
                    <Text
                      as="span"
                      role="body-sm"
                      tone="muted"
                      className="inline-flex items-baseline gap-1.5"
                    >
                      <span aria-hidden className="text-primary">
                        ↳
                      </span>
                      {item}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export { WhatIBuildSection };
