"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const timelineData = [
  {
    year: "2025",
    title: "Advanced AI & Web3 Development",
    projects: [
      {
        name: "Hyperflow AI",
        description: "AI-powered social sentiment trading on Aptos",
        achievement: "3rd Place - Move AI Hackathon ($4,000)",
        tech: ["AI", "Aptos", "Move", "Twitter API"],
        color: "from-orange-500 to-red-500"
      },
      {
        name: "Full Stack Development",
        description: "Internship at REWARDSY",
        achievement: "Professional Experience",
        tech: ["React", "Node.js", "QR Solutions"],
        color: "from-blue-500 to-purple-500"
      }
    ]
  },
  {
    year: "2024",
    title: "Blockchain & DeFi Innovation",
    projects: [
      {
        name: "EnerXchange",
        description: "Decentralized renewable energy trading platform",
        achievement: "MSME Indeathon 4.0 Grant ($14,000)",
        tech: ["Blockchain", "IoT", "Chainlink", "Smart Contracts"],
        color: "from-green-500 to-teal-500"
      },
      {
        name: "GasSaverX",
        description: "Gas fee optimization with PayPal USD integration",
        achievement: "3rd Place - QuickNode BuildOn ($2,000)",
        tech: ["Web3", "PayPal USD", "QuickNode", "Odos API"],
        color: "from-yellow-500 to-orange-500"
      },
      {
        name: "UI/UX Design Role",
        description: "UI Designer at IKnowSpots",
        achievement: "Professional Design Experience",
        tech: ["Figma", "Web3 UI", "Web2 UI", "Design Systems"],
        color: "from-pink-500 to-rose-500"
      }
    ]
  },
  {
    year: "2023",
    title: "Community Leadership & Development",
    projects: [
      {
        name: "Open Source Coordination",
        description: "Led initiatives at GeeksforGeeks ABESEC",
        achievement: "Community Leadership",
        tech: ["Open Source", "Community Management", "Git"],
        color: "from-purple-500 to-indigo-500"
      },
      {
        name: "Frontend Development",
        description: "Web development at Elite Tech Community",
        achievement: "Technical Contribution",
        tech: ["HTML", "CSS", "JavaScript", "Frontend"],
        color: "from-cyan-500 to-blue-500"
      },
      {
        name: "Graphics Coordination",
        description: "Visual design for tech communities",
        achievement: "Creative Leadership",
        tech: ["Adobe Suite", "Graphics Design", "Branding"],
        color: "from-violet-500 to-purple-500"
      }
    ]
  }
];

export function ProjectTimeline() {
  const [selectedYear, setSelectedYear] = useState("2025");

  return (
    <section className="py-24 px-6 bg-black/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Development Journey
          </h2>
          <p className="text-gray-400 text-lg">
            A timeline of my growth and achievements in tech
          </p>
        </motion.div>

        {/* Year Selection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-2 md:gap-4 mb-12 px-4"
        >
          {timelineData.map((item, index) => (
            <motion.button
              key={item.year}
              onClick={() => setSelectedYear(item.year)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                selectedYear === item.year
                  ? "bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.year}
            </motion.button>
          ))}
        </motion.div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Central Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-violet-500 to-indigo-500 origin-top"
          />

          {timelineData
            .filter(item => item.year === selectedYear)
            .map((yearData, yearIndex) => (
              <motion.div
                key={yearData.year}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-16"
              >
                {yearData.projects.map((project, projectIndex) => (
                  <motion.div
                    key={project.name}
                    initial={{ 
                      opacity: 0,
                      x: projectIndex % 2 === 0 ? -50 : 50,
                      y: 30
                    }}
                    animate={{ 
                      opacity: 1,
                      x: 0,
                      y: 0
                    }}
                    transition={{ 
                      delay: projectIndex * 0.15,
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                    className={`flex items-center ${
                      projectIndex % 2 === 0 ? "md:flex-row-reverse" : ""
                    } gap-4 md:gap-8 flex-col md:flex-row`}
                  >
                    {/* Project Content */}
                    <div
                      className={`w-full md:w-5/12 ${
                        projectIndex % 2 === 0 ? "md:text-right" : "md:text-left"
                      } text-center md:text-left`}
                    >
                      <motion.div
                        whileHover={{ 
                          scale: 1.02,
                          y: -5,
                          transition: { duration: 0.3 }
                        }}
                        className="bg-[#18191B]/90 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                      >
                        <div className={`w-full h-1 bg-gradient-to-r ${project.color} rounded-full mb-4`} />
                        
                        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                          {project.name}
                        </h3>
                        
                        <p className="text-gray-400 mb-3 group-hover:text-gray-300 transition-colors duration-300">
                          {project.description}
                        </p>
                        
                        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-3 mb-4">
                          <p className="text-green-400 font-medium text-sm">
                            🏆 {project.achievement}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: projectIndex * 0.2 + techIndex * 0.1 }}
                              className="px-2 py-1 bg-white/10 rounded-full text-xs text-purple-300 hover:bg-white/20 transition-colors duration-300"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Timeline Dot */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        delay: projectIndex * 0.2 + 0.3,
                        duration: 0.5,
                        ease: "easeOut"
                      }}
                      className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
                    >
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${project.color} border-4 border-[#18191B] shadow-lg`} />
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.5, 1] }}
                        transition={{ 
                          delay: projectIndex * 0.2 + 0.5,
                          duration: 0.8
                        }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${project.color} opacity-20 blur-sm`}
                      />
                    </motion.div>

                    {/* Empty Space */}
                    <div className="hidden md:block md:w-5/12" />
                  </motion.div>
                ))}
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
} 