"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pt-32 pb-24 relative z-10">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-highlight-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative border border-white/5 rounded-3xl shadow-2xl overflow-hidden bg-background-primary/40 backdrop-blur-2xl p-8 md:p-14"
          >
            {/* Ambient internal glows */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-highlight-primary/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent-primary/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none z-0" />

            <div className="relative z-10">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-highlight-primary to-text-primary mb-8 text-center">
                Términos de Servicio
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-highlight-primary to-transparent mx-auto mb-12 rounded-full" />

              <div className="space-y-10 text-text-muted font-body text-base md:text-lg leading-relaxed">
                <p className="text-xl text-text-primary font-medium text-center mb-10">
                  Al acceder y navegar por este portafolio, aceptas los siguientes términos enfocados en proteger el trabajo creativo y profesional aquí presentado.
                </p>

                <div className="space-y-4">
                  <h2 className="text-2xl font-display font-bold text-text-primary flex items-center gap-3">
                    <span className="text-highlight-primary">✦</span> Propiedad Intelectual
                  </h2>
                  <p className="pl-6 border-l-2 border-white/10">
                    Todos los diseños, wireframes, prototipos, recursos visuales y proyectos presentados en este portafolio (incluyendo específicamente el sistema de ventas <strong>"Vendly"</strong>) son propiedad intelectual exclusiva de <strong>Diana Saico</strong> en su rol de Diseñadora UI/UX. Todos los derechos están reservados.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-display font-bold text-text-primary flex items-center gap-3">
                    <span className="text-accent-primary">✦</span> Uso Restringido
                  </h2>
                  <p className="pl-6 border-l-2 border-white/10">
                    Queda estrictamente prohibida la reproducción, copia, distribución, modificación o uso comercial de cualquier material, diseño o proyecto mostrado en esta web sin mi autorización previa, explícita y por escrito.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-display font-bold text-text-primary flex items-center gap-3">
                    <span className="text-highlight-primary">✦</span> Propósito del Portafolio
                  </h2>
                  <p className="pl-6 border-l-2 border-white/10">
                    Este sitio web tiene fines estrictamente demostrativos y profesionales. Su objetivo es exhibir mis habilidades, experiencia técnica, visión estética y procesos de diseño a posibles clientes, reclutadores o empleadores.
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
