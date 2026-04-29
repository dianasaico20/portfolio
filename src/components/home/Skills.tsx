"use client";

import { motion } from "framer-motion";
import { Layers, MonitorSmartphone, Database, Blocks, Zap, Shield } from "@/components/icons";
import { Card, CardContent } from "@/components/ui/Card";

const skills = [
  {
    category: "Frontend Architecture",
    icon: Layers,
    items: ["React & Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend & Systems",
    icon: Database,
    items: ["Node.js", "PostgreSQL", "GraphQL", "REST APIs"],
  },
  {
    category: "UI/UX Design",
    icon: MonitorSmartphone,
    items: ["Figma", "Design Systems", "Accessibility", "Responsive Design"],
  },
  {
    category: "DevOps & Cloud",
    icon: Blocks,
    items: ["Vercel", "AWS", "Docker", "CI/CD Pipelines"],
  },
  {
    category: "Performance",
    icon: Zap,
    items: ["Core Web Vitals", "Lighthouse", "SEO", "Optimization"],
  },
  {
    category: "Security & Testing",
    icon: Shield,
    items: ["Jest / Cypress", "OWASP", "Auth0 / NextAuth", "Data Privacy"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-background-secondary/20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Technical <span className="text-highlight-primary">Arsenal</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            A comprehensive toolkit designed to build robust, scalable, and visually stunning applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full bg-background-primary/50 border-white/5 hover:border-highlight-primary/50 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-highlight-soft flex items-center justify-center mb-6 text-highlight-primary group-hover:scale-110 transition-transform">
                    <skill.icon size={24} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-text-primary mb-4">
                    {skill.category}
                  </h3>
                  <ul className="space-y-2">
                    {skill.items.map(item => (
                      <li key={item} className="text-text-muted flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-highlight-primary/50 before:rounded-full before:mr-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
