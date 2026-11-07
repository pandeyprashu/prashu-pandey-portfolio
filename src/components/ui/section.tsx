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
      className={cn("scroll-mt-24 py-16 sm:py-24", className)}
    >
      <div className="mx-auto flex w-full max-w-content flex-col gap-10 px-4 sm:gap-12 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionEyebrowProps {
  index: string;
  label: string;
  className?: string;
}

export function SectionEyebrow({ index, label, className }: SectionEyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-xs font-medium tracking-widest text-foreground-subtle uppercase",
        className,
      )}
    >
      <span className="rounded-md border border-brand/30 bg-brand-wash px-2 py-1 text-brand">
        {index}
      </span>
      {label}
    </p>
  );
}

type SectionHeadingProps = {
  id: string;
  index: string;
  label: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  id,
  index,
  label,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("flex max-w-2xl flex-col gap-4", className)}>
      <SectionEyebrow index={index} label={label} />
      <h2 id={`${id}-heading`} className="text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-foreground-muted">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
