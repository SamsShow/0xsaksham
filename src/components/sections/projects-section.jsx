"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const allProjects = [
  {
    title: "GasSaverX",
    description: "A comprehensive gas fee optimization tool leveraging QuickNode Streams and Odos API. Features PayPal USD integration and a portfolio dashboard powered by Coinpaprika API for tracking 50+ crypto assets.",
    tags: ["Web3", "DeFi", "UI/UX"],
    image: "/project1.jpg",
    links: {
      demo: "https://gas-saver-x-xpva.vercel.app/",
      github: "https://github.com/SamsShow/GasSaverX"
    },
    featured: true
  },
  {
    title: "EnerXchange",
    description: "A decentralized renewable energy trading platform utilizing IoT-enabled smart meters and Chainlink Oracles. Enables P2P energy trading in microgrids, reducing centralized grid dependency by 30%.",
    tags: ["Blockchain", "IoT", "Smart Contracts"],
    image: "/project2.jpg",
    links: {
      demo: "https://ener-xchange-frontend.vercel.app/",
      github: "https://github.com/SamsShow/EnerXchange-Frontend"
    },
    featured: true
  },
  {
    title: "TONfi",
    description: "A blockchain-based financial platform built on the TON ecosystem, promoting financial innovation and accessibility.",
    tags: ["Blockchain", "Finance", "TON"],
    image: "/project3.jpg",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Event Page",
    description: "A responsive event landing page designed for Elite Tech Community using modern web technologies.",
    tags: ["Frontend", "UI/UX", "HTML/CSS"],
    image: "/project4.jpg",
    links: {
      demo: "#",
      github: "#"
    }
  }
];

export function ProjectsSection({ showAll = false }) {
  const projectsToShow = showAll ? allProjects : allProjects.filter(p => p.featured);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div className="flex justify-between items-end mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl md:text-5xl font-medium mb-6"
            >
              {showAll ? "All Projects" : "Featured Projects"}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-400 text-lg"
            >
              Innovative solutions at the intersection of blockchain and user experience
            </motion.p>
          </div>

          {!showAll && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <Button asChild variant="outline">
                <Link href="/projects">View All Projects</Link>
              </Button>
            </motion.div>
          )}
        </motion.div>

        <div className="space-y-[-6rem]">
          {projectsToShow.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card p-8 md:p-12"
            >
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl font-medium">{project.title}</h3>
                  <p className="text-gray-400 text-lg">{project.description}</p>
                  <div className="flex gap-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-4 py-2 rounded-full bg-white/10 text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button asChild variant="outline" size="sm">
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        View Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex-1 aspect-[4/3] relative bg-white/10 rounded-2xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 