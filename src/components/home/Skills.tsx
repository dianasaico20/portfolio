"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

const skills = [
  {
    category: "Diseño y Prototipado",
    items: [
      "Figma · Adobe XD · Prototyping",
      "User Research · Design Systems"
    ]
  },
  {
    category: "Desarrollo Visual / No-Code",
    items: [
      "Framer · Webflow · WordPress",
      "Webflow CMS · Animations"
    ]
  },
  {
    category: "Tecnologías Front-end",
    items: [
      "Angular · Blazor",
      "HTML · CSS · JavaScript"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
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
            >
              <Card className="h-full bg-background-tertiary border-transparent hover:border-accent-primary/30 group shadow-2xl transition-all duration-300">
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <h3 className="font-display text-lg md:text-xl font-bold text-accent-primary mb-5 tracking-wide">
                    {skill.category}
                  </h3>
                  
                  {/* Subtle Divider */}
                  <div className="w-5/6 h-px bg-white/10 mb-8 transition-colors group-hover:bg-accent-primary/20" />
                  
                  <ul className="space-y-4 flex-1">
                    {skill.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-text-primary text-sm font-body font-medium tracking-wide">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
