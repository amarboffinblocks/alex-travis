import Image from "next/image";

import { Container } from "@/components/layout/container";
import { GridCrossing } from "@/components/layout/grid-crossing";
import { SectionBand } from "@/components/layout/section-band";
import { Heading, Text } from "@/components/ui/typography";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "He shipped our RAG copilot from prototype to production — clear architecture, solid evals, and a UX the team actually uses.",
    name: "Priya Mehta",
    role: "Head of Product",
    company: "Northline",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
  },
  {
    quote:
      "Rare mix of fullstack depth and GenAI judgment. Deadlines stuck, APIs stayed clean, and the agent workflows held up under real traffic.",
    name: "James Ortega",
    role: "CTO",
    company: "Ledger Labs",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
  },
  {
    quote:
      "Communication was crisp and the delivery was production-grade. Our dashboard and AI features went live without the usual rework cycle.",
    name: "Aisha Khan",
    role: "Founder",
    company: "Orbit Health",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80",
  },
  {
    quote:
      "From scoping to ship, everything stayed clear. The fullstack build and AI features felt like one product — not bolted-on experiments.",
    name: "Daniel Cho",
    role: "Engineering Lead",
    company: "Studio Forge",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&h=160&q=80",
  },
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <blockquote className="relative flex h-full w-[min(88vw,22rem)] shrink-0 flex-col gap-5 border-r border-dashed border-primary/50 px-gutter py-10 sm:w-[26rem] lg:w-[28rem] lg:gap-6 lg:px-gutter-lg lg:py-12">
      <GridCrossing at="tr" clip="top" />
      <GridCrossing at="br" clip="bottom" />

      <Text role="body-md" className="text-pretty text-brand-dark">
        “{item.quote}”
      </Text>

      <footer className="mt-auto flex items-center gap-3 border-t border-dashed border-primary/30 pt-5">
        <div className="relative size-11 shrink-0 overflow-hidden rounded-full border border-dashed border-primary/40">
          <Image
            src={item.avatar}
            alt=""
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-col gap-0.5">
          <Heading as="cite" role="title-md" className="not-italic">
            {item.name}
          </Heading>
          <Text as="span" role="body-sm" tone="muted">
            {item.role}, {item.company}
          </Text>
        </div>
      </footer>
    </blockquote>
  );
}

const TestimonialsSection = () => {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="relative z-10 border-b border-dashed border-primary/50 bg-brand-light">
      <Container px={false} crossings={["tl", "tr", "bl", "br"]}>
        <SectionBand size="md" />

        <div className="relative col-span-4 flex flex-col gap-2 border-b border-dashed border-primary/50 px-gutter py-8 lg:col-span-12 lg:px-gutter-lg lg:py-10">
          <GridCrossing at="bl" clip="left" />
          <GridCrossing at="br" clip="right" />
          <Text as="span" role="label-md" tone="subtle">
            Testimonials
          </Text>
          <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <Heading role="headline-md">What collaborators say</Heading>
            <Text role="body-md" tone="muted" className="max-w-sm lg:text-right">
              Notes from product and engineering partners on delivery and
              production quality.
            </Text>
          </div>
        </div>

        <div className="relative col-span-4 overflow-hidden lg:col-span-12">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
            {loop.map((item, index) => (
              <TestimonialCard key={`${item.name}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export { TestimonialsSection };
