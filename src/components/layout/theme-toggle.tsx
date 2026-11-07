"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Light/dark switch.
 *
 * Both icons are always rendered and swapped with CSS off the `dark` class,
 * rather than picking one from `resolvedTheme` during render. The theme is
 * unknowable on the server, so deriving markup from it would either cause a
 * hydration mismatch or force a mounted-flag that leaves the button visibly
 * empty on first paint. Doing it in CSS means the correct icon is there in the
 * very first frame, before React has hydrated.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="pill-icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle light and dark theme"
      className={cn("relative overflow-hidden text-foreground-muted", className)}
    >
      <Sun
        aria-hidden
        strokeWidth={1.8}
        className="absolute size-4.5 rotate-0 scale-100 opacity-100 transition-all duration-300 dark:-rotate-90 dark:scale-50 dark:opacity-0"
      />
      <Moon
        aria-hidden
        strokeWidth={1.8}
        className="absolute size-4.5 rotate-90 scale-50 opacity-0 transition-all duration-300 dark:rotate-0 dark:scale-100 dark:opacity-100"
      />
    </Button>
  );
}
