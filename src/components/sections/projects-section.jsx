"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const allProjects = {
  dev: [
    {
      title: "Hyperflow AI",
      description:
        "An autonomous AI agent that monitors social sentiment on X (Twitter) for Aptos-based projects and automatically executes on-chain actions like token swaps and staking. Creates a viral feedback loop where increased hype drives investment activity on the Aptos mainnet using Move Agent Kit.",
      tags: ["AI", "Aptos", "Move", "DeFi", "Social Trading"],
      image: "/Hypeflow.png",
      links: {
        demo: "https://hypeflowai.tech/",
        github: "https://github.com/SamsShow/Hyperflow",
      },
      featured: true,
    },
    {
      title: "UmiKarma",
      description:
        "An AI-enhanced reputation system for the decentralized world featuring Sybil-resistant scoring, multi-platform aggregation of GitHub contributions and DAO participation, AI-powered analysis using GPT models, and exportable verifiable reputation certificates.",
      tags: ["AI", "Reputation", "DAO", "Web3", "GPT"],
      image: "/Umikarma.png",
      links: {
        demo: "https://umikarma-frontend.vercel.app",
        github: "https://github.com/SamsShow/umikarma-frontend",
      },
      featured: true,
    },
    {
      title: "DDay (DietTrackr)",
      description:
        "A modern Android diet tracking application with a sleek dark-themed UI and glass gradient cards. Features daily meal tracking, macro management, progress monitoring, local data storage, and meal notifications for comprehensive diet management.",
      tags: ["Android", "Kotlin", "UI/UX", "Health", "Mobile"],
      image: "/DDay.png",
      links: {
        demo: "https://github.com/SamsShow/DDay/releases/tag/test",
        github: "https://github.com/SamsShow/DDay",
      },
      featured: false,
    },
    {
      title: "EduImpact",
      description:
        "A blockchain-based educational platform connecting tech learners with corporate sponsors through decentralized scholarships. Features milestone-based learning, EDU token rewards, verifiable NFT credentials, and OpenCampus ID integration for transparent skill development tracking.",
      tags: ["Blockchain", "Education", "DeFi", "NFTs", "Web3"],
      image: "/EduImpact.png",
      links: {
        demo: "https://edu-impact.vercel.app",
        github: "https://github.com/SamsShow/eduImpactt",
      },
      featured: true,
    },
    {
      title: "GoalForge",
      description:
        "A comprehensive goal-setting and achievement tracking platform built with Next.js. Features community-driven goal sharing, progress tracking, NFT rewards for milestones, and a dashboard for managing personal and collaborative objectives with blockchain integration.",
      tags: ["Next.js", "Web3", "NFTs", "Community", "Productivity"],
      image: "/GoalForge.png",
      links: {
        demo: "https://goal-forge-three.vercel.app/",
        github: "https://github.com/SamsShow/goalforged",
      },
      featured: true,
    },
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
      featured: false,
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
      featured: false,
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
      featured: false,
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-medium mb-6"
            >
              {showAll ? "All Projects" : "Featured Projects"}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg"
            >
              Innovative solutions at the intersection of blockchain and user
              experience
            </motion.p>
          </div>

          {!showAll && (
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
            >
              <Button asChild variant="outline">
                <Link href="/projects">View All Projects</Link>
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* Project Type Tabs */}
        <motion.div 
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
          >
            <Button
              variant={activeTab === "dev" ? "default" : "outline"}
              onClick={() => setActiveTab("dev")}
              className="rounded-full min-w-[120px]"
            >
              Dev Projects
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5,
              delay: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
          >
            <Button
              variant={activeTab === "uiux" ? "default" : "outline"}
              onClick={() => setActiveTab("uiux")}
              className="rounded-full min-w-[120px]"
            >
              UI/UX Projects
            </Button>
          </motion.div>
        </motion.div>

        <div className="relative space-y-8">
          {projectsToShow.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ 
                opacity: 0, 
                y: 50
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0
              }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="card p-4 md:p-8 lg:p-12 bg-[#18191B]/90 backdrop-blur-sm rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:bg-[#1a1b1d]/95 group cursor-pointer"
            >
                              <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm group-hover:bg-white/10 group-hover:text-blue-300 transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 relative z-50 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {project.links.demo && project.links.demo !== "#" && (
                      <Button asChild className="hover:scale-102 transition-transform duration-150">
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
                      <Button asChild variant="outline" className="hover:scale-102 transition-transform duration-150">
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
                      <Button asChild variant="outline" className="hover:scale-102 transition-transform duration-150">
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
                      <Button asChild variant="outline" className="hover:scale-102 transition-transform duration-150">
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
                    {project.links.demo && project.links.demo !== "#" ? (
                      <a 
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          quality={75}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                      </a>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        quality={75}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Live Preview Overlay */}
                    {project.links.demo && project.links.demo !== "#" && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-sm">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                          <p className="text-white text-sm font-medium mb-2">Live Preview</p>
                          <p className="text-white/80 text-xs">Click to view project</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Project Status Badge */}
                    <div className="absolute top-4 right-4 transform translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 backdrop-blur-sm rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs text-green-300">Live</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex gap-2">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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
