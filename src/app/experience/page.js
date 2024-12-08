import { ExperienceSection } from "@/components/sections/experience-section";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#18191B] text-white">
      <div className="grain" aria-hidden="true" />
      <Nav />
      <div className="pt-32"> {/* Added padding to account for fixed navbar */}
        <ExperienceSection />
      </div>
      <Footer />
    </div>
  );
} 