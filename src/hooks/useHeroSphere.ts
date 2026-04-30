import { useEffect, useState } from "react";
import { Palette, PenTool, Layers, MousePointer, Figma, Smartphone } from "@/components/icons";

export const icons = [
  { id: 1, Icon: Palette, color: "text-accent-primary", glow: "shadow-[0_0_15px_rgba(73,196,186,0.5)]" },
  { id: 2, Icon: PenTool, color: "text-highlight-primary", glow: "shadow-[0_0_15px_rgba(155,75,136,0.5)]" },
  { id: 3, Icon: Layers, color: "text-accent-primary", glow: "shadow-[0_0_15px_rgba(73,196,186,0.5)]" },
  { id: 4, Icon: MousePointer, color: "text-highlight-primary", glow: "shadow-[0_0_15px_rgba(155,75,136,0.5)]" },
  { id: 5, Icon: Figma, color: "text-accent-primary", glow: "shadow-[0_0_15px_rgba(73,196,186,0.5)]" },
  { id: 6, Icon: Smartphone, color: "text-text-primary", glow: "shadow-[0_0_15px_rgba(239,248,254,0.5)]" },
];

export function useHeroSphere() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  return { mounted, icons };
}
