"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Mail, MapPin, Linkedin, Github } from "@/components/icons";

export default function ContactCTA() {
  const mouseX1 = useMotionValue(0);
  const mouseY1 = useMotionValue(0);
  const mouseX2 = useMotionValue(0);
  const mouseY2 = useMotionValue(0);

  function handleMouseMove1({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX1.set(clientX - left);
    mouseY1.set(clientY - top);
  }

  function handleMouseMove2({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX2.set(clientX - left);
    mouseY2.set(clientY - top);
  }

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseMove={handleMouseMove1}
            className="group relative bg-background-primary border border-white/5 rounded-3xl shadow-2xl"
          >
            {/* Interactive Border Glow */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-3xl  opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-20"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    600px circle at ${mouseX1}px ${mouseY1}px,
                    rgba(73, 196, 186, 0.6),
                    transparent 80%
                  )
                `,
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "1px",
              }}
            />

            <div className="relative z-10 p-8 md:p-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-8">
                Envíame un mensaje
              </h2>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-body text-text-primary/80">Nombre</label>
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full bg-background-tertiary border border-white/5 rounded-xl px-5 py-3.5 text-sm font-body text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary transition-colors shadow-inner"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-body text-text-primary/80">Correo electrónico</label>
                  <input
                    type="email"
                    placeholder="Correo"
                    className="w-full bg-background-tertiary border border-white/5 rounded-xl px-5 py-3.5 text-sm font-body text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary transition-colors shadow-inner"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-body text-text-primary/80">Mensaje</label>
                  <textarea
                    placeholder="Cuéntame sobre tu proyecto"
                    rows={5}
                    className="w-full bg-background-tertiary border border-white/5 rounded-xl px-5 py-3.5 text-sm font-body text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary transition-colors resize-none shadow-inner"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 rounded border-white/10 bg-background-tertiary text-accent-primary focus:ring-accent-primary accent-accent-primary cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-xs md:text-sm font-body text-text-muted cursor-pointer">
                    Acepto los términos y condiciones
                  </label>
                </div>

                <Button variant="primary" className="mt-6 rounded-xl font-body font-bold text-base px-10 h-12">
                  Enviar
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Right Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onMouseMove={handleMouseMove2}
            className="group relative rounded-3xl shadow-2xl"
          >
            {/* Original Static Container (prevents overflow for the image but lets border glow spill nicely) */}
            <div className="absolute inset-0 rounded-3xl  overflow-hidden border border-white/5">
              {/* Background Image */}
              <Image
                src="/assets/images/fondoform.jpg"
                alt="Contact Background"
                fill
                className="object-cover"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-background-primary/60 backdrop-blur-[2px]" />
            </div>

            {/* Interactive Border Glow */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-20"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    600px circle at ${mouseX2}px ${mouseY2}px,
                    rgba(73, 196, 186, 0.6),
                    transparent 80%
                  )
                `,
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "1px",
              }}
            />

            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-10">
                Contáctame
              </h2>

              <div className="space-y-8 flex-1">
                <div className="flex items-center gap-4 text-text-primary font-body">
                  <Mail className="w-6 h-6 text-text-primary" />
                  <span className="text-lg">dianasaico2024@gmail.com</span>
                </div>

                <div className="flex items-center gap-4 text-text-primary font-body">
                  <MapPin className="w-6 h-6 text-text-primary" />
                  <span className="text-lg">Ecuador / Remoto</span>
                </div>

                <p className="text-sm md:text-base text-text-muted mt-10 max-w-sm leading-relaxed font-body font-medium">
                  Disponible para proyectos freelance y colaboraciones.
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-12">
                <a href="https://www.linkedin.com/in/diana-s-a9060b264" className="w-14 h-14 rounded-full bg-background-tertiary flex items-center justify-center hover:bg-accent-primary transition-colors duration-300 group shadow-lg relative z-30">
                  <Linkedin className="w-6 h-6 text-text-primary group-hover:text-background-primary transition-colors" />
                </a>
                <a href="https://github.com/dianasaico20" className="w-14 h-14 rounded-full bg-background-tertiary flex items-center justify-center hover:bg-accent-primary transition-colors duration-300 group shadow-lg relative z-30">
                  <Github className="w-6 h-6 text-text-primary group-hover:text-background-primary transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
