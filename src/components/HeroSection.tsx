"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-10 md:py-20">
      {/* Floating Blobs */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-10 right-20 w-32 h-32 bg-[var(--color-brand-pink)] rounded-full mix-blend-multiply filter blur-2xl opacity-70"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 left-1/2 w-40 h-40 bg-[var(--color-brand-mint)] rounded-full mix-blend-multiply filter blur-3xl opacity-60"
      />
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-10 left-10 w-36 h-36 bg-[var(--color-brand-lemon)] rounded-full mix-blend-multiply filter blur-2xl opacity-70"
      />

      {/* Text Content */}
      <div className="relative z-10 md:w-3/5 max-w-2xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-handwriting text-3xl md:text-5xl text-[var(--color-foreground)] mb-6 transform -rotate-2"
        >
          Hi, I'm Keesha.
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.2] text-[var(--color-foreground)] mb-8"
        >
          I collect questions. <br/>
          <span className="relative inline-block">
            Sometimes I turn them into software.
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-[var(--color-brand-blue)]" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-4 text-2xl md:text-3xl font-sans text-gray-700 leading-relaxed max-w-2xl"
        >
          <p>Sometimes they become hackathon projects.</p>
          <p>Sometimes they become side quests.</p>
          <p>And sometimes they keep me awake until I've built something that answers them.</p>
        </motion.div>
      </div>

      {/* Photo Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 4 }}
        transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
        className="relative z-10 md:w-2/5 flex justify-center mt-12 md:mt-0 mb-12 md:mb-0"
      >
        <div className="relative">
          {/* Tape Effect */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-white/40 backdrop-blur-md shadow-sm transform -rotate-3 z-20 rounded-sm" />
          
          {/* Photo */}
          <img 
            src="/self.jpeg" 
            alt="Keesha" 
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-sm border-[12px] md:border-[16px] border-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform transition-transform hover:scale-105 hover:rotate-1 duration-300"
          />
          
          {/* Little handwritten note and resume link */}
          <div className="absolute -bottom-16 -right-8 flex flex-col items-center md:items-end">
            <span className="font-handwriting text-3xl md:text-4xl text-[var(--color-brand-pink)] whitespace-nowrap transform rotate-6">
              that's me! ✿
            </span>
            <a 
              href="https://drive.google.com/file/d/1w_Xmt1LPyAODw3er21_ss1d7i8ZuCZDo/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-handwriting text-2xl md:text-3xl text-[var(--color-foreground)] bg-[var(--color-brand-lemon)]/80 px-3 py-1 mt-2 rounded-sm shadow-[2px_4px_10px_rgba(0,0,0,0.1)] hover:scale-105 hover:bg-[var(--color-brand-lemon)] transition-all whitespace-nowrap inline-block"
            >
              Want the boring version? Resume ↗
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
