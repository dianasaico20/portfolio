"use client";

import { motion, useMotionTemplate } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Mail, MapPin, Linkedin, Github } from "@/components/icons";
import { useContactCTA } from "@/hooks/useContactCTA";

export default function ContactCTA() {
  const {
    mouseX1,
    mouseY1,
    mouseX2,
    mouseY2,
    handleMouseMove1,
    handleMouseMove2,
  } = useContactCTA();

  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    setIsSubmitting(true);
    setResult("Enviando...");

    const formData = new FormData(form);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (accessKey) {
      formData.append("access_key", accessKey);
    }

    try {

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("¡Mensaje enviado con éxito!");

        setTimeout(() => {
          (e.target as HTMLFormElement).reset();
          setResult("");
        }, 3000);

      } else {
        setResult("Error al enviar. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error(error);
      setResult("Error de conexión.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 overflow-hidden">
      {/* Smooth vertical gradient background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background-secondary/10 to-transparent pointer-events-none -z-10" />

      {/* Bottom Section Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent z-20" />

      {/* Ambient Cosmic Illumination */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-highlight-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseMove={handleMouseMove1}
            className="group relative border border-white/5 rounded-3xl shadow-2xl overflow-hidden bg-background-primary/40 backdrop-blur-2xl"
          >
            {/* Animated internal gradient blobs for depth */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-accent-primary/10 blur-[100px] rounded-full group-hover:bg-accent-primary/20 transition-colors duration-700 pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-highlight-primary/5 blur-[100px] rounded-full group-hover:bg-highlight-primary/15 transition-colors duration-700 pointer-events-none" />
            
            {/* Subtle glass reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none z-0" />
            {/* Interactive Border Glow */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-20"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    600px circle at ${mouseX1}px ${mouseY1}px,
                    rgba(73, 196, 186, 0.6),
                    transparent 80%
                  )
                `,
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "1px",
              }}
            />

            <div className="relative z-10 p-8 md:p-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-8">
                Envíame un mensaje
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-3">
                  <label className="text-sm font-body text-text-primary/80 ml-1 block">
                    Nombre
                  </label>

                  <div className="relative group/input">
                    <div className="absolute inset-0 bg-accent-primary/20 blur-md rounded-xl opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-300" />

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Nombre completo"
                      className="relative w-full bg-background-tertiary/50 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-xl px-5 py-3.5 text-sm font-body text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent-primary focus:bg-background-tertiary/80 focus:shadow-[0_0_20px_rgba(73,196,186,0.15)] transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-body text-text-primary/80 ml-1 block">
                    Correo electrónico
                  </label>

                  <div className="relative group/input">
                    <div className="absolute inset-0 bg-accent-primary/20 blur-md rounded-xl opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-300" />

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Correo"
                      className="relative w-full bg-background-tertiary/50 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-xl px-5 py-3.5 text-sm font-body text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent-primary focus:bg-background-tertiary/80 focus:shadow-[0_0_20px_rgba(73,196,186,0.15)] transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-body text-text-primary/80 ml-1 block">
                    Mensaje
                  </label>

                  <div className="relative group/input">
                    <div className="absolute inset-0 bg-accent-primary/20 blur-md rounded-xl opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-300" />

                    <textarea
                      name="message"
                      required
                      placeholder="Cuéntame sobre tu proyecto"
                      rows={5}
                      className="relative w-full bg-background-tertiary/50 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-xl px-5 py-3.5 text-sm font-body text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent-primary focus:bg-background-tertiary/80 focus:shadow-[0_0_20px_rgba(73,196,186,0.15)] transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] resize-none"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="w-4 h-4 rounded border-white/10 bg-background-tertiary text-accent-primary focus:ring-accent-primary accent-accent-primary cursor-pointer"
                  />

                  <label
                    htmlFor="terms"
                    className="text-xs md:text-sm font-body text-text-muted cursor-pointer"
                  >
                    Acepto los términos y condiciones
                  </label>
                </div>

                {result && (
                  <p
                    className={`text-sm font-medium ${result.includes("éxito")
                      ? "text-[#49c4ba]"
                      : "text-red-400"
                      }`}
                  >
                    {result}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  className="mt-6 rounded-xl font-body font-bold text-base px-10 h-12"
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
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
            className="group relative rounded-3xl shadow-2xl overflow-hidden border border-white/5 bg-background-primary/40 backdrop-blur-2xl"
          >
            <div className="absolute inset-0">
              <Image
                src="/assets/images/fondoform.jpg"
                alt="Contact Background"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Dynamic Overlay that lightens on hover to reveal the image */}
              <div className="absolute inset-0 bg-background-primary/80 backdrop-blur-[8px] group-hover:bg-background-primary/60 group-hover:backdrop-blur-[4px] transition-all duration-700" />
              
              {/* Animated color blend over the image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/10 via-transparent to-highlight-primary/5 mix-blend-screen opacity-30 group-hover:opacity-80 transition-opacity duration-700" />
            </div>

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
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
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
                  <span className="text-lg">
                    dianasaico2024@gmail.com
                  </span>
                </div>

                <div className="flex items-center gap-4 text-text-primary font-body">
                  <MapPin className="w-6 h-6 text-text-primary" />
                  <span className="text-lg">
                    Ecuador / Remoto
                  </span>
                </div>

                <p className="text-sm md:text-base text-text-muted mt-10 max-w-sm leading-relaxed font-body font-medium">
                  Disponible para proyectos freelance y colaboraciones.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-12">
                <a
                  href="https://www.linkedin.com/in/diana-s-a9060b264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-background-tertiary flex items-center justify-center hover:bg-accent-primary transition-colors duration-300 group shadow-lg relative z-30"
                >
                  <Linkedin className="w-6 h-6 text-text-primary group-hover:text-background-primary transition-colors" />
                </a>

                <a
                  href="https://github.com/dianasaico20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-background-tertiary flex items-center justify-center hover:bg-accent-primary transition-colors duration-300 group shadow-lg relative z-30"
                >
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
