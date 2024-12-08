"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "UI Designer",
    company: "IKnowSpots",
    period: "Feb 2024 - July 2024",
    description: "As an Intern UI designer, I have worked on a diverse range of projects involving both Web3 and Web2 UI designs."
  },
  {
    title: "Open Source Coordinator",
    company: "GeeksforGeeks ABESEC",
    period: "Oct 2023 - Jan 2024",
    description: "Led open source initiatives and coordinated community projects."
  },
  {
    title: "Graphics & Development Coordinator",
    company: "CodeChef ABESEC",
    period: "Oct 2023 - July 2024",
    description: "Managed visual design and development aspects of coding community projects."
  },
  {
    title: "Frontend Web Developer",
    company: "Elite Tech Community",
    period: "May 2023",
    description: "Designed the Front End of the Event page using HTML, CSS & JS."
  },
  {
    title: "Graphic Coordinator",
    company: "GeeksforGeeks ABESEC",
    period: "Jan 2023-Oct 2023",
    description: "Created visual content and managed design assets for tech community events."
  }
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
          <h2 className="text-4xl md:text-5xl font-medium mb-6">My Experience</h2>
          <p className="text-gray-400 text-lg">Journey through my professional experiences</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-violet-500 to-indigo-500" />

          {/* Experience items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''} gap-8`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card p-8"
                  >
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                      {exp.title}
                    </h3>
                    <p className="text-purple-400 mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-background" />

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