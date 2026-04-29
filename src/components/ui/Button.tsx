import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-display font-semibold transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-accent-primary text-blue-950 hover:bg-accent-hover shadow-[0_0_15px_rgba(73,196,186,0.3)] hover:shadow-[0_0_25px_rgba(73,196,186,0.5)]":
              variant === "primary",
            "bg-highlight-primary text-white-900 hover:bg-pink-400 shadow-[0_0_15px_rgba(155,75,136,0.3)] hover:shadow-[0_0_25px_rgba(155,75,136,0.5)]":
              variant === "secondary",
            "border border-accent-primary text-accent-primary hover:bg-accent-soft":
              variant === "outline",
            "text-text-muted hover:text-text-primary hover:bg-white/5":
              variant === "ghost",
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-6 text-base": size === "md",
            "h-14 px-8 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
