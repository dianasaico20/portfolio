"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useFeaturedProjects } from "@/hooks/useFeaturedProjects";

export default function FeaturedProjects() {
  const { filters, activeFilter, setActiveFilter, filteredProjects } = useFeaturedProjects();

  return (
    <section id="projects" className="py-24 relative z-10 overflow-hidden">
      {/* Smooth vertical gradient background to avoid sharp cuts and reveal stars */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background-primary/20 to-transparent pointer-events-none -z-10" />
      
      {/* Top Section Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-accent-primary/20 to-transparent" />
      
      {/* Ambient Cosmic Illumination */}
      <div className="absolute top-1/4 -right-64 w-150 h-150 bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-64 w-150 h-150 bg-highlight-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
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
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-body transition-all duration-300 ${activeFilter === filter
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
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="h-full flex flex-col group">
                  <div className="relative h-64 md:h-80 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      quality={75}
                    />
                    <div className="absolute inset-0 bg-background-primary/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                    {/* Hover light line glow at bottom of image */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-background-secondary via-background-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none" />
                  </div>
                  <CardContent className="p-8 flex flex-col flex-1 relative overflow-hidden">
                    {/* Background glow on card content on hover */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-accent-primary/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-3 relative z-10 group-hover:text-accent-primary transition-colors duration-300">
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

                    <div className="mt-auto relative z-10 border-t border-white/5 pt-8 flex flex-wrap gap-4 before:absolute before:top-0 before:left-0 before:w-0 before:h-px before:bg-linear-to-r before:from-accent-primary before:to-transparent group-hover:before:w-full before:transition-all before:duration-700">
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
