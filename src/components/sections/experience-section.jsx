"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "REWARDSY",
    period: "Jan 2025 - April 2025",
    description:
      "Worked on innovative web applications that enhance customer engagement through dynamic, personalized QR code solutions. Developed features using modern web technologies and contributed to the overall platform architecture.",
  },
  {
    title: "UI Designer",
    company: "IKnowSpots",
    period: "Feb 2024 - July 2024",
    description:
      "As an Intern UI designer, I have worked on a diverse range of projects involving both Web3 and Web2 UI designs.",
  },
  {
    title: "Open Source Coordinator",
    company: "GeeksforGeeks ABESEC",
    period: "Oct 2023 - Jan 2024",
    description:
      "Led open source initiatives and coordinated community projects.",
  },
  {
    title: "Graphics & Development Coordinator",
    company: "CodeChef ABESEC",
    period: "Oct 2023 - July 2024",
    description:
      "Managed visual design and development aspects of coding community projects.",
  },
  {
    title: "Frontend Web Developer",
    company: "Elite Tech Community",
    period: "May 2023",
    description:
      "Designed the Front End of the Event page using HTML, CSS & JS.",
  },
  {
    title: "Graphic Coordinator",
    company: "GeeksforGeeks ABESEC",
    period: "Jan 2023-Oct 2023",
    description:
      "Created visual content and managed design assets for tech community events.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            My Experience
          </h2>
          <p className="text-gray-400 text-lg">
            Journey through my professional experiences
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-violet-500 to-indigo-500 origin-top"
          />

          {/* Experience items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? 50 : -50,
                  y: 20 
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  y: 0 
                }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-30px" }}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                } gap-8`}
              >
                {/* Content */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <motion.div 
                    className="card p-8 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
                    >
                      {exp.title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                      className="text-purple-400 mb-2"
                    >
                      {exp.company}
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      className="text-gray-400 text-sm mb-4"
                    >
                      {exp.period}
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.6 }}
                      className="text-gray-300"
                    >
                      {exp.description}
                    </motion.p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    delay: index * 0.2 + 0.2,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-background shadow-lg shadow-purple-500/50"
                />

                {/* Empty space for the other side */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
