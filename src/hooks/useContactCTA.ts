import { useMotionValue } from "framer-motion";
import type React from "react";

export function useContactCTA() {
  const mouseX1 = useMotionValue(0);
  const mouseY1 = useMotionValue(0);
  const mouseX2 = useMotionValue(0);
  const mouseY2 = useMotionValue(0);

  function handleMouseMove1({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX1.set(clientX - left);
    mouseY1.set(clientY - top);
  }

  function handleMouseMove2({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX2.set(clientX - left);
    mouseY2.set(clientY - top);
  }

  return { mouseX1, mouseY1, mouseX2, mouseY2, handleMouseMove1, handleMouseMove2 };
}
