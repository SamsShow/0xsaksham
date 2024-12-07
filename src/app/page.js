"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";

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

export default function Home() {
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-background to-background" />
          </div>
          
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-3xl px-4"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
            >
              Creative Developer & Designer
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-lg sm:text-xl text-muted-foreground mb-8"
            >
              Crafting digital experiences that blend creativity with functionality
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="flex gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((project) => (
                <motion.div
                  key={project}
                  whileHover={{ y: -5 }}
                  className="group relative rounded-xl bg-card overflow-hidden"
                >
                  <div className="aspect-video relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10" />
                    <Image
                      src={`/project${project}.jpg`}
                      alt={`Project ${project}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-2xl font-semibold mb-2">Project {project}</h3>
                    <p className="text-muted-foreground">
                      A beautiful and functional web application built with modern technologies.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-4 md:px-6 lg:px-8 bg-muted/50">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h2>
            <p className="text-xl text-muted-foreground mb-16">
              I'm a passionate developer focused on creating beautiful and functional web experiences 
              that leave a lasting impression.
            </p>
            <motion.div 
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {["React", "Next.js", "TypeScript", "Tailwind"].map((skill) => (
                <motion.div
                  key={skill}
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl bg-card border border-border"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Let's collaborate and bring your ideas to life
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full"
            >
              <a href="mailto:your@email.com">Send me a message</a>
            </Button>
          </motion.div>
        </section>
      </div>
    </>
  );
}
