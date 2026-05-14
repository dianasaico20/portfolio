"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pt-32 pb-24 relative z-10">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative border border-white/5 rounded-3xl shadow-2xl overflow-hidden bg-background-primary/40 backdrop-blur-2xl p-8 md:p-14"
          >
            {/* Ambient internal glows */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-accent-primary/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-highlight-primary/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none z-0" />

            <div className="relative z-10">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent-primary to-text-primary mb-8 text-center">
                Políticas de Privacidad
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-transparent mx-auto mb-12 rounded-full" />

              <div className="space-y-10 text-text-muted font-body text-base md:text-lg leading-relaxed">
                <p className="text-xl text-text-primary font-medium text-center mb-10">
                  Tu privacidad es fundamental. Esta política describe cómo se maneja la información en este portafolio.
                </p>

                <div className="space-y-4">
                  <h2 className="text-2xl font-display font-bold text-text-primary flex items-center gap-3">
                    <span className="text-accent-primary">✦</span> Recopilación de Datos
                  </h2>
                  <p className="pl-6 border-l-2 border-white/10">
                    Solo se recopilan datos básicos de contacto (como tu nombre y correo electrónico) exclusivamente en caso de que decidas utilizar el formulario de contacto para comunicarte conmigo. Esta información se emplea únicamente para responder a tus consultas.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-display font-bold text-text-primary flex items-center gap-3">
                    <span className="text-highlight-primary">✦</span> Analíticas del Sitio
                  </h2>
                  <p className="pl-6 border-l-2 border-white/10">
                    Se emplean herramientas de analítica simples para monitorear el tráfico del sitio web y mejorar continuamente la experiencia de usuario. Estos datos son completamente anónimos, estadísticos y en ningún caso te identifican de forma personal.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-display font-bold text-text-primary flex items-center gap-3">
                    <span className="text-accent-primary">✦</span> Uso y Compartición
                  </h2>
                  <p className="pl-6 border-l-2 border-white/10">
                    La información proporcionada a través de este sitio no se comparte, vende, ni distribuye a terceros bajo ninguna circunstancia. Tu información se mantiene estrictamente confidencial.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
