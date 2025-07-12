"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiSolidity, 
  SiEthereum,
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiPython,
  SiCplusplus,
  SiFramer,
  SiShadcnui,
  SiVisualstudiocode,
  SiJavascript,
  SiGit,
  SiGithub,
  SiC,
  SiTypescript
} from "react-icons/si";

const tools = [
  // Programming Languages
  { name: "C", Icon: SiC, color: "text-[#A8B9CC]", category: "Programming" },
  { name: "C++", Icon: SiCplusplus, color: "text-[#00599C]", category: "Programming" },
  { name: "Python", Icon: SiPython, color: "text-[#3776AB]", category: "Programming" },
  { name: "JavaScript", Icon: SiJavascript, color: "text-[#F7DF1E]", category: "Programming" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-[#3178C6]", category: "Programming" },
  
  // Frontend Technologies
  { name: "React", Icon: SiReact, color: "text-[#61DAFB]", category: "Frontend" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-white", category: "Frontend" },
  { name: "TailwindCSS", Icon: SiTailwindcss, color: "text-[#06B6D4]", category: "Frontend" },
  { name: "Shadcn", Icon: SiShadcnui, color: "text-[#000000]", category: "Frontend" },
  
  // Web3 Technologies
  { name: "Solidity", Icon: SiSolidity, color: "text-[#363636]", category: "Web3" },
  { 
    name: "Remix IDE", 
    customIcon: "/remix.png", 
    color: "text-purple-500", 
    category: "Web3" 
  },
  { name: "Ethers.js", Icon: SiEthereum, color: "text-[#627EEA]", category: "Web3" },
  { 
    name: "Hardhat", 
    customIcon: "/hardhat.png", 
    color: "text-[#FFF100]", 
    category: "Web3" 
  },
  { 
    name: "Move (Aptos)", 
    customIcon: "/move.png", 
    color: "text-[#00D4AA]", 
    category: "Web3" 
  },
  
  // Design Tools
  { name: "Figma", Icon: SiFigma, color: "text-[#F24E1E]", category: "Design" },
  { name: "Illustrator", Icon: SiAdobeillustrator, color: "text-[#FF9A00]", category: "Design" },
  { name: "Photoshop", Icon: SiAdobephotoshop, color: "text-[#31A8FF]", category: "Design" },
  
  // Version Control
  { name: "Git", Icon: SiGit, color: "text-[#F05032]", category: "Version Control" },
  { name: "GitHub", Icon: SiGithub, color: "text-white", category: "Version Control" },
  
  // Other Skills
  { name: "Premiere Pro", Icon: SiAdobepremierepro, color: "text-[#9999FF]", category: "Video Editing" },
  { name: "Framer Motion", Icon: SiFramer, color: "text-[#0055FF]", category: "Animation" },
];

export function Tools() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-medium mb-6"
          >
            Tech Stack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6"
        >
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ 
                opacity: 0, 
                y: 20
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0
              }}
              transition={{ 
                delay: i * 0.05,
                duration: 0.4,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{
                y: -3,
                transition: { duration: 0.2 }
              }}
              className="tools-card p-3 md:p-6 flex flex-col items-center justify-center gap-2 md:gap-4 group cursor-pointer hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="relative">
                {tool.customIcon ? (
                  <div className="relative w-8 h-8 md:w-12 md:h-12">
                    <Image
                      src={tool.customIcon}
                      alt={tool.name}
                      fill
                      className="object-contain transition-all duration-300 group-hover:drop-shadow-lg"
                    />
                  </div>
                ) : tool.textIcon ? (
                  <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-xl md:text-3xl transition-all duration-300 group-hover:drop-shadow-lg">
                    {tool.textIcon}
                  </div>
                ) : (
                                      <tool.Icon className={`w-8 h-8 md:w-12 md:h-12 ${tool.color} transition-all duration-300 group-hover:drop-shadow-lg`} />
                )}
              </div>
              
              <span className="font-medium text-sm md:text-base group-hover:text-purple-400 transition-colors duration-200 text-center">
                {tool.name}
              </span>
              <span className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200 text-center">
                {tool.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 