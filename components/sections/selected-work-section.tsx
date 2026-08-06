import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { DotGrid } from "@/components/layout/dot-grid";
import { GridCrossing } from "@/components/layout/grid-crossing";
import { SectionBand } from "@/components/layout/section-band";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  category: string;
  year: string;
  outcome: string;
  stack: string[];
  tone: "lime" | "lavender" | "yellow" | "orange";
};

const PROJECTS: Project[] = [
  {
    title: "Atlas Copilot",
    category: "Generative AI",
    year: "2025",
    outcome:
      "RAG-powered knowledge assistant with evals, citations, and streaming chat in production.",
    stack: ["Next.js", "Python", "RAG", "Postgres"],
    tone: "lavender",
  },
  {
    title: "Ledger Cloud",
    category: "Fullstack Product",
    year: "2025",
    outcome:
      "Multi-tenant SaaS with auth, billing, and realtime dashboards shipped end-to-end.",
    stack: ["Next.js", "Node", "Stripe", "Postgres"],
    tone: "lime",
  },
  {
    title: "Orbit Agents",
    category: "AI Systems",
    year: "2024",
    outcome:
      "Multi-agent workflows with tool calling, human-in-the-loop, and cost controls.",
    stack: ["Agents", "LLMs", "Queues", "Observability"],
    tone: "yellow",
  },
  {
    title: "Pulse Board",
    category: "Fullstack Product",
    year: "2024",
    outcome:
      "Realtime ops board for teams — live updates, roles, and API-first architecture.",
    stack: ["React", "WebSockets", "Redis", "API"],
    tone: "orange",
  },
];

const toneClass: Record<Project["tone"], string> = {
  lime: "bg-accent-lime/40",
  lavender: "bg-accent-lavender/40",
  yellow: "bg-accent-yellow/40",
  orange: "bg-accent-orange/30",
};

const SelectedWorkSection = () => {
  return (
    <section className="relative z-10 border-b border-dashed border-primary/50 bg-brand-light">
      <Container px={false} crossings={["tl", "tr", "bl", "br"]}>
        <SectionBand size="md" />

        <div className="relative col-span-4 flex flex-col gap-4 border-b border-dashed border-primary/50 px-gutter py-8 lg:col-span-12 lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:px-gutter-lg lg:py-10">
          <GridCrossing at="bl" clip="left" />
          <GridCrossing at="br" clip="right" />

          <div className="flex flex-col gap-2">
            <Text as="span" role="label-md" tone="subtle">
              Selected work
            </Text>
            <Heading role="headline-md" className="max-w-md">
              Projects shipped to production
            </Heading>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:items-end">
            <Text role="body-md" tone="muted" className="max-w-xs lg:text-right">
              A short list of fullstack and generative AI work — problem,
              build, and outcome.
            </Text>
            <Button variant="outline" size="sm" className="w-fit rounded-md">
              View all
              <ArrowUpRight data-icon="inline-end" className="size-4" />
            </Button>
          </div>
        </div>

        {PROJECTS.map((project, index) => {
          const isLeftCol = index % 2 === 0;
          const isTopRow = index < 2;
          const isLast = index === PROJECTS.length - 1;

          return (
            <article
              key={project.title}
              className={cn(
                "relative col-span-4 flex flex-col gap-5 border-dashed border-primary/50 px-gutter py-10 lg:col-span-6 lg:gap-6 lg:px-gutter-lg lg:py-12",
                isLeftCol && "lg:border-r",
                isTopRow && "lg:border-b",
                !isLast && "max-lg:border-b"
              )}
            >
              {/* Vertical divider (desktop) — owned by left column */}
              {isLeftCol && isTopRow && (
                <>
                  <GridCrossing at="tr" className="hidden lg:block" />
                  <GridCrossing at="br" className="hidden lg:block" />
                </>
              )}
              {isLeftCol && !isTopRow && (
                <GridCrossing
                  at="br"
                  clip="bottom"
                  className="hidden lg:block"
                />
              )}

              {/* Row divider meets outer rails (desktop) */}
              {isTopRow && isLeftCol && (
                <GridCrossing
                  at="bl"
                  clip="left"
                  className="hidden lg:block"
                />
              )}
              {isTopRow && !isLeftCol && (
                <GridCrossing
                  at="br"
                  clip="right"
                  className="hidden lg:block"
                />
              )}

              {/* Mobile stacked row ends */}
              {!isLast && (
                <>
                  <GridCrossing at="bl" clip="left" className="lg:hidden" />
                  <GridCrossing at="br" clip="right" className="lg:hidden" />
                </>
              )}

              <div
                className={cn(
                  "relative aspect-[16/10] overflow-hidden rounded-2xl",
                  toneClass[project.tone]
                )}
              >
                <DotGrid className="text-brand-dark/20" />
                <div className="absolute inset-0 flex items-end justify-between p-4 sm:p-5">
                  <Text as="span" role="label-sm" tone="default">
                    {project.category}
                  </Text>
                  <Text as="span" role="label-sm" tone="subtle">
                    {project.year}
                  </Text>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-3">
                  <Heading as="h3" role="title-lg">
                    {project.title}
                  </Heading>
                  <ArrowUpRight
                    aria-hidden
                    className="mt-1 size-5 shrink-0 text-primary"
                  />
                </div>
                <Text role="body-sm" tone="muted" className="max-w-md">
                  {project.outcome}
                </Text>
              </div>

              <ul className="mt-auto flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li key={item}>
                    <Text
                      as="span"
                      role="label-sm"
                      className="inline-flex rounded-md border border-dashed border-primary/40 px-2 py-1 text-brand-dark/70"
                    >
                      {item}
                    </Text>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </Container>
    </section>
  );
};

export { SelectedWorkSection };
