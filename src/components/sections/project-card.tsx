"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import { Badge } from "@/components/ui/badge";
import type { Project } from "@/content";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Bullets shown before the disclosure kicks in. */
const COLLAPSED_HIGHLIGHTS = 2;

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = useId();

  const hidden = project.highlights.slice(COLLAPSED_HIGHLIGHTS);
  const visible = project.highlights.slice(0, COLLAPSED_HIGHLIGHTS);

  return (
    <article className="group relative rounded-3xl border border-border bg-surface/40 p-6 transition-colors duration-300 hover:border-border-strong sm:p-8 lg:p-10">
      {/* Accent wash that fades in on hover; purely decorative. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-linear-to-br from-accent-wash to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <header>
        <span className="font-mono text-xs text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-2 font-serif text-lg text-foreground-muted italic sm:text-xl">
          {project.tagline}
        </p>
      </header>

      <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="bg-background px-4 py-5">
            <dt className="sr-only">{metric.label}</dt>
            <dd>
              <span className="block text-2xl font-semibold tracking-tight">
                {metric.value}
              </span>
              <span
                aria-hidden
                className="mt-1.5 block text-xs leading-snug text-foreground-subtle"
              >
                {metric.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>

      {/*
       * Two columns from lg upward. Previously the summary was capped at
       * max-w-2xl while the bullets ran the full card width, so the two blocks
       * sat at wildly different measures and the short one read as a gap.
       * Splitting the row lets both sit at a comfortable line length and fills
       * the card edge to edge.
       */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <p className="text-base leading-relaxed text-foreground-muted lg:col-span-5">
          {project.summary}
        </p>

        <div className="lg:col-span-7">
          <ul className="space-y-3.5">
            {visible.map((highlight) => (
              <Highlight key={highlight.slice(0, 40)} clamped={!expanded}>
                {highlight}
              </Highlight>
            ))}
          </ul>

          {hidden.length > 0 ? (
            <>
              <AnimatePresence initial={false}>
                {expanded ? (
                  <motion.div
                    id={detailsId}
                    key="details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-3.5 pt-3.5">
                      {hidden.map((highlight) => (
                        <Highlight key={highlight.slice(0, 40)}>
                          {highlight}
                        </Highlight>
                      ))}
                    </ul>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setExpanded((open) => !open)}
                aria-expanded={expanded}
                aria-controls={detailsId}
                className="mt-5 inline-flex items-center gap-1.5 rounded-full text-sm text-accent transition-colors hover:text-foreground"
              >
                {expanded
                  ? "Show less"
                  : `Show all ${project.highlights.length} details`}
                <ChevronDown
                  aria-hidden
                  className={cn(
                    "size-4 transition-transform duration-300",
                    expanded && "rotate-180",
                  )}
                  strokeWidth={2}
                />
              </button>
            </>
          ) : null}
        </div>
      </div>

      <ul className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
        {project.stack.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Highlight({
  children,
  clamped = false,
}: {
  children: string;
  /** Trims to two lines so every collapsed card settles at the same height. */
  clamped?: boolean;
}) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
      <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
      <span className={cn(clamped && "line-clamp-2")}>{children}</span>
    </li>
  );
}
