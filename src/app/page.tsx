"use client";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BeliefsSection from "@/components/BeliefsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import CurrentlySection from "@/components/CurrentlySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main 
      className="min-h-screen bg-[#fdfbf7] pb-24 relative overflow-hidden"
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
    >
      {/* Decorative noise texture overlay for a paper feel */}
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.15]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 pt-32 space-y-32 md:space-y-48 pl-12 md:pl-20 lg:pl-32">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <BeliefsSection />
        <CurrentlySection />
        <AchievementsSection />
        <ContactSection />
      </div>
    </main>
  );
}
