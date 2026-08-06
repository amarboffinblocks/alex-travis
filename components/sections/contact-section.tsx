import { ArrowUpRight, Mail } from "lucide-react";

import { Container } from "@/components/layout/container";
import { DotGrid } from "@/components/layout/dot-grid";
import { GridCrossing } from "@/components/layout/grid-crossing";
import { SectionBand } from "@/components/layout/section-band";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";

const LINKS = [
  { label: "Email", href: "mailto:hello@example.com", value: "hello@example.com" },
  { label: "LinkedIn", href: "https://linkedin.com", value: "linkedin.com/in/you" },
  { label: "GitHub", href: "https://github.com", value: "github.com/you" },
  { label: "X / Twitter", href: "https://x.com", value: "x.com/you" },
] as const;

const ContactSection = () => {
  return (
    <section className="relative z-10 border-b border-dashed border-primary/50 bg-brand-light">
      <Container px={false} crossings={["tl", "tr", "bl", "br"]}>
        <SectionBand size="md" />

        {/* Intro + CTA */}
        <div className="relative col-span-4 flex flex-col gap-type-stack border-b border-dashed border-primary/50 px-gutter py-section-y lg:col-span-7 lg:border-r lg:px-gutter-lg">
          <GridCrossing at="br" clip="right" className="lg:hidden" />
          <GridCrossing at="br" clip="bottom" className="hidden lg:block" />
          <GridCrossing at="tr" clip="top" className="hidden lg:block" />

          <Text as="span" role="label-md" tone="subtle">
            Contact
          </Text>
          <Heading role="headline-md" className="max-w-lg">
            Let’s build something that ships
          </Heading>
          <Text role="body-md" tone="muted" className="max-w-md">
            Open to fullstack product work, generative AI systems, and
            long-term collaboration. Tell me what you’re building.
          </Text>

          <div className="mt-type-tight flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              nativeButton={false}
              render={<a href="mailto:hello@example.com" />}
              className="rounded-md"
            >
              <Mail data-icon="inline-start" className="size-4" />
              Email me
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href="#selected-work" />}
              className="rounded-md"
            >
              See my work
              <ArrowUpRight data-icon="inline-end" className="size-4" />
            </Button>
          </div>
        </div>

        {/* Links panel — rows share column height so the last item doesn't leave a gap */}
        <div className="relative col-span-4 flex overflow-hidden border-b border-dashed border-primary/50 lg:col-span-5 lg:border-b-0">
          <DotGrid className="text-brand-dark/12" />
          <ul className="relative flex w-full flex-1 flex-col">
            {LINKS.map((link, index) => {
              const isLast = index === LINKS.length - 1;

              return (
                <li
                  key={link.label}
                  className={
                    isLast
                      ? "flex flex-1"
                      : "flex flex-1 border-b border-dashed border-primary/50"
                  }
                >
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      link.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group flex w-full flex-1 items-center justify-between gap-4 px-gutter py-5 transition-colors hover:bg-brand-dark/5 lg:px-gutter-lg lg:py-6"
                  >
                    <div className="flex flex-col gap-0.5">
                      <Text as="span" role="label-sm" tone="subtle">
                        {link.label}
                      </Text>
                      <Text as="span" role="body-sm" className="text-brand-dark">
                        {link.value}
                      </Text>
                    </div>
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 shrink-0 text-primary transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export { ContactSection };
