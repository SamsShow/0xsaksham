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
      <script
        data-name="BMC-Widget"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="samscasm"
        data-description="Support me on Buy me a coffee!"
        data-message=""
        data-color="#FF813F"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
        async
      />
    </div>
  );
}
