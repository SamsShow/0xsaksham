import { AchievementsSection } from "@/components/sections/achievements-section";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-[#18191B] text-white">
      <div className="grain" aria-hidden="true" />
      <Nav />
      <div className="pt-32">
        <AchievementsSection showAll={true} />
      </div>
      <Footer />
    </div>
  );
} 