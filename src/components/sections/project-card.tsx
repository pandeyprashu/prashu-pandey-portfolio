"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { BulletMarker } from "@/components/ui/bullet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Project } from "@/content";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Bullets shown before the disclosure kicks in. */
const COLLAPSED_HIGHLIGHTS = 2;

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = useId();

  const hidden = project.highlights.slice(COLLAPSED_HIGHLIGHTS);
  const visible = project.highlights.slice(0, COLLAPSED_HIGHLIGHTS);

  return (
    <Card variant="interactive" className="gap-0 rounded-3xl py-0">
      <div className="flex items-center justify-between gap-4 border-b border-border bg-background-subtle px-6 py-3 font-mono text-xs text-foreground-subtle sm:px-8 lg:px-10">
        <span>
          <span className="text-brand">{String(index + 1).padStart(2, "0")}</span>
          {" / "}
          {project.slug}
        </span>
        <span aria-hidden>{project.stack.length} technologies</span>
      </div>

      <article className="flex flex-col gap-8 p-6 sm:p-8 lg:p-10">
        <header className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold sm:text-3xl">{project.name}</h3>
          <p className="text-base text-foreground-muted sm:text-lg">
            {project.tagline}
          </p>
        </header>

        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-border bg-background-subtle px-4 py-5"
            >
              <dt className="sr-only">{metric.label}</dt>
              <dd className="flex flex-col gap-1.5">
                <span className="font-mono text-2xl font-bold tracking-tight text-brand sm:text-3xl">
                  {metric.value}
                </span>
                <span
                  aria-hidden
                  className="text-xs leading-snug text-foreground-subtle"
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
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <p className="text-base leading-relaxed text-foreground-muted lg:col-span-5">
            {project.summary}
          </p>

          <div className="flex flex-col items-start gap-4 lg:col-span-7">
            <div className="flex w-full flex-col gap-3.5">
              <ul className="flex flex-col gap-3.5">
                {visible.map((highlight) => (
                  <Highlight key={highlight.slice(0, 40)} clamped={!expanded}>
                    {highlight}
                  </Highlight>
                ))}
              </ul>

              <AnimatePresence initial={false}>
                {expanded && hidden.length > 0 ? (
                  <motion.div
                    id={detailsId}
                    key="details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                    className="overflow-hidden"
                  >
                    <ul className="flex flex-col gap-3.5">
                      {hidden.map((highlight) => (
                        <Highlight key={highlight.slice(0, 40)}>
                          {highlight}
                        </Highlight>
                      ))}
                    </ul>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            {hidden.length > 0 ? (
              <Button
                variant="ghost"
                size="pill"
                onClick={() => setExpanded((open) => !open)}
                aria-expanded={expanded}
                aria-controls={detailsId}
                className="text-brand hover:text-brand"
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
              </Button>
            ) : null}
          </div>
        </div>

        <ul className="flex flex-wrap gap-2 border-t border-border pt-6">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge variant="tech">{tech}</Badge>
            </li>
          ))}
        </ul>
      </article>
    </Card>
  );
}

interface HighlightProps {
  children: string;
  /** Trims to two lines so every collapsed card settles at the same height. */
  clamped?: boolean;
}

function Highlight({ children, clamped = false }: HighlightProps) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
      <BulletMarker />
      <span className={cn(clamped && "line-clamp-2")}>{children}</span>
    </li>
  );
}
