"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

import { Container } from "@/components/layout/container";
import { DotGrid } from "@/components/layout/dot-grid";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Text } from "@/components/ui/typography";
import { EMAIL, NAV_LINKS, PROFILE_IMAGE } from "@/lib/site-nav";
import { cn } from "@/lib/utils";

const navLinkClass =
  "text-label-md text-brand-dark transition-colors hover:text-brand-dark/70";

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-dashed border-primary/40 bg-brand-light/95 backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <DotGrid className="text-brand-dark/10" />
        <Container
          px={false}
          className="relative flex items-center justify-between gap-4 bg-brand-light px-gutter py-3 lg:px-gutter-lg lg:py-3.5"
        >
          {/* Left — avatar + nav */}
          <div className="relative z-10 flex min-w-0 items-center gap-4 sm:gap-5">
            <Link
              href="/"
              aria-label="Home"
              className="relative shrink-0 transition-opacity hover:opacity-90"
            >
              {/* Yellow brand blob behind the avatar */}
              <span
                aria-hidden
                className="absolute top-1/2 left-1/2 size-11 -translate-x-[42%] -translate-y-[58%] rotate-[-18deg] rounded-xl bg-accent-yellow"
              />
              <span className="relative block size-10 overflow-hidden rounded-full ring-2 ring-brand-light">
                <Image
                  src={PROFILE_IMAGE}
                  alt=""
                  fill
                  sizes="40px"
                  className="object-cover object-top"
                  priority
                />
              </span>
            </Link>

            <div
              aria-hidden
              className="hidden h-6 w-px shrink-0 bg-brand-dark/15 sm:block"
            />

            <nav
              aria-label="Primary"
              className="hidden items-center gap-6 md:flex lg:gap-8"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={navLinkClass}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right — CTA + mobile menu */}
          <div className="relative z-10 flex shrink-0 items-center gap-2">
            <Button
              nativeButton={false}
              render={<a href={`mailto:${EMAIL}`} />}
              size="sm"
              className="hidden rounded-md sm:inline-flex"
            >
              Hire Me!
            </Button>

            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon-sm"
                    className="rounded-full border-brand-dark/20 md:hidden"
                    aria-label="Open menu"
                  />
                }
              >
                <Menu className="size-4" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full border-dashed border-primary/30 bg-brand-light sm:max-w-xs"
              >
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <nav aria-label="Mobile" className="flex flex-col gap-1 pt-12">
                  {NAV_LINKS.map((link) => (
                    <SheetClose
                      key={link.href}
                      render={
                        <Link
                          href={link.href}
                          className={cn(
                            navLinkClass,
                            "rounded-md px-3 py-3 text-title-md"
                          )}
                        />
                      }
                    >
                      {link.label}
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-8 border-t border-dashed border-primary/30 pt-6">
                  <SheetClose
                    render={
                      <Button
                        nativeButton={false}
                        render={<a href={`mailto:${EMAIL}`} />}
                        className="w-full rounded-md"
                      />
                    }
                  >
                    Hire Me!
                  </SheetClose>
                  <Text
                    role="body-sm"
                    tone="muted"
                    className="mt-4 text-center"
                  >
                    {EMAIL}
                  </Text>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </Container>
      </div>
    </header>
  );
}

export { SiteHeader };
