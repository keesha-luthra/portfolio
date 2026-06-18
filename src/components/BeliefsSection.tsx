"use client";

import { motion } from "framer-motion";

const beliefs = [
  {
    text: `"I have never seen a problem and thought, 'someone else will figure that out.'"`,
    className: "bg-white p-6 md:p-10 shadow-[2px_4px_16px_rgba(0,0,0,0.06)] transform -rotate-2 rounded-sm border border-gray-50 max-w-md ml-0 md:ml-12 mt-8",
    textClass: "font-handwriting text-3xl md:text-4xl text-gray-800 leading-relaxed"
  },
  {
    text: `A surprising amount of software starts with me saying, "Wait... what if?"`,
    className: "bg-[#fef08a]/60 p-6 md:p-8 shadow-sm transform rotate-3 rounded-sm max-w-sm self-end mr-0 md:mr-24 relative",
    textClass: "font-sans font-medium text-2xl text-gray-800",
    hasTape: true
  },
  {
    text: `"What is dead may never die."`,
    className: "bg-[var(--color-brand-mint)]/40 p-6 md:p-10 shadow-md transform -rotate-1 rounded-sm max-w-sm mx-auto relative",
    textClass: "font-serif italic text-3xl text-gray-800 text-center",
    hasPin: true
  },
  {
    text: `Technology should feel intuitive, thoughtful, and unmistakably human.`,
    className: "bg-white/40 backdrop-blur-sm p-6 transform rotate-2 max-w-md ml-auto md:mr-12 border-l-[6px] border-[var(--color-brand-pink)]",
    textClass: "font-sans text-2xl text-gray-700 leading-relaxed font-medium"
  }
];

export default function BeliefsSection() {
  return (
    <section className="relative w-full py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="flex items-center justify-center mb-16 relative">
          <h2 className="font-handwriting text-5xl md:text-7xl text-[var(--color-foreground)] transform rotate-2 z-10 bg-white/50 px-8 py-2 rounded-lg backdrop-blur-sm shadow-sm border border-white/50">
            Things I Believe
          </h2>
          {/* Sparkle doodle */}
          <svg className="absolute -top-6 -right-2 md:right-1/4 w-12 h-12 text-[var(--color-brand-lemon)] transform rotate-12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
          <svg className="absolute -bottom-8 left-4 md:left-1/4 w-8 h-8 text-[var(--color-brand-pink)] transform -rotate-12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>
        
        <div className="flex flex-col gap-8 md:gap-16 relative">
          {/* Connecting dashed line in background */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] border-l-[3px] border-dashed border-[var(--color-brand-pink)]/30 -z-10 hidden md:block" />

          {beliefs.map((belief, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring", delay: index * 0.1 }}
              className={`relative z-10 hover:z-20 transition-all duration-300 hover:scale-105 cursor-default ${belief.className}`}
            >
              {belief.hasTape && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/70 shadow-[0_2px_4px_rgba(0,0,0,0.05)] transform -rotate-3 backdrop-blur-sm" />
              )}
              {belief.hasPin && (
                <>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-400 rounded-full shadow-[0_3px_6px_rgba(0,0,0,0.3)] z-10" />
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[2px] h-4 bg-gray-300 transform rotate-12" />
                </>
              )}
              <p className={belief.textClass}>
                {belief.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
