"use client";

import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowLeft, Terminal, Globe } from "lucide-react";
import Link from "next/link";
import { use } from "react";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-24 pb-20 relative overflow-hidden">
      {/* Background Blobs for ambiance */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-brand-pink)] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-brand-lemon)] rounded-full mix-blend-multiply filter blur-[120px] opacity-30 -z-10" />
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[var(--color-foreground)] transition-colors mb-8 font-sans font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>

        {/* Notebook Paper Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-md rounded-xl border border-gray-200 shadow-xl overflow-hidden relative"
        >
          {/* Notebook binding/margin line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-red-200/60 z-0" />
          
          <div className="p-8 md:p-16 relative z-10 pl-16 md:pl-24">
            
            <header className="mb-12">
              <h1 className="font-serif text-5xl md:text-7xl text-[var(--color-foreground)] mb-6" style={{ color: project.color }}>
                {project.name}
              </h1>
              <p className="font-handwriting text-3xl md:text-4xl text-gray-600 transform -rotate-1 mb-8">
                "{project.narrative}"
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map(tech => (
                  <span key={tech} className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 font-sans border border-gray-200">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-foreground)] text-white rounded-full hover:shadow-lg transition-all font-sans font-medium hover:-translate-y-1">
                    <Terminal className="w-5 h-5" />
                    View Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-foreground)] border-2 border-[var(--color-foreground)] rounded-full hover:shadow-lg transition-all font-sans font-medium hover:-translate-y-1">
                    <Globe className="w-5 h-5" />
                    Live Project
                  </a>
                )}
                {project.devfolio && (
                  <a href={project.devfolio} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#276ef1] text-white rounded-full hover:shadow-lg transition-all font-sans font-medium hover:-translate-y-1">
                    <svg viewBox="0 0 136 136" className="w-5 h-5 fill-current"><path d="M112.52 68.22v32.6H84.14V78.43a10.63 10.63 0 00-10.64-10.64H63.29V35.19h10.21A38.86 38.86 0 01112.52 74v-5.78zM23.48 68.22v-32.6h28.38v22.39a10.63 10.63 0 0010.64 10.64h10.21v32.6H62.5A38.86 38.86 0 0123.48 62.4v5.82zM68 0C30.45 0 0 30.45 0 68s30.45 68 68 68 68-30.45 68-68S105.55 0 68 0zm0 119A51 51 0 11119 68a51.06 51.06 0 01-51 51z"/></svg>
                    Devfolio
                  </a>
                )}
              </div>
            </header>

            <div className="space-y-12 max-w-3xl">
              <section>
                <h2 className="font-serif text-4xl text-[var(--color-foreground)] mb-4">What it is</h2>
                <p className="font-sans text-2xl text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {project.description}
                </p>
              </section>

              <section>
                <h2 className="font-serif text-4xl text-[var(--color-foreground)] mb-4">Why I built it</h2>
                <p className="font-sans text-2xl text-gray-700 leading-relaxed italic whitespace-pre-wrap">
                  {project.why}
                </p>
              </section>

              {project.experience && (
                <section>
                  <h2 className="font-serif text-4xl text-[var(--color-foreground)] mb-4">My Experience</h2>
                  <p className="font-handwriting text-3xl md:text-4xl text-gray-600 leading-relaxed bg-yellow-50/50 p-8 rounded-lg border border-yellow-100 transform rotate-1 shadow-sm whitespace-pre-wrap">
                    {project.experience}
                  </p>
                </section>
              )}
            </div>

            {/* Professional Image Gallery */}
            {project.images && project.images.length > 0 && (
              <div className="mt-20 pt-12 border-t border-gray-200">
                <h2 className="font-serif text-3xl text-[var(--color-foreground)] mb-8">Gallery</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.images.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col gap-3"
                    >
                      <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-gray-50 flex items-center justify-center">
                        <img 
                          src={img.src} 
                          alt={img.caption || `${project.name} screenshot ${i + 1}`} 
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {img.caption && (
                        <p className="text-sm font-sans text-gray-500 text-center uppercase tracking-widest font-semibold">
                          {img.caption}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
