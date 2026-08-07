import { ArrowUpRight } from "lucide-react";

import { ProjectCard } from "@/components/cards/project-card";
import { Container } from "@/components/layout/container";
import { GridCrossing } from "@/components/layout/grid-crossing";
import { SectionBand } from "@/components/layout/section-band";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    title: "Atlas Copilot",
    slug: "atlas-copilot",
    category: "Generative AI",
    year: "2025",
    outcome:
      "RAG-powered knowledge assistant with evals, citations, and streaming chat in production.",
    stack: ["Next.js", "Python", "RAG", "Postgres"],
    image:
      "https://cdn.prod.website-files.com/687679789a6a882bd656624c/687941bcfc5121a9a165cc08_Work%20Image%2008.avif",
    imageAlt: "Atlas Copilot project preview",
  },
  {
    title: "Ledger Cloud",
    slug: "ledger-cloud",
    category: "Fullstack Product",
    year: "2025",
    outcome:
      "Multi-tenant SaaS with auth, billing, and realtime dashboards shipped end-to-end.",
    stack: ["Next.js", "Node", "Stripe", "Postgres"],
    image:
      "https://cdn.prod.website-files.com/687679789a6a882bd656624c/6879418ca5e97d46446574b3_Work%20Image%2007.avif",
    imageAlt: "Ledger Cloud project preview",
  },
  {
    title: "Orbit Agents",
    slug: "orbit-agents",
    category: "AI Systems",
    year: "2024",
    outcome:
      "Multi-agent workflows with tool calling, human-in-the-loop, and cost controls.",
    stack: ["Agents", "LLMs", "Queues", "Observability"],
    image:
      "https://cdn.prod.website-files.com/687679789a6a882bd656624c/68794153d3bfe2542abfad5a_Work%20Image%2006.avif",
    imageAlt: "Orbit Agents project preview",
  },
  {
    title: "Pulse Board",
    slug: "pulse-board",
    category: "Fullstack Product",
    year: "2024",
    outcome:
      "Realtime ops board for teams — live updates, roles, and API-first architecture.",
    stack: ["React", "WebSockets", "Redis", "API"],
    image:
      "https://cdn.prod.website-files.com/687679789a6a882bd656624c/688b5ddc99a6f0d52b0fdedf_Project%20Image%2007.avif",
    imageAlt: "Pulse Board project preview",
  },
] as const;

const SelectedWorkSection = () => {
  return (
    <section
      id="selected-work"
      className="relative z-10 border-b border-dashed border-primary/50 bg-brand-light"
    >
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
              key={project.slug}
              className={cn(
                "relative col-span-4 border-dashed border-primary/50 px-gutter py-10 lg:col-span-6 lg:px-gutter-lg lg:py-12",
                isLeftCol && "lg:border-r",
                isTopRow && "lg:border-b",
                !isLast && "max-lg:border-b"
              )}
            >
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
              {!isLast && (
                <>
                  <GridCrossing at="bl" clip="left" className="lg:hidden" />
                  <GridCrossing at="br" clip="right" className="lg:hidden" />
                </>
              )}

              <ProjectCard {...project} />
            </article>
          );
        })}
      </Container>
    </section>
  );
};

export { SelectedWorkSection };
