"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const filters = ["Todos", "Diseño UX/UI", "Diseño UI", "Desarrollo"];

const projects = [
  {
    id: 1,
    title: "Sistema de Ventas Vendly",
    description: "Solución integral para gestión de ventas B2B para tiendas de tecnología",
    image: "/assets/images/placeholder-project.jpg",
    tags: [
      { label: "UX/UI", variant: "default" },
      { label: "Figma", variant: "default" },
      { label: "B2B", variant: "highlight" }
    ],
    category: "Diseño UX/UI"
  },
  {
    id: 2,
    title: "Sistema de Ventas Vendly",
    description: "Solución integral para gestión de ventas B2B para tiendas de tecnología",
    image: "/assets/images/placeholder-project.jpg",
    tags: [
      { label: "UX/UI", variant: "default" },
      { label: "Figma", variant: "default" },
      { label: "B2B", variant: "highlight" }
    ],
    category: "Diseño UX/UI"
  },
  {
    id: 3,
    title: "Sistema de Ventas Vendly",
    description: "Solución integral para gestión de ventas B2B para tiendas de tecnología",
    image: "/assets/images/placeholder-project.jpg",
    tags: [
      { label: "UX/UI", variant: "default" },
      { label: "Figma", variant: "default" },
      { label: "B2B", variant: "highlight" }
    ],
    category: "Diseño UX/UI"
  },
  {
    id: 4,
    title: "Sistema de Ventas Vendly",
    description: "Solución integral para gestión de ventas B2B para tiendas de tecnología",
    image: "/assets/images/placeholder-project.jpg",
    tags: [
      { label: "UX/UI", variant: "default" },
      { label: "Figma", variant: "default" },
      { label: "B2B", variant: "highlight" }
    ],
    category: "Diseño UX/UI"
  }
];

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredProjects = projects.filter(p => 
    activeFilter === "Todos" ? true : p.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Proyectos
          </h2>
          
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-body transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-accent-primary text-background-primary font-bold"
                    : "border border-accent-primary text-text-primary hover:bg-accent-soft font-medium"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="h-full flex flex-col group">
                  <div className="relative h-[250px] md:h-[320px] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <CardContent className="p-8 flex flex-col flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-3">
                      {project.title}
                    </h3>
                    <p className="text-text-muted text-sm md:text-base mb-6 leading-relaxed font-body">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <Badge 
                          key={tag.label} 
                          variant={tag.variant as "default" | "highlight" | "outline"} 
                          className="font-body text-xs rounded-full px-3 py-1 font-semibold tracking-wide"
                        >
                          {tag.label}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-auto border-t border-white/5 pt-8 flex flex-wrap gap-4">
                      <Button variant="primary" size="md" className="rounded-xl font-body font-bold text-sm w-full sm:w-auto px-8">
                        Ver caso
                      </Button>
                      <Button variant="outline" size="md" className="rounded-xl font-body font-bold text-sm w-full sm:w-auto px-8">
                        Prototipo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
