"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { buttonStyles } from "@/components/ui/button";
import { navItems, profile } from "@/content";
import { useActiveSection } from "@/hooks/use-active-section";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

// Hoisted so the identity stays stable across renders and the observer in
// useActiveSection is not torn down on every paint.
const SECTION_IDS = navItems.map((item) => item.id);

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/75 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-content items-center justify-between gap-4 px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight"
        >
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-lg border border-border bg-surface font-mono text-xs text-accent transition-colors group-hover:border-accent/40"
          >
            PP
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative block rounded-full px-3.5 py-2 text-sm transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-foreground-muted hover:text-foreground",
                    )}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-background-subtle"
                        transition={{ duration: 0.3, ease: EASE_OUT }}
                      />
                    ) : null}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles({
              variant: "secondary",
              size: "sm",
              className: "hidden sm:inline-flex",
            })}
          >
            Resume
            <ArrowUpRight
              className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-full border border-border bg-surface/60 text-foreground-muted transition-colors hover:text-foreground md:hidden"
          >
            {menuOpen ? (
              <X className="size-4" strokeWidth={1.8} />
            ) : (
              <Menu className="size-4" strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE_OUT }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="mx-auto flex w-full max-w-content flex-col px-6 py-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "block border-b border-border/60 py-3.5 text-sm transition-colors last:border-0",
                      activeId === item.id
                        ? "text-accent"
                        : "text-foreground-muted hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles({ variant: "secondary", size: "sm", className: "w-full" })}
                >
                  Download résumé
                  <ArrowUpRight className="size-3.5" strokeWidth={2} />
                </a>
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
