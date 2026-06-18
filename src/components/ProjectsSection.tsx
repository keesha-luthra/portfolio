"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import MaskingTapeHeader from "@/components/MaskingTapeHeader";

// Filter out the research project so it doesn't appear in the main projects grid
const displayProjects = projectsData.filter(p => p.slug !== "edm2-guidance-ablation-study");

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative max-w-7xl mx-auto w-full">
      <div className="mb-12 md:mb-24">
        <MaskingTapeHeader text="THINGS I'VE BUILT" rotate={-2} />
      </div>

      {/* Scrapbook Entries Layout */}
      <div className="flex flex-col gap-24 md:gap-40 pt-8 pb-24 relative w-full items-center">
        {/* Background decorative doodles */}
        <svg className="absolute top-1/4 left-10 w-32 h-32 text-gray-200 -z-10 transform -rotate-12 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10,50 Q30,10 50,50 T90,50" />
          <path d="M20,60 Q40,20 60,60 T100,60" />
        </svg>

        {displayProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          const entryRotate = isEven ? -1 : 1;
          const photoRotate = isEven ? 4 : -5;
          const photoPosition = isEven 
            ? "top-[-30px] right-[-10px] md:top-8 md:-right-24 lg:-right-32" 
            : "top-[-30px] left-[-10px] md:top-8 md:-left-24 lg:-left-32";

          return (
            <div key={project.slug} className="relative w-full md:w-[85%] lg:w-[75%] max-w-4xl flex items-center justify-center">
              <Link 
                href={`/projects/${project.slug}`} 
                className="block group w-full relative z-10 transition-transform duration-300 hover:scale-[1.01] hover:z-30"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.1, type: "spring", bounce: 0.3 }}
                  className="relative w-full"
                >
                  {/* Main Paper Entry */}
                  <div 
                    className="relative flex flex-col h-full p-8 md:p-12 lg:p-16 bg-[#FDFBF7] shadow-[2px_4px_16px_rgba(0,0,0,0.06)] border border-[#E5E0D8] cursor-pointer overflow-hidden"
                    style={{
                      transform: `rotate(${entryRotate}deg)`,
                      // Subtle noise texture, much lighter than before
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E\")",
                    }}
                  >
                    {/* Washi Tape on top of entry */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#e8e4c9] opacity-80 shadow-sm transform rotate-1 rounded-sm z-20 backdrop-blur-sm" 
                         style={{ clipPath: "polygon(2% 0%, 98% 1%, 100% 98%, 1% 100%)" }} />
                    
                    {/* Color Accent Line */}
                    <div className="absolute top-0 left-0 w-2 h-full opacity-60" style={{ backgroundColor: project.color }} />

                    <div className={`${isEven ? 'md:pr-40 lg:pr-56' : 'md:pl-40 lg:pl-56'} w-full`}>
                      <h3 className="font-serif text-4xl md:text-6xl text-[#3a3a3a] mt-2 mb-4 group-hover:text-[var(--color-brand-pink)] transition-colors">
                        {project.name}
                      </h3>
                      
                      <p className="font-handwriting text-3xl md:text-4xl text-gray-500 mb-8 transform -rotate-1">
                        "{project.narrative}"
                      </p>
                      
                      <div className="space-y-6 mb-12 flex-grow">
                        <div>
                          <span className="text-lg font-handwriting tracking-wider text-gray-400 block mb-2">What it is</span>
                          <p className="font-sans text-xl md:text-2xl text-gray-700 leading-relaxed whitespace-pre-line">{project.description}</p>
                        </div>
                      </div>

                      <div className="flex items-end justify-between mt-auto pt-8 border-t-[2px] border-dashed border-gray-200">
                        <div className="flex flex-wrap gap-2 max-w-[70%]">
                          {project.tech.slice(0, 4).map(tech => (
                            <span key={tech} className="px-3 py-1.5 rounded-sm text-sm font-medium bg-gray-100 text-gray-600 border border-gray-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <span className="text-xl font-handwriting tracking-wider text-gray-500 group-hover:text-[#3a3a3a] transition-colors">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* External Taped Photo */}
                  {project.images && project.images.length > 0 && (
                    <div 
                      className={`absolute ${isEven ? 'top-[-20px] right-2 md:top-12 md:-right-16' : 'top-[-20px] left-2 md:top-12 md:-left-16'} z-20 bg-white p-3 pb-8 md:p-4 md:pb-12 shadow-[2px_8px_20px_rgba(0,0,0,0.12)] border border-gray-200 w-48 md:w-64 lg:w-80 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-0`}
                      style={{ transform: `rotate(${photoRotate}deg)` }}
                    >
                      {/* Photo Tape */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#e8e4c9]/80 shadow-sm transform -rotate-3 z-30" 
                           style={{ clipPath: "polygon(1% 0%, 99% 2%, 98% 99%, 2% 100%)" }} />
                      <div className="w-full aspect-[4/3] relative overflow-hidden border border-gray-100 bg-gray-50">
                        <img 
                          src={project.images[0].src} 
                          alt={project.name}
                          className="absolute inset-0 w-full h-full object-cover filter contrast-95 sepia-[0.1]"
                        />
                      </div>
                      <span className="absolute bottom-2 md:bottom-3 left-0 w-full text-center font-handwriting text-base md:text-lg text-gray-500">
                        fig {index + 1}.
                      </span>
                    </div>
                  )}
                </motion.div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
