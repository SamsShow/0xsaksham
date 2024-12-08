"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    role: "Project Manager at TechCorp",
    image: "/testimonial1.jpg",
    text: "Working with Saksham was a fantastic experience. His attention to detail and innovative approach to blockchain solutions really set him apart.",
  },
  {
    name: "Jane Smith",
    role: "Lead Designer at DesignHub",
    image: "/testimonial2.jpg",
    text: "Saksham&apos;s UI/UX designs are both beautiful and functional. He has a great eye for detail and always delivers high-quality work.",
  },
  {
    name: "Mike Johnson",
    role: "CTO at Web3 Startup",
    image: "/testimonial3.jpg",
    text: "His expertise in Web3 development helped us launch our DeFi platform ahead of schedule. Highly recommended!",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Client Testimonials
          </h2>
          <p className="text-gray-400 text-lg">
            What others say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-400">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 