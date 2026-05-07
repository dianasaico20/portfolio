"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { useSkills } from "@/hooks/useSkills";

export default function Skills() {
  const { skills } = useSkills();

  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden">
      {/* Smooth vertical gradient background to avoid sharp cuts and reveal stars */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-secondary/10 to-transparent pointer-events-none -z-10" />

      {/* Top and Bottom Section Dividers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      {/* Ambient Cosmic Illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-highlight-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-left"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            Habilidades
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <Card className="h-full bg-gradient-to-br from-background-tertiary/90 to-background-secondary/50 border border-white/5 backdrop-blur-md group shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(73,196,186,0.15)] hover:border-accent-primary/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                {/* Ambient corner glows for 3D depth */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent-primary/10 rounded-full blur-[50px] group-hover:bg-accent-primary/20 transition-colors duration-500 pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-highlight-primary/5 rounded-full blur-[50px] group-hover:bg-highlight-primary/15 transition-colors duration-500 pointer-events-none" />
                
                {/* Light gradient line on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100 z-20" />
                
                <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
                  <h3 className="font-display text-lg md:text-xl font-bold text-accent-primary mb-5 tracking-wide">
                    {skill.category}
                  </h3>

                  {/* Subtle Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-8 transition-colors group-hover:from-accent-primary/30" />

                  {/* Layout de Pills para Habilidades */}
                  <div className="flex flex-wrap gap-3 flex-1 content-start">
                    {skill.items.map((item, itemIdx) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={itemIdx}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 shadow-inner text-text-muted transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(73,196,186,0.2)] hover:text-accent-primary hover:border-accent-primary/50 hover:from-accent-primary/10 hover:to-transparent cursor-default group/pill relative overflow-hidden"
                        >
                          <Icon className="w-5 h-5 transition-transform duration-300 group-hover/pill:scale-110" />
                          <span className="text-sm font-body font-medium tracking-wide">
                            {item.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}