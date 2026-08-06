import { Braces, Database, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/container";
import { GridCrossing } from "@/components/layout/grid-crossing";
import { SectionBand } from "@/components/layout/section-band";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type StackGroup = {
  title: string;
  summary: string;
  icon: typeof Braces;
  items: string[];
};

const STACK_GROUPS: StackGroup[] = [
  {
    title: "Frontend",
    summary: "Interfaces focused on speed, clarity, and scalable components.",
    icon: Braces,
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Data",
    summary: "APIs, auth, storage, and realtime services for product-scale apps.",
    icon: Database,
    items: ["Node.js", "Python", "PostgreSQL", "Redis", "WebSockets"],
  },
  {
    title: "Generative AI",
    summary: "Production-ready AI systems with retrieval, agents, and evaluation.",
    icon: Sparkles,
    items: ["OpenAI/LLMs", "RAG", "Vector Search", "Tool Calling", "Evals"],
  },
];

const TechStackSection = () => {
  return (
    <section className="relative z-10 border-b border-dashed border-primary/50 bg-brand-light">
      <Container px={false} crossings={["tl", "tr", "bl", "br"]}>
        <SectionBand size="md" />

        <div className="relative col-span-4 flex flex-col gap-2 border-b border-dashed border-primary/50 px-gutter py-8 lg:col-span-12 lg:px-gutter-lg lg:py-10">
          <GridCrossing at="bl" clip="left" />
          <GridCrossing at="br" clip="right" />
          <Text as="span" role="label-md" tone="subtle">
            Tech stack
          </Text>
          <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <Heading role="headline-md" className="max-w-md">
              Tools I use to build and ship
            </Heading>
            <Text role="body-md" tone="muted" className="max-w-sm lg:text-right">
              Modern web stack, strong backend fundamentals, and practical GenAI
              tooling.
            </Text>
          </div>
        </div>

        {STACK_GROUPS.map((group, index) => {
          const isLast = index === STACK_GROUPS.length - 1;

          return (
            <div
              key={group.title}
              className={cn(
                "relative col-span-4 flex flex-col gap-5 border-dashed border-primary/50 px-gutter py-10 lg:col-span-4 lg:gap-6 lg:px-gutter-lg lg:py-12",
                !isLast && "border-b lg:border-b-0 lg:border-r"
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
                  <GridCrossing at="bl" clip="left" className="lg:hidden" />
                  <GridCrossing at="br" clip="right" className="lg:hidden" />
                </>
              )}

              <div className="flex items-start gap-3">
                <span className="inline-flex size-10 items-center justify-center text-primary">
                  <group.icon aria-hidden className="size-5 stroke-[1.8]" />
                </span>
                <div className="flex flex-col gap-1">
                  <Heading as="h3" role="title-lg">
                    {group.title}
                  </Heading>
                  <Text role="body-sm" tone="muted" className="max-w-sm">
                    {group.summary}
                  </Text>
                </div>
              </div>

              <ul className="mt-auto flex flex-wrap gap-2 border-t border-dashed border-primary/30 pt-5">
                {group.items.map((item) => (
                  <li key={item}>
                    <Text
                      as="span"
                      role="label-sm"
                      className="inline-flex rounded-md bg-brand-dark/5 px-2.5 py-1 text-brand-dark/75"
                    >
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

export { TechStackSection };
