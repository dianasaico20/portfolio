"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-[2/1] bg-accent-primary/10 blur-[120px] rounded-[100%] pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-background-tertiary/40 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-24 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Inner border gradient */}
          <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-br from-accent-primary/20 to-highlight-primary/20 rounded-3xl pointer-events-none mask-border" />

          <h2 className="font-display text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Ready to start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-highlight-primary">Stellar</span> project?
          </h2>
          
          <p className="text-text-muted text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you have an idea in mind or need a technical partner to scale your vision, my inbox is always open. Let&apos;s build something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="primary" size="lg" className="w-full sm:w-auto text-lg px-12">
              Say Hello
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-12 bg-background-primary/50">
              Schedule a Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
