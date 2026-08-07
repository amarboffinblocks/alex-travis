import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons/social-icons";
import { Container } from "@/components/layout/container";
import { DotGrid } from "@/components/layout/dot-grid";
import { SectionBand } from "@/components/layout/section-band";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import {
  EMAIL,
  NAV_LINKS,
  PHONE,
  PHONE_HREF,
  PROFILE_IMAGE,
  SOCIAL_LINKS,
} from "@/lib/site-nav";
import { cn } from "@/lib/utils";

const SOCIAL_ICONS = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  "X / Twitter": XIcon,
} as const;

const cellBorder = "border-dashed border-white/25";
const linkClass =
  "text-body-sm text-white/70 transition-colors hover:text-white";

function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative z-10 bg-primary">
      <Container px={false} className="border-white/25">
        <SectionBand
          size="md"
          withCrossings={false}
          className="border-white/25 [&_[data-slot=dot-grid]]:text-white/15"
        />

        {/* Bio / CTA */}
        <div
          className={cn(
            "relative col-span-4 flex flex-col gap-type-stack border-b px-gutter py-8 lg:col-span-5 lg:border-r lg:px-gutter-lg lg:py-10",
            cellBorder
          )}
        >
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative size-12 shrink-0 overflow-hidden rounded-md border border-dashed border-white/30">
              <Image
                src={PROFILE_IMAGE}
                alt=""
                fill
                sizes="48px"
                className="object-cover object-top"
              />
            </div>
            <Text
              as="span"
              role="label-md"
              className="inline-flex items-center gap-2 rounded-full border border-dashed border-white/30 bg-white/10 px-3 py-1.5 text-white"
            >
              <span className="size-1.5 rounded-full bg-accent-lime" />
              Available for work
            </Text>
          </div>

          <Text role="body-md" className="max-w-sm text-pretty text-white/80">
            Fullstack developer & generative AI engineer — crafting production
            web apps, agents, and RAG systems.
          </Text>

          <div className="mt-type-tight flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              nativeButton={false}
              render={<a href={`mailto:${EMAIL}`} />}
              className="w-fit rounded-md"
              variant={"secondary"}
            >
              Hire Me!
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href="#selected-work" />}
              className="w-fit rounded-md border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              See my work
              <ArrowUpRight data-icon="inline-end" className="size-4" />
            </Button>
          </div>
        </div>

        {/* Pages */}
        <div
          className={cn(
            "relative col-span-2 flex flex-col gap-3 border-b px-gutter py-8 lg:col-span-3 lg:border-r lg:px-gutter-lg lg:py-10",
            cellBorder
          )}
        >
          <Text as="span" role="label-sm" className="text-white/50">
            Pages
          </Text>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + social */}
        <div
          className={cn(
            "relative col-span-2 flex flex-col border-b lg:col-span-4",
            cellBorder
          )}
        >
          <div className="flex flex-col gap-6 px-gutter py-8 lg:px-gutter-lg lg:py-10">
            <div className="flex flex-col gap-3">
              <Text as="span" role="label-sm" className="text-white/50">
                Contact
              </Text>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className={cn(
                      linkClass,
                      "group inline-flex items-center gap-2.5"
                    )}
                  >
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-dashed border-white/25 bg-white/5 text-white/70 transition-colors group-hover:border-white/40 group-hover:text-white">
                      <Mail className="size-3.5" aria-hidden />
                    </span>
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={PHONE_HREF}
                    className={cn(
                      linkClass,
                      "group inline-flex items-center gap-2.5"
                    )}
                  >
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-dashed border-white/25 bg-white/5 text-white/70 transition-colors group-hover:border-white/40 group-hover:text-white">
                      <Phone className="size-3.5" aria-hidden />
                    </span>
                    {PHONE}
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <Text as="span" role="label-sm" className="text-white/50">
                Social
              </Text>
              <ul className="flex flex-wrap items-center gap-2">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = SOCIAL_ICONS[link.label];
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="inline-flex size-10 items-center justify-center rounded-md border border-dashed border-white/25 bg-white/5 text-white/70 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
                      >
                        <Icon className="size-4" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="relative mt-auto hidden min-h-24 flex-1 overflow-hidden border-t border-dashed border-white/20 lg:block">
            <DotGrid className="text-white/15" />
          </div>
        </div>

        {/* Large brand mark */}
        <div
          className={cn(
            "relative col-span-4 overflow-hidden border-b px-gutter py-8 lg:col-span-12 lg:px-gutter-lg lg:py-10",
            cellBorder
          )}
        >
          <Heading
            as="p"
            role="display"
            className="truncate text-[clamp(3rem,12vw,8rem)] leading-none text-white/15"
          >
            Am.
          </Heading>
        </div>

        {/* Sub-footer */}
        <div className="relative col-span-4 flex flex-col gap-2 px-gutter py-5 sm:flex-row sm:items-center sm:justify-between lg:col-span-12 lg:px-gutter-lg">
          <Text as="span" role="body-sm" className="text-white/55">
            © {year} Am. All rights reserved.
          </Text>
          <Text as="span" role="body-sm" className="text-white/40">
            Built with Next.js
          </Text>
        </div>
      </Container>
    </footer>
  );
}

export { SiteFooter };
