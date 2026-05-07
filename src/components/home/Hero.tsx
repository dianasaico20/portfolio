"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import HeroSphere from "./HeroSphere";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start relative"
        >
          {/* Spatial Glow */}
          <div className="absolute top-1/3 -left-20 w-72 h-72 bg-accent-primary/20 blur-[120px] rounded-full pointer-events-none z-[-1]" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-highlight-primary/15 blur-[100px] rounded-full pointer-events-none z-[-1]" />

          {/* Greeting */}
          <span className="font-body text-accent-primary font-semibold text-lg md:text-xl tracking-wide mb-4">
            Hola, soy Diana Saico
          </span>

          {/* Main Headline */}
          <div className="relative mb-6">
            <div className="absolute -inset-4 bg-accent-primary/20 blur-[80px] rounded-full opacity-50 animate-pulse pointer-events-none" />
            <h1 className="relative font-display text-6xl sm:text-7xl md:text-8xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent-primary to-highlight-primary animate-text-gradient">
              Diseñadora<br />
              UX/UI & Web
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-text-muted max-w-lg leading-relaxed mb-10 font-body font-medium">
            Creando experiencias digitales innovadoras<br />
            con propósito y precisión.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Button variant="primary" size="lg" className="font-body font-bold tracking-wide rounded-2xl">
              Ver Proyectos
            </Button>
            <Button variant="outline" size="lg" className="font-body font-bold tracking-wide rounded-2xl">
              Contactar
            </Button>
          </div>

          {/* Badge at the bottom */}
          <div className="inline-flex items-center gap-3 border border-accent-primary/50 rounded-full px-6 py-2.5 text-xs font-display font-bold text-accent-primary uppercase tracking-widest bg-transparent backdrop-blur-sm">
            <span className="text-accent-primary text-xs scale-75 inline-block">✦</span>
            <span>DISPONIBLE PARA PROYECTOS FREELANCE</span>
            <span className="text-accent-primary text-xs scale-75 inline-block">✦</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <HeroSphere />
        </motion.div>
      </div>

      {/* Decorative gradient overlay & Spatial Glow */}
      <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[1200px] h-40 bg-background-primary/60 blur-[120px] rounded-full pointer-events-none" />      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-24 bg-accent-primary/10 blur-[80px] rounded-full pointer-events-none" />
    </section>
  );
}
