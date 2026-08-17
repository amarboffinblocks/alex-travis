import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SubHeroSection } from "@/components/sections/sub-hero-section";
import { PROFILE_IMAGE } from "@/lib/site-nav";
import { StatsSection } from "@/components/sections/stats-section";

export const metadata: Metadata = {
  title: "About — Amarjeet",
  description:
    "Fullstack and generative AI developer shipping production web apps, agents, and RAG systems.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col overflow-x-hidden bg-brand-light">
      <SiteHeader />
      <SubHeroSection
        avatar={{ src: PROFILE_IMAGE, alt: "Amarjeet" }}
        heading={
          <>
            Fullstack developer who builds{" "}
            <span className="bg-linear-to-r from-[#ff6b9d] to-accent-orange bg-clip-text text-transparent">
              products
            </span>
          </>
        }
        subtitle="Amarjeet · Fullstack & Generative AI Developer"
        description="I ship production web apps, agents, and RAG systems — built to scale, not just demo."
      />
      <StatsSection />
      <SiteFooter />
    </main>
  );
}
