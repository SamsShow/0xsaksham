import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { Nav } from "@/components/nav";
import { Stats } from "@/components/stats";
import { Tools } from "@/components/tools";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#18191B] text-white">
      <div className="grain" aria-hidden="true" />
      <Nav />
      <HeroSection />
      <Stats />
      <Tools />
      <ProjectsSection />
      <AchievementsSection />
      <Footer />
    </div>
  );
}
