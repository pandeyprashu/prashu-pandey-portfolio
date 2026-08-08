import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent";
};

/** Small pill used for tech-stack chips and status markers. */
export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1",
        "font-mono text-[0.7rem] leading-none tracking-tight whitespace-nowrap",
        variant === "default" &&
          "border-border bg-background-subtle text-foreground-muted",
        variant === "accent" &&
          "border-accent/30 bg-accent-wash text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
