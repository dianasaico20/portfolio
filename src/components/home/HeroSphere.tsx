"use client";

import { useHeroSphere } from "@/hooks/useHeroSphere";

export default function HeroSphere() {
  const { mounted, icons } = useHeroSphere();

  if (!mounted) return <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]" />;

  return (
    <div className="relative flex items-center justify-center w-[300px] h-[300px] md:w-[500px] md:h-[500px] mx-auto" style={{ perspective: "1200px", transformStyle: "preserve-3d" }}>
      
      {/* Center Core */}
      <div className="absolute inset-0 m-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-[radial-gradient(circle_at_center,rgba(73,196,186,0.8)_0%,transparent_80%)] shadow-[0_0_40px_rgba(73,196,186,0.6)] border border-accent-primary/50 animate-pulse flex items-center justify-center z-10">
         <div className="w-1/2 h-1/2 bg-white rounded-full blur-xs opacity-80" />
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
            className="absolute inset-0 m-auto w-[260px] h-[260px] md:w-[440px] md:h-[440px] rounded-full border border-white/10"
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
    
    </div>
  );
}
