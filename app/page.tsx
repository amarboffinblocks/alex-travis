import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhatIBuildSection } from "@/components/sections/what-i-build-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-x-hidden bg-brand-light">
      <SiteHeader />
      <HeroSection />
      <StatsSection />
      <WhatIBuildSection />
      <SelectedWorkSection />
      <TechStackSection />
      {/* <ExperienceSection /> */}
      <TestimonialsSection />
      {/* <ContactSection /> */}
      <SiteFooter />
    </main>
  );
}
