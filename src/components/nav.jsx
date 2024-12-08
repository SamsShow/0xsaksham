"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Achievements", href: "/achievements" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 py-6 px-6 bg-[#18191B]/80 backdrop-blur-sm"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold hover:text-purple-400 transition-colors">
          Saksham Tyagi
        </Link>

        <ul className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navItems.length * 0.1 }}
          >
            <Button asChild variant="outline" size="sm">
              <a href="mailto:sakshamtyagi2008@gmail.com">Contact</a>
            </Button>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  );
} 