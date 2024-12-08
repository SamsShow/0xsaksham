"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SplineScene } from "@/components/spline-scene";
import { FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function HeroSection() {
  return (
    <section className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-background to-background opacity-50" />
      </div>

      {/* Spline Scene */}
      <SplineScene />
      
      <div className="absolute inset-0 flex items-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-[90%] md:max-w-[600px] mx-auto md:mx-24 px-6"
        >
          <motion.span
            variants={fadeIn}
            className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm mb-8"
          >
            UI/UX DESIGNER & BLOCKCHAIN DEVELOPER
          </motion.span>
          <motion.h1 
            variants={fadeIn}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-br from-red-400 via-red-600 to-violet-700 bg-clip-text text-transparent">Creative</span>
            <br />
            <span className="bg-gradient-to-br from-red-400 via-violet-500 to-red-800 bg-clip-text text-transparent">Developer &</span>
            <br />
            <span className="bg-gradient-to-br from-purple-400 via-violet-400 to-red-400 bg-clip-text text-transparent">Designer</span>
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-[400px]"
          >
            Crafting innovative Web3 experiences and user-centric designs that bridge creativity with blockchain technology
          </motion.p>
          <motion.div 
            variants={fadeIn}
            className="flex gap-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full"
            >
              <a 
                href="https://www.linkedin.com/in/sakshamtyagi28/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FaLinkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <a 
                href="/UpdatedResume.pdf"
                download="Saksham_Tyagi_Resume.pdf"
                type="application/pdf"
                className="flex items-center gap-2"
              >
                <HiDownload className="w-5 h-5" />
                Download CV
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 