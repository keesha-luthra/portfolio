"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full relative z-10"
      >
        <h2 className="font-serif text-4xl md:text-6xl text-[var(--color-foreground)] mb-12 transform -rotate-1 px-4">
          My Story
        </h2>

        <div className="flex flex-col md:flex-row gap-12 relative z-10 px-4">
          
          {/* Main Text Block */}
          <div className="flex-1 space-y-8 text-2xl font-sans text-gray-700 leading-relaxed bg-white/80 p-8 md:p-12 shadow-[4px_8px_24px_rgba(0,0,0,0.06)] rounded-sm border border-white backdrop-blur-sm transform rotate-1">
            <p>I'm Keesha, a B.Tech Information Technology student at IIIT Allahabad.</p>
            <p>Long before I knew what a compiler was, I was the kid asking questions nobody around me seemed to care about. Most of them were completely random. Some of them still are.</p>
            <p>
              The difference now is that I can build things to find the answers. I don't dream about climbing a corporate ladder as much as I dream about creating something I can point to and proudly say, "I made that." 
            </p>
            <p>
              Whether it's a hackathon project, a side quest, or an idea that refuses to leave me alone, I love <span className="relative inline-block z-10 before:absolute before:-inset-1 before:bg-[var(--color-brand-lemon)]/50 before:-z-10 before:transform before:-skew-y-2 px-1 font-medium text-gray-800">turning curiosity into software</span>.
            </p>
          </div>

          {/* Secondary Text Block */}
          <div className="md:w-5/12 space-y-12 text-xl md:text-2xl font-sans text-gray-700 leading-relaxed md:pt-24 relative">
            
            {/* Note 1 */}
            <div className="bg-[var(--color-brand-mint)]/40 p-8 transform -rotate-2 rounded-sm shadow-sm relative">
              {/* Tape */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/60 shadow-[0_2px_4px_rgba(0,0,0,0.05)] transform rotate-3" />
              <p>I also think technology deserves to be more beautiful. Not just visually beautiful, but intuitive. Human. Thoughtful.</p>
              <p className="mt-4">The kind of product that feels obvious once you've used it.</p>
            </div>

            {/* Quote block */}
            <div className="pl-6 border-l-[6px] border-[var(--color-brand-pink)]/60 transform rotate-1">
              <p className="font-serif italic text-gray-600">
                And I want more women building the future of technology—not just sitting in meetings about it. I want to create products that genuinely help women in their everyday lives.
              </p>
            </div>

            {/* Note 2 */}
            <div className="bg-[#fcf6bd]/60 p-8 transform rotate-2 rounded-sm shadow-md relative mt-12">
              {/* Pin */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-400 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3)] z-10" />
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[2px] h-3 bg-gray-300 transform -rotate-12" />
              <p>
                My dream destination is <span className="font-handwriting text-4xl text-[var(--color-brand-pink)]">Pinterest</span>. Not because it's famous, but because it represents technology that feels creative, personal, organized, and joyful.
              </p>
            </div>

          </div>
        </div>
      </motion.div>
      
      {/* Decorative SVGs in Background */}
      <div className="absolute -left-12 top-24 hidden lg:flex items-center justify-center opacity-60">
        <svg width="80" height="80" viewBox="0 0 100 100" className="text-[var(--color-brand-lemon)] transform -rotate-12">
          <path d="M50 0 L55 40 L95 50 L55 60 L50 100 L45 60 L5 50 L45 40 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="absolute -right-8 top-1/2 hidden lg:flex items-center justify-center opacity-80 z-0">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-40 h-40 border-2 border-dashed border-[var(--color-brand-pink)] rounded-full absolute"
        />
        <span className="font-handwriting text-2xl text-[var(--color-brand-pink)] transform rotate-12">keep growing</span>
      </div>

      <div className="absolute left-1/3 -bottom-16 hidden lg:flex opacity-30">
        <svg width="100" height="40" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="3" className="text-gray-400">
          <path d="M0 20 Q 25 0, 50 20 T 100 20" strokeDasharray="5,5" />
        </svg>
      </div>
    </section>
  );
}
