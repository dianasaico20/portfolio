"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary to-highlight-primary rounded-3xl opacity-20 blur-2xl" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-background-tertiary">
                {/* Fallback image if there's an issue with loading the profile photo */}
                <Image
                  src="/assets/images/profile-photo.jpg"
                  alt="Profile"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Behind the <span className="text-accent-primary">Code</span>
            </h2>
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                Hello! I&apos;m a passionate Senior Frontend Engineer and UI/UX Designer dedicated to building immersive digital experiences that blur the line between code and art.
              </p>
              <p>
                With a strong foundation in modern web technologies and an eye for pixel-perfect design, I specialize in crafting high-performance, accessible, and scalable applications. My approach combines technical excellence with aesthetic refinement.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new design trends, contributing to open-source, or observing the night sky for inspiration.
              </p>
            </div>
            <div className="mt-10 flex gap-12 border-t border-border-muted pt-8 w-full">
              <div>
                <p className="font-display text-4xl font-bold text-accent-primary">15+</p>
                <p className="text-sm text-text-muted mt-1 uppercase tracking-wider">Years Exp.</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-highlight-primary">50+</p>
                <p className="text-sm text-text-muted mt-1 uppercase tracking-wider">Projects</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-text-primary">100%</p>
                <p className="text-sm text-text-muted mt-1 uppercase tracking-wider">Commitment</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
