"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { sendEmail } from "@/app/actions";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sakshamtyagi28/",
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/SamsShow",
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/SamsShow2",
    icon: <RiTwitterXFill className="w-5 h-5" />,
  },
  {
    name: "Telegram",
    url: "https://t.me/samscasm",
    icon: <FaTelegramPlane className="w-5 h-5" />,
  },
];

export function Footer() {
  const formRef = useRef(null);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (formData) => {
    setPending(true);

    try {
      const response = await sendEmail(formData);

      if (response.error) {
        throw new Error(response.error);
      }

      toast.success("Email sent successfully!");
      formRef.current?.reset();
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setPending(false);
    }
  };

  return (
    <footer className="py-20 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-16"
        >
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Let&apos;s Connect</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Have a project in mind or just want to chat? Feel free to reach out.
              I&apos;m always open to discussing new opportunities and ideas.
            </p>
            <div className="space-y-4">
              <p className="text-gray-400">
                <span className="font-semibold text-white">Email:</span>{" "}
                sakshamtyagi2008@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="font-semibold text-white">Location:</span> GZB,
                India
              </p>
            </div>
            
            {/* Social Links */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              ref={formRef}
              action={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="senderEmail" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="senderEmail"
                  id="senderEmail"
                  required
                  maxLength={500}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  maxLength={5000}
                  rows={5}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button
                type="submit"
                disabled={pending}
                className="w-full"
              >
                {pending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </motion.div>

        <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© 2025 Saksham Tyagi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 