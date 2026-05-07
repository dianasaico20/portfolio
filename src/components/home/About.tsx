"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useAbout } from "@/hooks/useAbout";

export default function About() {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useAbout();

  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden">
      {/* Smooth vertical gradient background to avoid sharp cuts and reveal stars */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background-primary/20 to-transparent pointer-events-none -z-10" />

      {/* Top Section Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-accent-primary/20 to-transparent" />
      
      {/* Ambient Cosmic Illumination */}
      <div className="absolute top-1/2 -left-64 w-150 h-150 bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

          {/* Text Section (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Sobre Mí
            </h2>

            {/* Subtle Divider */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 256 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-px bg-linear-to-r from-accent-primary/80 to-transparent mb-8" 
            />

            <div className="group relative p-8 rounded-3xl bg-linear-to-br from-background-secondary/30 to-background-tertiary/10 border border-white/5 shadow-lg hover:border-accent-primary/20 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(73,196,186,0.1)] hover:-translate-y-1">
              <div className="absolute inset-0 bg-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none blur-xl" />
              <div className="space-y-6 text-text-muted text-base md:text-lg leading-relaxed font-body relative z-10">
                <p>
                  Soy <span className="text-text-primary font-semibold">diseñadora UX/UI</span> y me apasiona crear experiencias digitales que combinen <span className="text-accent-primary">usabilidad</span>, <span className="text-highlight-primary">estética</span> y soluciones centradas en el usuario. Me gusta comprender las necesidades reales y transformarlas en interfaces intuitivas y atractivas.
                </p>
                <p>
                  Actualmente estoy ampliando mis conocimientos en diseño de producto, centrándome en crecer técnica y visualmente con cada proyecto que emprendo.
                </p>
              </div>
            </div>

            {/* Download Button */}
            <a
              href="/assets/docs/CV_Diana Saico.pdf"
              download="CV_Diana Saico.pdf"
              className="mt-10 w-fit rounded-xl bg-background-secondary border border-accent-primary/30 hover:border-accent-primary text-text-primary px-8 h-12 inline-flex items-center justify-center gap-3 font-body font-bold transition-all hover:shadow-[0_0_15px_rgba(73,196,186,0.2)]"
            >
              Descargar CV
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </motion.div>

          {/* Image Section (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="relative w-full aspect-square max-w-112.5"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-linear-to-tr from-accent-primary to-highlight-primary rounded-full opacity-15 blur-2xl transform scale-105"
                style={{ translateZ: -30 }}
              />

              {/* Circular Image Container */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border border-white/5 bg-background-tertiary shadow-[0_0_50px_rgba(73,196,186,0.1)] group"
                style={{ translateZ: 20 }}
              >
                <div className="absolute inset-0 bg-linear-to-tr from-background-primary/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <Image
                  src="/assets/images/foto.png"
                  alt="Profile"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </motion.div>

              {/* Floating Badge 1 (Top Left) */}
              <motion.div 
                className="absolute top-12 -left-4 md:-left-8 bg-background-secondary/70 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full flex items-center gap-2 shadow-2xl transition-transform hover:scale-105 cursor-default"
                style={{ translateZ: 50 }}
              >
                <div className="w-2 h-2 rounded-full bg-accent-primary shadow-[0_0_8px_rgba(73,196,186,0.8)] animate-pulse" />
                <span className="text-xs font-display font-bold text-text-primary tracking-widest uppercase">UX/UI Design</span>
              </motion.div>
              
              {/* Floating Badge 2 (Bottom Right) */}
              <motion.div 
                className="absolute bottom-16 -right-2 md:-right-6 bg-background-secondary/70 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full flex items-center gap-2 shadow-2xl transition-transform hover:scale-105 cursor-default"
                style={{ translateZ: 60 }}
              >
                <div className="w-2 h-2 rounded-full bg-highlight-primary shadow-[0_0_8px_rgba(155,75,136,0.8)] animate-pulse" />
                <span className="text-xs font-display font-bold text-text-primary tracking-widest uppercase">Prototipado</span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
