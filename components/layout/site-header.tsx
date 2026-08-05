"use client";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { GridFrame } from "./grid-frame";
import { DotGrid } from "./dot-grid";

function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-primary/50 border-dashed ">
      <DotGrid />
      <Container className="flex relative items-center justify-between py-4 md:py-5  bg-brand-light ">
        <Link href="/" aria-label="Home">
          Am
        </Link>
      </Container>
    </header>
  );
}

export { SiteHeader };
