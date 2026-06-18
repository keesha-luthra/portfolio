"use client";

import { motion } from "framer-motion";

interface MaskingTapeHeaderProps {
  text: string;
  rotate?: number;
}

export default function MaskingTapeHeader({ text, rotate = -2 }: MaskingTapeHeaderProps) {
  return (
    <div className="flex justify-center items-center py-16 md:py-24 relative overflow-visible w-full pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: rotate - 2 }}
        whileInView={{ opacity: 1, scale: 1, rotate }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", bounce: 0.4, delay: 0.1 }}
        className="relative z-10"
      >
        {/* The tape piece */}
        <div 
          className="px-8 py-3 bg-[#e8e4c9] opacity-80 shadow-[0_1px_3px_rgba(0,0,0,0.1)] relative pointer-events-auto"
          style={{
            // Washi tape effect: rough cut edges using clipPath
            clipPath: "polygon(1% 0%, 99% 1%, 98% 99%, 2% 100%)",
            backdropFilter: "blur(2px)",
          }}
        >
          {/* subtle paper texture inside the tape */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
          
          <h2 
            className="text-4xl md:text-5xl text-[#2a2a2a] tracking-widest m-0 mix-blend-multiply opacity-80 font-handwriting transform -rotate-1"
          >
            {text}
          </h2>
        </div>
      </motion.div>
    </div>
  );
}
