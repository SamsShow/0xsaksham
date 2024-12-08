"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const allAchievements = [
  {
    title: "QuickNode BuildOn Hackathon",
    position: "3rd Place",
    description: "Awarded $2,000 in PYUSD for GasSaverX, integrating PayPal PYUSD payments and blockchain analytics.",
    featured: true
  },
  {
    title: "ideaTON by TON Society India",
    position: "2nd Place",
    description: "Recognized with $180 prize for TONfi, promoting financial innovation in the TON ecosystem.",
    featured: true
  },
  {
    title: "GFG HackFest 2024",
    position: "2nd Place",
    description: "Honored with $200 prize for a Web3 project focused on sustainable development.",
    featured: true
  },
  {
    title: "Elite Tech Community Hackathon",
    position: "Finalist",
    description: "Created an innovative blockchain solution for supply chain management.",
    featured: false
  },
  {
    title: "Web3 Development Course",
    position: "Certification",
    description: "Completed advanced certification in Web3 development and smart contract programming.",
    featured: false
  }
];

export function AchievementsSection({ showAll = false }) {
  const achievementsToShow = showAll ? allAchievements : allAchievements.filter(a => a.featured);

  return (
    <section id="achievements" className="py-32 px-6 bg-black/20">
      <div className="max-w-[1400px] mx-auto">
        <motion.div className="flex justify-between items-end mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl md:text-5xl font-medium mb-6"
            >
              {showAll ? "All Achievements" : "Featured Achievements"}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-400 text-lg"
            >
              Recognition and accomplishments in tech and development
            </motion.p>
          </div>

          {!showAll && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <Button asChild variant="outline">
                <Link href="/achievements">View All Achievements</Link>
              </Button>
            </motion.div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsToShow.map((achievement) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="card p-8"
            >
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-purple-400 mb-4">{achievement.position}</p>
              <p className="text-gray-400">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 