"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  colorClass: string;
  opacityClass: string;
  isPulsing: boolean;
  delay: string;
  duration: string;
};

export default function StarryBackground() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 350 }).map((_, i) => {
      const colors = ["bg-white", "bg-white", "bg-white", "bg-pink-300", "bg-fuchsia-400"];
      // Usamos clases de Tailwind para la opacidad en lugar de estilos en línea
      const opacities = ["opacity-30", "opacity-50", "opacity-70", "opacity-100"];

      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        colorClass: colors[Math.floor(Math.random() * colors.length)],
        opacityClass: opacities[Math.floor(Math.random() * opacities.length)],
        isPulsing: Math.random() > 0.5, // 50% de probabilidad de que la estrella tenga pulso
        delay: `${Math.random() * 3}s`, // Desfase aleatorio para que no parpadeen al unísono
        duration: `${Math.random() * 3 + 2}s`, // Duración del latido (entre 2 y 5 segundos)
      };
    });

    // eslint-disable-next-line
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background-primary">
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute rounded-full ${star.colorClass} ${star.opacityClass} ${star.isPulsing ? "animate-pulse" : ""}`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              // Le pasamos el retraso y duración calculados a CSS
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background-primary/50 to-background-primary pointer-events-none" />
    </div>
  );
}