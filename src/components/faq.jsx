"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is your design process?",
    answer: "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design."
  },
  {
    question: "What tools and software do you use for UX design?",
    answer: "I use industry-standard tools including Figma for design and prototyping, Framer for advanced interactions, and various research and analytics tools to validate design decisions."
  },
  {
    question: "How do you measure the success of your UX designs?",
    answer: "Success is measured through a combination of quantitative metrics (user engagement, conversion rates, task completion rates) and qualitative feedback (user interviews, satisfaction surveys, and stakeholder feedback)."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-medium text-center mb-20"
        >
          Common Queries Answered
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-400">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 