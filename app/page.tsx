import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-x-hidden bg-brand-light">
      <SiteHeader />
      <HeroSection />
      <StatsSection />
    </main>
  );
}
