"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // The server cannot know the stored theme, so the icon only renders once
  // we're on the client. Until then we keep the same box to avoid layout shift.
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "relative grid size-9 place-items-center rounded-full border border-border",
        "bg-surface/60 text-foreground-muted backdrop-blur",
        "transition-colors hover:border-border-strong hover:text-foreground",
        className,
      )}
    >
      <AnimatePresence initial={false} mode="wait">
        {mounted ? (
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ opacity: 0, rotate: -70, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 70, scale: 0.6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-0 grid place-items-center"
          >
            {isDark ? (
              <Moon className="size-[1.05rem]" strokeWidth={1.8} />
            ) : (
              <Sun className="size-[1.05rem]" strokeWidth={1.8} />
            )}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </button>
  );
}
