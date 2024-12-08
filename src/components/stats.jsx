"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Hackathon Wins", value: "4+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Years of Experience", value: "1+" },
  { label: "UI Projects", value: "5+" },
];

export function Stats() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="stats-card p-8 text-center"
            >
              <h3 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-br from-purple-400 via-violet-400 to-indigo-400">
                {stat.value}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 