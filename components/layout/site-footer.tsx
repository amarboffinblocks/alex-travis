"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";

import { Container } from "@/components/layout/container";
import { DotGrid } from "@/components/layout/dot-grid";
import { SectionBand } from "@/components/layout/section-band";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const PROFILE_IMAGE =
  "https://cdn.prod.website-files.com/68702569b799febef1f58c88/6874024ecca5623a42ccd83f_03e5e77fc0cfea4491d607a4741fadfb_Profile%2002.avif";

const EMAIL = "hello@example.com";

const PAGE_LINKS = [
  { label: "Work", href: "#selected-work" },
  { label: "What I build", href: "#what-i-build" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X / Twitter", href: "https://x.com" },
] as const;

const cellBorder = "border-dashed border-white/25";
const linkClass =
  "text-body-sm text-white/70 transition-colors hover:text-white";

function SiteFooter() {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }, []);

  return (
    <footer className="relative z-10 bg-primary">
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
              size="lg"
              className="w-fit rounded-md border-transparent bg-linear-to-r from-accent-lavender via-accent-orange to-accent-yellow text-brand-dark hover:opacity-90"
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

          <div className="flex flex-col gap-2 border-t border-dashed border-white/20 pt-5">
            <Text as="span" role="label-sm" className="text-white/50">
              Email me
            </Text>
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="link"
                nativeButton={false}
                render={<a href={`mailto:${EMAIL}`} />}
                className="h-auto px-0 text-body-sm text-white hover:text-white/80"
              >
                {EMAIL}
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                aria-label={copied ? "Email copied" : "Copy email"}
                onClick={copyEmail}
                className="rounded-md text-white/60 hover:bg-white/10 hover:text-white"
              >
                {copied ? (
                  <Check className="size-3.5 text-accent-lime" />
                ) : (
                  <Copy className="size-3.5" />
                )}
              </Button>
            </div>
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
            {PAGE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + dots */}
        <div
          className={cn(
            "relative col-span-2 flex flex-col border-b lg:col-span-4",
            cellBorder
          )}
        >
          <div className="flex flex-col gap-3 px-gutter py-8 lg:px-gutter-lg lg:py-10">
            <Text as="span" role="label-sm" className="text-white/50">
              Social
            </Text>
            <ul className="flex flex-col gap-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      linkClass,
                      "group inline-flex items-center gap-1.5"
                    )}
                  >
                    {link.label}
                    <ArrowUpRight
                      aria-hidden
                      className="size-3.5 text-white/50 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    />
                  </a>
                </li>
              ))}
            </ul>
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
