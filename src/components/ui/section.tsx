import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

/** Anchored page section with the shared container width and vertical rhythm. */
export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("scroll-mt-24 py-20 sm:py-28", className)}
    >
      <div className="mx-auto w-full max-w-content px-6 lg:px-8">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  id: string;
  /** Small monospace label rendered above the title, e.g. "02 / Experience". */
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-2xl", className)}>
      <p className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-brand uppercase">
        <span aria-hidden className="h-px w-6 bg-brand/50" />
        {eyebrow}
      </p>
      <h2
        id={`${id}-heading`}
        className="mt-5 text-3xl font-semibold sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-foreground-muted">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
