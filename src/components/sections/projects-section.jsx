"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const allProjects = {
  dev: [
    {
      title: "GasSaverX",
      description:
        "A comprehensive gas fee optimization tool leveraging QuickNode Streams and Odos API. Features PayPal USD integration and a portfolio dashboard powered by Coinpaprika API for tracking 50+ crypto assets.",
      tags: ["Web3", "DeFi", "UI/UX"],
      image: "/gassaver.png",
      links: {
        demo: "https://gas-saver-x-xpva.vercel.app/",
        github: "https://github.com/SamsShow/GasSaverX",
      },
      featured: true,
    },
    {
      title: "EnerXchange",
      description:
        "A decentralized renewable energy trading platform utilizing IoT-enabled smart meters and Chainlink Oracles. Enables P2P energy trading in microgrids, reducing centralized grid dependency by 30%.",
      tags: ["Blockchain", "IoT", "Smart Contracts"],
      image: "/EnerXchange.png",
      links: {
        demo: "https://ener-xchange-frontend.vercel.app/",
        github: "https://github.com/SamsShow/EnerXchange-Frontend",
      },
      featured: true,
    },
    {
      title: "Decentralized Credit Scoring System",
      description:
        "A blockchain-based credit scoring system that provides transparent and decentralized credit assessment, enabling fair lending practices and financial inclusion.",
      tags: ["Web3", "DeFi", "Smart Contracts"],
      image: "/dcs.png",
      links: {
        demo: "https://dcs-omega.vercel.app/",
        github: "#",
      },
      featured: true,
    },
    {
      title: "TONfi",
      description:
        "A blockchain-based financial platform built on the TON ecosystem, promoting financial innovation and accessibility.",
      tags: ["Blockchain", "Finance", "TON"],
      image: "/tonfi.png",
      links: {
        demo: "#",
        github: "#",
      },
      featured: false,
    },
  ],
  uiux: [
    {
      title: "Ref3R",
      description:
        "A platform that easily facilitates brand-influencer collaboration for brands, with the ability to enable multiple campaign management and performance tracking on the part of the brand and influencer recipients.",
      tags: ["Figma", "Spline", "Adobe Illustrator", "Adobe Photoshop"],
      image: "/refer.png",
      links: {
        figma:
          "https://www.figma.com/design/l1aMLxaJC5VBV4k5U7wP8k/Ref3R?node-id=0-1&t=ebLb5ZbPN60QD9eX-1",
        case: "https://bit.ly/Ref3rUx",
      },
      featured: true,
    },
    {
      title: "Remex",
      description:
        "A comprehensive web application for a cutting-edge crypto trading platform. The platform integrates CeFi and DeFi features, offering users various tools like GNS Pool, LP Vaults, and advanced analytics to enhance their trading experience.",
      tags: ["Figma", "Spline", "Adobe Illustrator", "Adobe Photoshop"],
      image: "/remex.png",
      links: {
        figma:
          "https://www.figma.com/design/9r7v12Enx2AZlkPN5JRJDM/remex-Design?node-id=3-3915&t=dzDlGbmOLeiG6RBV-1",
        case: "https://bit.ly/remexUx",
      },
      featured: true,
    },
    {
      title: "Rosper",
      description:
        "Rosper is an all-in-one application that bridges the gap between brands and influencers through seamless creation, management, and tracking of marketing campaigns.",
      tags: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
      image: "/rosper.png",
      links: {
        figma:
          "https://www.figma.com/design/2Uqfv0hhgCMWhho91oyyOj/Rosper?node-id=0-1&t=FFeeAyD10HIloj20-1",
        case: "https://1drv.ms/b/s!ArEsGPnowN-M8Ai-uXAxhA2AuO5x?e=0OYXiq",
      },
      featured: false,
    },
    {
      title: "Hexs",
      description:
        "Hexs is a cutting-edge AI-powered platform for generating stunning visuals through text-to-image technology. The platform is designed for both ease of use and advanced functionality, with features like wallet integration and comprehensive model management.",
      tags: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
      image: "/hexus.png",
      links: {
        figma:
          "https://www.figma.com/design/NdiF2K57TJ1T8OPuif1hZV/Hexs-Internet?node-id=0-1&t=q1eidNi7jSukBWLj-1",
        case: "https://1drv.ms/b/s!ArEsGPnowN-M8AnjQd_ayujMLnMN?e=pXvkaM",
      },
      featured: false,
    },
  ],
};

export function ProjectsSection({ showAll = false }) {
  const [activeTab, setActiveTab] = useState("dev");

  const projectsToShow = showAll
    ? allProjects[activeTab]
    : allProjects[activeTab].filter((p) => p.featured).slice(0, 2);

  return (
    <section id="projects" className="py-24 px-6">
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
              Innovative solutions at the intersection of blockchain and user
              experience
            </motion.p>
          </div>

          {!showAll && (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <Button asChild variant="outline">
                <Link href="/projects">View All Projects</Link>
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* Project Type Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={activeTab === "dev" ? "default" : "outline"}
            onClick={() => setActiveTab("dev")}
            className="rounded-full min-w-[120px]"
          >
            Dev Projects
          </Button>
          <Button
            variant={activeTab === "uiux" ? "default" : "outline"}
            onClick={() => setActiveTab("uiux")}
            className="rounded-full min-w-[120px]"
          >
            UI/UX Projects
          </Button>
        </div>

        <div className="relative space-y-8">
          {projectsToShow.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card p-8 md:p-12 bg-[#18191B]/90 backdrop-blur-sm rounded-xl hover:translate-y-[-3px] transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 relative z-50">
                    {project.links.demo && project.links.demo !== "#" && (
                      <Button asChild>
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.links.github && project.links.github !== "#" && (
                      <Button asChild variant="outline">
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.links.figma && (
                      <Button asChild variant="outline">
                        <a
                          href={project.links.figma}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Figma
                        </a>
                      </Button>
                    )}
                    {project.links.case && (
                      <Button asChild variant="outline">
                        <a
                          href={project.links.case}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Case Study
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
