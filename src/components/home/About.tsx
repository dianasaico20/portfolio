"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function About() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
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
            <div className="w-64 h-px bg-linear-to-r from-accent-primary/80 to-transparent mb-8" />
            <div className="space-y-6 text-text-muted text-base md:text-lg leading-relaxed font-body">
              <p>
                Soy diseñadora UX/UI y me apasiona crear experiencias digitales que combinen usabilidad, estética y soluciones centradas en el usuario. Me gusta comprender las necesidades de los usuarios y transformarlas en interfaces intuitivas y atractivas. Actualmente estoy ampliando mis conocimientos en diseño de UX/UI, centrándome en crecer con cada proyecto que emprendo.
              </p>
            </div>

            {/* Download Button */}
            <Button
              className="mt-10 rounded-xl bg-background-secondary border border-accent-primary/30 hover:border-accent-primary text-text-primary px-8 h-12 flex items-center gap-3 font-body font-bold transition-all shadow-none hover:shadow-[0_0_15px_rgba(73,196,186,0.2)]"
            >
              Descargar CV
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </Button>
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
                className="absolute inset-0 bg-linear-to-tr from-accent-primary to-highlight-primary rounded-full opacity-15 blur-2xl transform scale-[1.02]"
                style={{ translateZ: -30 }}
              />

              {/* Circular Image Container */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border border-white/5 bg-background-tertiary shadow-2xl"
                style={{ translateZ: 20 }}
              >
                <Image
                  src="/assets/images/foto.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
