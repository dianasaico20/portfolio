"use client";

import { Code2, Monitor, Cpu, Database, Blocks, Terminal } from "@/components/icons";
import { useEffect, useState } from "react";

const icons = [
  { id: 1, Icon: Code2, color: "text-accent-primary" },
  { id: 2, Icon: Monitor, color: "text-highlight-primary" },
  { id: 3, Icon: Cpu, color: "text-accent-primary" },
  { id: 4, Icon: Database, color: "text-highlight-primary" },
  { id: 5, Icon: Blocks, color: "text-accent-primary" },
  { id: 6, Icon: Terminal, color: "text-text-primary" },
];

export default function HeroSphere() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-75 h-75 md:w-125 md:h-125" />;

  return (
    <div className="relative flex items-center justify-center w-75 h-75 md:w-125 md:h-125" style={{ perspective: "1000px" }}>
      {/* Orbital Lines */}
      <div className="absolute inset-0 m-auto w-62.5 h-62.5 md:w-100 md:h-100 rounded-full border border-dashed border-white/10" style={{ transform: "rotateX(60deg)" }} />
      <div className="absolute inset-0 m-auto w-50 h-50 md:w-75 md:h-75 rounded-full border border-dashed border-white/10" style={{ transform: "rotateX(60deg) rotateY(45deg)" }} />
      <div className="absolute inset-0 m-auto w-70 h-70 md:w-112.5 md:h-112.5 rounded-full border border-dashed border-white/10" style={{ transform: "rotateX(60deg) rotateY(-45deg)" }} />

      {/* Center Core */}
      <div className="absolute inset-0 m-auto w-16 h-16 md:w-24 md:h-24 bg-background-primary rounded-full shadow-[0_0_50px_rgba(73,196,186,0.3)] border border-accent-primary/30 flex items-center justify-center z-10 backdrop-blur-md">
         <span className="font-display font-bold text-accent-primary text-2xl md:text-4xl tracking-widest">C.</span>
      </div>

      {/* Rotating Sphere Container */}
      <div 
        className="w-full h-full absolute inset-0 m-auto animate-spin-slow"
        style={{ transformStyle: "preserve-3d" }}
      >
        {icons.map((item, index) => {
          const angle = (index / icons.length) * 360;
          return (
            <div
              key={item.id}
              className="absolute top-1/2 left-1/2 -mt-6 -ml-6 md:-mt-8 md:-ml-8 w-12 h-12 md:w-16 md:h-16 bg-background-tertiary/80 backdrop-blur-md rounded-full border border-border-muted flex items-center justify-center shadow-lg"
              style={{
                "--angle": `${angle}deg`,
                transform: `rotateY(${angle}deg) translateZ(150px) rotateY(-${angle}deg)`,
              } as React.CSSProperties}
            >
              <div 
                className="w-full h-full flex items-center justify-center animate-reverse-spin"
              >
                <item.Icon className={`w-5 h-5 md:w-7 md:h-7 ${item.color}`} />
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
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 20s linear infinite;
        }
        
        @media (min-width: 768px) {
          .animate-spin-slow > div {
            transform: rotateY(var(--angle)) translateZ(220px) rotateY(calc(var(--angle) * -1)) !important;
          }
        }
      `}} />
    </div>
  );
}
