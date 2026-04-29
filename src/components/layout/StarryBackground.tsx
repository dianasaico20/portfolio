"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StarryBackground() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]);
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; opacity: number }[]>([]);

  useEffect(() => {
    // Generate stars only on client to avoid hydration mismatch
    const generatedStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
    }));
    // eslint-disable-next-line
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background-primary">
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%]" // Extra height to account for parallax movement
      >
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background-primary/50 to-background-primary pointer-events-none" />
    </div>
  );
}
