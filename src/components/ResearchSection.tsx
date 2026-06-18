"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function ResearchSection() {
  return (
    <section>
      <div className="mb-12">
        <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-foreground)] mb-4">Under The Hood</h2>
        <p className="font-sans text-gray-600 text-2xl">Because using tools isn't enough; I need to know how they break.</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative p-8 md:p-12 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
      >
        <div className="absolute top-0 right-12 w-24 h-32 bg-[var(--color-brand-lemon)]/20 -z-10 blur-xl" />
        
        <h2 className="font-serif text-2xl md:text-4xl text-[var(--color-foreground)] mb-6">
          EDM2 Guidance Ablation Study on ImageNet-64
        </h2>
        
        <div className="space-y-4 font-sans text-2xl text-gray-700 leading-relaxed">
          <p>
            An exploration into the mechanics of diffusion models. This research focuses on isolating and understanding the effects of guidance in the EDM2 framework when applied to the ImageNet-64 dataset.
          </p>
          <p className="font-handwriting text-2xl text-gray-500 pt-4 transform -rotate-1">
            "Sometimes the most fascinating discoveries happen when we take things apart."
          </p>
          <div className="pt-6">
            <Link href="/projects/edm2-guidance-ablation-study" className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md hover:bg-white hover:text-[var(--color-brand-blue)] transition-all border border-gray-100 text-sm uppercase tracking-widest font-semibold text-gray-600">
              <BookOpen className="w-4 h-4" />
              Read Study Notes
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
