"use client";

import { motion } from "framer-motion";

const currently = [
  { 
    label: "Learning", 
    value: "How to live without my coding agent.",
    containerClass: "bg-[#fef08a]/60 shadow-[2px_4px_12px_rgba(0,0,0,0.06)] transform rotate-2 p-6 md:p-8 aspect-square flex flex-col justify-center rounded-sm max-w-[260px]",
    labelClass: "font-handwriting text-2xl text-gray-500 mb-2 transform -rotate-2",
    valueClass: "font-serif text-2xl md:text-3xl text-gray-800 leading-snug"
  },
  { 
    label: "Building", 
    value: "A side project that may or may not consume my entire summer.",
    containerClass: "bg-white shadow-sm border border-gray-100 border-l-[6px] border-l-red-300 transform -rotate-1 p-6 md:p-8 rounded-r-md min-w-[280px] max-w-[340px] relative",
    labelClass: "font-sans uppercase tracking-[0.15em] text-xs font-bold text-gray-400 mb-3 block",
    valueClass: "font-serif text-2xl text-gray-800 leading-relaxed",
    // Adding subtle notebook lines
    style: { backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, #f3f4f6 31px, #f3f4f6 32px)", backgroundPosition: "0 10px" }
  },
  { 
    label: "Exploring", 
    value: "My hometown. I keep forgetting how much I love it.",
    containerClass: "bg-white p-5 pb-16 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-gray-50 transform rotate-3 rounded-sm max-w-[280px]",
    labelClass: "font-sans uppercase tracking-widest text-[10px] font-bold text-gray-400 mb-4 text-center border-b border-gray-100 pb-2 block",
    valueClass: "font-handwriting text-3xl text-gray-800 text-center mt-6 block leading-tight"
  },
  { 
    label: "Reading", 
    value: "I don't read.",
    containerClass: "bg-[var(--color-brand-mint)]/40 shadow-sm transform -rotate-2 px-6 py-8 relative max-w-[240px]",
    labelClass: "font-serif italic text-lg text-gray-600 mb-2 block",
    valueClass: "font-sans font-bold text-2xl text-gray-800 tracking-tight"
  },
  { 
    label: "Dreaming About", 
    value: "Pinterest, obviously.",
    containerClass: "bg-[#fdfbf7] shadow-md border-[8px] border-white transform rotate-1 p-6 md:p-8 rounded-sm relative max-w-[320px]",
    labelClass: "font-sans uppercase tracking-[0.2em] text-[11px] font-bold text-[var(--color-brand-pink)] mb-4 block",
    valueClass: "font-serif text-3xl text-gray-800",
    hasStamp: true
  }
];

import MaskingTapeHeader from "@/components/MaskingTapeHeader";

export default function CurrentlySection() {
  return (
    <section className="relative max-w-7xl mx-auto w-full py-12 md:py-20">
      <div className="mb-16">
        <MaskingTapeHeader text="RENT FREE IN MY HEAD" rotate={-2} />
      </div>
      
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 md:gap-12 relative">
        {currently.map((item, index) => (
          <motion.div 
            key={item.label}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
            className={`${item.containerClass} hover:scale-105 hover:shadow-xl hover:z-10 transition-all duration-300 cursor-default`}
            style={item.style}
          >
            {item.hasStamp && (
              <div className="absolute top-4 right-4 w-10 h-12 border-2 border-dashed border-gray-300/70 opacity-60" />
            )}
            <span className={item.labelClass}>
              {item.label}
            </span>
            <span className={item.valueClass}>
              {item.value}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
