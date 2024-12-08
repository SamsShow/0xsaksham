"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: "/linkedin.svg" },
  { name: "Twitter", href: "https://twitter.com", icon: "/twitter.svg" },
  { name: "Dribbble", href: "https://dribbble.com", icon: "/dribbble.svg" },
  { name: "Behance", href: "https://behance.net", icon: "/behance.svg" },
];

export function Footer() {
  return (
    <footer className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="card bg-[#1E2B1B] p-20 text-center space-y-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image
              src="/avatar.jpg"
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm text-gray-400">
              Goran Babarogic - Framer Developer
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-medium"
          >
            Upgrade your web<br />presence with Framer
          </motion.h2>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            href="https://contra.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full"
          >
            <Image
              src="/contra.svg"
              alt="Contra"
              width={20}
              height={20}
              className="opacity-80"
            />
            Hire Me on Contra
          </motion.a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Image
                src={link.icon}
                alt={link.name}
                width={20}
                height={20}
                className="opacity-80"
              />
              {link.name}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
} 