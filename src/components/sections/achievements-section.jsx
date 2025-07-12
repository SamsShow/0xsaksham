"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const allAchievements = [
  {
    title: "Move AI Hackathon 2025",
    position: "3rd Place",
    description:
      "Awarded $4,000 for HypeFlow, an autonomous AI trading agent built on the Aptos blockchain to automate yield strategies and optimize DeFi portfolio management.",
    featured: true,
    category: "Hackathon",
  },
  {
    title: "MSME Indeathon 4.0",
    position: "Grant Recipient",
    description:
      "Secured $14,000 in grants for EnerXchange, recognizing its potential to revolutionize renewable energy trading. This funding will accelerate development and deployment of the decentralized energy platform across multiple microgrids.",
    featured: true,
    category: "Grant",
  },
  {
    title: "Aptos Foundation Grant",
    position: "Grant Recipient",
    description:
      "Received $900 in development grants from the Aptos Foundation to advance HypeFlow's autonomous trading capabilities. This grant supports the integration of advanced AI algorithms with Aptos blockchain infrastructure.",
    featured: true,
    category: "Grant",
  },
  {
    title: "QuickNode BuildOn Hackathon",
    position: "3rd Place",
    description:
      "Awarded $2,000 in PYUSD for GasSaverX, integrating PayPal PYUSD payments and blockchain analytics.",
    featured: true,
    category: "Hackathon",
  },
  {
    title: "ideaTON by TON Society India",
    position: "2nd Place",
    description:
      "Recognized with $180 prize for TONfi, promoting financial innovation in the TON ecosystem.",
    featured: true,
    category: "Hackathon",
  },
  {
    title: "GFG HackFest 2024",
    position: "2nd Place",
    description:
      "Honored with $200 prize for a Web3 project focused on sustainable development.",
    featured: true,
    category: "Hackathon",
  },
  {
    title: "Aurora Hack The Spectrum",
    position: "Potential Project Award",
    description:
      "Earned the 'Deva the Devcon Unicorn: Potential Project Award' with an $80 prize as a solo contestant.",
    featured: true,
    category: "Hackathon",
  },
  {
    title: "IIT Delhi UX Hackathon",
    position: "Top 10",
    description:
      "Secured a position in the Top 10 among 170 teams in a rigorous 6-hour, 2-round UX Hackathon organized by IIT Delhi's design club.",
    featured: true,
    category: "Design",
  },
  {
    title: "Ethereum Developer Degree",
    position: "Certification",
    description:
      "Successfully completed the comprehensive Ethereum Developer Degree program from LearnWeb3, demonstrating expertise in blockchain development.",
    featured: true,
    category: "Certification",
  },
  {
    title: "Live The Code 3.0",
    position: "Top 25",
    description:
      "Shortlisted among the Top 25 participants in the Live The Code 3.0 Hackathon organized by GFG ADGIPS.",
    featured: true,
    category: "Hackathon",
  },
];

export function AchievementsSection({ showAll = false }) {
  const achievementsToShow = showAll
    ? allAchievements
    : allAchievements.filter((a) => a.featured).slice(0, 3);

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

          {!showAll && achievementsToShow.length < allAchievements.length && (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
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
              className="card p-8 bg-[#18191B]/80 backdrop-blur-sm"
            >
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-4">
                {achievement.category}
              </span>
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
