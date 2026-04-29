import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "highlight";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2",
        {
          "border-transparent bg-accent-soft text-accent-primary": variant === "default",
          "border-border-muted text-text-muted": variant === "outline",
          "border-transparent bg-highlight-soft text-highlight-primary": variant === "highlight",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
