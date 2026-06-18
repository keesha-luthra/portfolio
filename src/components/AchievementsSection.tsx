"use client";

import { motion } from "framer-motion";

const achievements = [
  { title: "Best Fresher — SheHacks", color: "bg-[var(--color-brand-mint)]", rotate: "-rotate-1", link: "https://devfolio.co/projects/peerpath-a715" },
  { title: "SheFi Scholar", color: "bg-[var(--color-brand-pink)]", rotate: "rotate-2", link: "https://drive.google.com/file/d/1-uYMhNZylnmveBTnZ9KG0oo2gREHhJW2/view" },
  { title: "GAM AlumHack Hackathon", color: "bg-[var(--color-brand-blue)]", rotate: "-rotate-2", link: "https://drive.google.com/file/d/1YWc8JwKYdnE51374xpeku_EmGxg6fcvv/view" },
  { title: "Deloitte Technology Job Simulation", color: "bg-white", rotate: "-rotate-2", border: true, link: "https://drive.google.com/file/d/1G9eB-oPP7TR1aN2U2j7WJyU2JtLPP6Od/view" },
  { title: "JEE Main — 98.6 Percentile", color: "bg-[var(--color-brand-lemon)]", rotate: "rotate-2" }
];

import MaskingTapeHeader from "@/components/MaskingTapeHeader";

export default function AchievementsSection() {
  return (
    <section id="achievements">
      <div className="mb-16">
        <MaskingTapeHeader text="ACHIEVEMENTS" rotate={2} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative bg-[#f8f9fa] border border-gray-200/80 rounded-2xl p-6 md:p-12 shadow-[inset_0_0_40px_rgba(0,0,0,0.02)]"
      >
        {/* Subtle board header line */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gray-200/50 rounded-t-2xl" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-4">
          {achievements.map((item, index) => {
            const MotionTag = item.link ? motion.a : motion.div;
            return (
              <MotionTag
                key={item.title}
                href={item.link}
                target={item.link ? "_blank" : undefined}
                rel={item.link ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                className={`
                  relative flex items-center justify-center text-center
                  px-6 py-8 min-h-[120px] rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.06)] transform ${item.rotate} 
                  ${item.color} ${item.border ? 'border border-gray-200' : ''}
                  hover:scale-105 hover:z-10 transition-all duration-300 ${item.link ? 'cursor-pointer' : 'cursor-default'}
                `}
              >
                {/* Push pin marker */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gray-300 shadow-[inset_0_-1px_3px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-white/50 absolute top-[2px] left-[2px]" />
                </div>
                
                <span className="font-sans font-medium text-lg md:text-xl text-[var(--color-foreground)] leading-snug mt-2">
                  {item.title}
                </span>
              </MotionTag>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
