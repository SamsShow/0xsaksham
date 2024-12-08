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
    <section className="min-h-screen relative overflow-hidden pt-16 md:pt-0">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-background to-background opacity-50" />
      </div>

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-5">
        <h1 className="hidden md:block text-[13vw] font-bold text-white/[0.03] whitespace-nowrap tracking-tighter">
          SAKSHAM TYAGI
        </h1>
      </div>

      {/* Content and Spline Scene Container */}
      <div className="container mx-auto">
        <div className="relative min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="w-full lg:w-1/2 pt-8 lg:pt-0 lg:pl-24 z-10 text-center lg:text-left px-6"
          >
            <motion.span
              variants={fadeIn}
              className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm mb-8"
            >
              UI/UX DESIGNER & BLOCKCHAIN DEVELOPER
            </motion.span>
            <motion.h1 
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-br from-red-400 via-red-600 to-violet-700 bg-clip-text text-transparent">Creative</span>
              <br />
              <span className="bg-gradient-to-br from-red-400 via-violet-500 to-red-800 bg-clip-text text-transparent">Developer &</span>
              <br />
              <span className="bg-gradient-to-br from-purple-400 via-violet-400 to-red-400 bg-clip-text text-transparent">Designer</span>
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-[400px] mx-auto lg:mx-0"
            >
              Hi! I&apos;m Saksham, Crafting innovative Web3 experiences and user-centric designs that bridge creativity with blockchain technology
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
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

          {/* Spline Scene Container - Hidden on mobile, larger on desktop */}
          <div className="hidden lg:block w-full lg:w-3/5 h-[calc(100vh-4rem)] relative">
            <div className="absolute inset-0 scale-125">
              <SplineScene />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 