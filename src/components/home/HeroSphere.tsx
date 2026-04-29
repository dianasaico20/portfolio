"use client";

import { Code2, Monitor, Cpu, Database, Blocks, Terminal } from "@/components/icons";
import { useEffect, useState } from "react";

const icons = [
  { id: 1, Icon: Code2, color: "text-accent-primary", glow: "shadow-[0_0_15px_rgba(73,196,186,0.5)]" },
  { id: 2, Icon: Monitor, color: "text-highlight-primary", glow: "shadow-[0_0_15px_rgba(155,75,136,0.5)]" },
  { id: 3, Icon: Cpu, color: "text-accent-primary", glow: "shadow-[0_0_15px_rgba(73,196,186,0.5)]" },
  { id: 4, Icon: Database, color: "text-highlight-primary", glow: "shadow-[0_0_15px_rgba(155,75,136,0.5)]" },
  { id: 5, Icon: Blocks, color: "text-accent-primary", glow: "shadow-[0_0_15px_rgba(73,196,186,0.5)]" },
  { id: 6, Icon: Terminal, color: "text-text-primary", glow: "shadow-[0_0_15px_rgba(239,248,254,0.5)]" },
];

export default function HeroSphere() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]" />;

  return (
    <div className="relative flex items-center justify-center w-[300px] h-[300px] md:w-[500px] md:h-[500px] mx-auto" style={{ perspective: "1200px", transformStyle: "preserve-3d" }}>
      
      {/* Center Core */}
      <div className="absolute inset-0 m-auto w-12 h-12 md:w-16 md:h-16 bg-background-primary rounded-full shadow-[0_0_30px_rgba(73,196,186,0.5)] border border-accent-primary/40 flex items-center justify-center animate-core-float">
         <span className="font-display font-bold text-accent-primary text-xl md:text-2xl tracking-widest drop-shadow-[0_0_5px_rgba(73,196,186,0.8)]">C.</span>
      </div>

      {/* Rotating Sphere Container */}
      <div 
        className="w-full h-full absolute inset-0 m-auto animate-spin-slow"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* 3D Sphere Wireframe */}
        {/* Longitudinal rings */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={`long-${i}`}
            className="absolute inset-0 m-auto w-[260px] h-[260px] md:w-[440px] md:h-[440px] rounded-full border-[1px] border-white/10"
            style={{ transform: `rotateY(${i * 30}deg)` }}
          />
        ))}
        
        {/* Equator ring - the icons travel along this one */}
        <div 
          className="absolute inset-0 m-auto w-[260px] h-[260px] md:w-[440px] md:h-[440px] rounded-full border-[1.5px] border-accent-primary/50 shadow-[0_0_15px_rgba(73,196,186,0.2)_inset]" 
          style={{ transform: "rotateX(90deg)" }} 
        />

        {/* Orbiting Icons */}
        {icons.map((item, index) => {
          const angle = (index / icons.length) * 360;
          return (
            <div
              key={item.id}
              className="orbit-item absolute top-1/2 left-1/2 -mt-5 -ml-5 md:-mt-6 md:-ml-6 w-10 h-10 md:w-12 md:h-12"
              style={{
                "--angle": `${angle}deg`,
                transform: `rotateY(${angle}deg) translateZ(130px) rotateY(-${angle}deg)`,
              } as React.CSSProperties}
            >
              <div 
                className="w-full h-full flex items-center justify-center animate-reverse-spin"
              >
                {/* Node Styling */}
                <div className={`w-full h-full flex items-center justify-center bg-background-primary rounded-full border border-border-muted/50 ${item.glow} hover:scale-110 hover:border-accent-primary transition-all duration-300 cursor-pointer`}>
                  <item.Icon className={`w-4 h-4 md:w-5 md:h-5 ${item.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin-slow {
          from { transform: rotateY(0deg) rotateX(-15deg); }
          to { transform: rotateY(360deg) rotateX(-15deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(-360deg); }
        }
        @keyframes pulse-ring {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes core-float {
          0%, 100% { transform: translateY(0px) rotateY(0deg) rotateX(0deg); }
          33% { transform: translateY(-10px) rotateY(15deg) rotateX(5deg); }
          66% { transform: translateY(10px) rotateY(-15deg) rotateX(-5deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 25s linear infinite;
        }
        .animate-pulse-ring {
          animation: pulse-ring 4s ease-in-out infinite;
        }
        .animate-core-float {
          animation: core-float 10s ease-in-out infinite;
        }
        
        @media (min-width: 768px) {
          .orbit-item {
            transform: rotateY(var(--angle)) translateZ(220px) rotateY(calc(var(--angle) * -1)) !important;
          }
        }
      `}} />
    </div>
  );
}
