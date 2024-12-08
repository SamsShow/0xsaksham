"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote: "Finding, hiring and managing remote tech talent with Athos has never been faster, easier or more flexible.",
    author: "Carla Dormant",
    position: "CEO, Level",
    logo: "/continental.png",
    metric: "87%",
    metricLabel: "reduction in hiring costs"
  },
  {
    quote: "Athos has allowed us to deliver on relevant projects on time and strengthened our team.",
    author: "Justin Rhiel Madsen",
    position: "Design director, 3Lateral",
    logo: "/3lateral.png",
    metric: "7x",
    metricLabel: "Faster than traditional hiring"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-medium text-center mb-20"
        >
          Relied upon by a Fresh<br />Generation of Companies
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card p-8 space-y-8"
            >
              <div className="h-16 w-16 relative">
                <Image
                  src={testimonial.logo}
                  alt={testimonial.author}
                  fill
                  className="object-contain"
                />
              </div>

              <blockquote className="text-gray-400 text-lg">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex justify-between items-end">
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>

                <div className="text-right">
                  <p className="text-3xl font-medium text-[#B4926A]">{testimonial.metric}</p>
                  <p className="text-gray-400 text-sm">{testimonial.metricLabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 