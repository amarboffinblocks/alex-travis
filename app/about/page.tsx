import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutHeroSection } from "@/components/sections/about-hero-section";

export const metadata: Metadata = {
  title: "About — Amarjeet",
  description:
    "Fullstack and generative AI developer shipping production web apps, agents, and RAG systems.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col overflow-x-hidden bg-brand-light">
      <SiteHeader />
      <AboutHeroSection />
      <SiteFooter />
    </main>
  );
}
