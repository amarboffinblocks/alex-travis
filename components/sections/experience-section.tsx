import { Container } from "@/components/layout/container";
import { GridCrossing } from "@/components/layout/grid-crossing";
import { SectionBand } from "@/components/layout/section-band";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

const EXPERIENCES: Experience[] = [
  {
    role: "Fullstack & Generative AI Engineer",
    company: "Independent / Freelance",
    period: "2024 — Present",
    location: "Remote",
    summary:
      "Shipping production web products and GenAI systems — agents, RAG, and AI-native features.",
    highlights: [
      "Built RAG copilots with evals and citation flows",
      "Delivered multi-tenant SaaS with auth and billing",
      "Integrated LLM agents into real product workflows",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "Product Studio",
    period: "2022 — 2024",
    location: "Hybrid",
    summary:
      "Owned end-to-end features across Next.js frontends, Node APIs, and Postgres data layers.",
    highlights: [
      "Led realtime dashboards and WebSocket pipelines",
      "Improved API performance and deployment reliability",
      "Partnered with design to ship production UX",
    ],
  },
  {
    role: "Software Engineer",
    company: "Startup Team",
    period: "2020 — 2022",
    location: "On-site",
    summary:
      "Built core product surfaces, internal tools, and early AI experiments for growth teams.",
    highlights: [
      "Shipped auth, admin, and reporting modules",
      "Automated ops workflows with custom tooling",
      "Established reusable component patterns",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="relative z-10 border-b border-dashed border-primary/50 bg-brand-light">
      <Container px={false} crossings={["tl", "tr", "bl", "br"]}>
        <SectionBand size="md" />

        <div className="relative col-span-4 flex flex-col gap-2 border-b border-dashed border-primary/50 px-gutter py-8 lg:col-span-12 lg:px-gutter-lg lg:py-10">
          <GridCrossing at="bl" clip="left" />
          <GridCrossing at="br" clip="right" />
          <Text as="span" role="label-md" tone="subtle">
            Experience
          </Text>
          <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <Heading role="headline-md" className="max-w-md">
              Roles where I shipped real products
            </Heading>
            <Text role="body-md" tone="muted" className="max-w-sm lg:text-right">
              From fullstack delivery to generative AI systems — focused on
              production outcomes.
            </Text>
          </div>
        </div>

        {EXPERIENCES.map((job, index) => {
          const isLast = index === EXPERIENCES.length - 1;

          return (
            <article
              key={`${job.company}-${job.period}`}
              className={cn(
                "relative col-span-4 grid grid-cols-4 gap-gutter border-dashed border-primary/50 px-gutter py-10 lg:col-span-12 lg:grid-cols-12 lg:gap-gutter-lg lg:px-gutter-lg lg:py-12",
                !isLast && "border-b"
              )}
            >
              {!isLast && (
                <>
                  <GridCrossing at="bl" clip="left" />
                  <GridCrossing at="br" clip="right" />
                </>
              )}

              {/* Meta — period / location */}
              <div className="col-span-4 flex flex-col gap-1 lg:col-span-3">
                <Text as="span" role="label-md" className="text-brand-dark">
                  {job.period}
                </Text>
                <Text as="span" role="body-sm" tone="muted">
                  {job.location}
                </Text>
              </div>

              {/* Role + company + summary */}
              <div className="col-span-4 flex flex-col gap-3 lg:col-span-5">
                <div className="flex flex-col gap-1">
                  <Heading as="h3" role="title-lg">
                    {job.role}
                  </Heading>
                  <Text role="body-sm" tone="muted">
                    {job.company}
                  </Text>
                </div>
                <Text role="body-sm" tone="muted" className="max-w-md">
                  {job.summary}
                </Text>
              </div>

              {/* Highlights */}
              <ul className="col-span-4 flex flex-col gap-2.5 border-t border-dashed border-primary/30 pt-5 lg:col-span-4 lg:border-t-0 lg:pt-0">
                {job.highlights.map((item) => (
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
            </article>
          );
        })}
      </Container>
    </section>
  );
};

export { ExperienceSection };
