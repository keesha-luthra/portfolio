"use client";

import { motion } from "framer-motion";
import { Mail, User, Phone } from "lucide-react";

import MaskingTapeHeader from "@/components/MaskingTapeHeader";

export default function ContactSection() {
  return (
    <section id="contact" className="relative max-w-7xl mx-auto w-full pb-12 text-center">
      <div className="mb-12">
        <MaskingTapeHeader text="LET'S CONNECT" rotate={2} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto flex flex-col items-center"
      >
        <p className="font-sans text-gray-600 text-2xl mb-12 leading-relaxed">
          If you've made it this far, you're either a recruiter or incredibly committed. Either way, hello.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {[
            { icon: <Mail className="w-6 h-6" />, link: "mailto:keeshaluthra3018@gmail.com", label: "Email" },
            { icon: <Phone className="w-6 h-6" />, link: "tel:+916397000476", label: "Phone" },
            { icon: <User className="w-6 h-6" />, link: "https://linkedin.com/in/keesha-luthra", label: "LinkedIn" },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.5-3.78c.15-.4.6-1.83-.15-3.72 0 0-1.2-.38-3.9 1.4a13.38 13.38 0 0 0-7 0c-2.7-1.78-3.9-1.4-3.9-1.4a5.2 5.2 0 0 0-.15 3.72A5.2 5.2 0 0 0 3 11.24c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path><path d="M9 19c-4.3 1.4-4.3-2.5-6-3"></path></svg>, link: "https://github.com/keesha-luthra", label: "GitHub" },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, link: "https://www.instagram.com/keesha_000/", label: "Instagram" },
            { icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.182 0 7.436 2.981 7.436 6.966 0 4.156-2.618 7.502-6.257 7.502-1.221 0-2.368-.634-2.763-1.385l-.752 2.864c-.272 1.033-1.01 2.327-1.503 3.118 1.182.363 2.438.56 3.733.56 6.621 0 11.988-5.368 11.988-11.988C24 5.367 18.638 0 12.017 0z"/></svg>, link: "https://in.pinterest.com/pinnedbykeesha/", label: "Pinterest" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-600 hover:text-[var(--color-brand-pink)] hover:shadow-md transition-all border border-gray-100"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        
        <p className="font-handwriting text-2xl text-gray-400 transform -rotate-2">
          Designed and built by Keesha.
        </p>
      </motion.div>
    </section>
  );
}
