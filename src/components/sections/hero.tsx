"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { experiences, profile } from "@/content";
import { EASE_OUT } from "@/lib/motion";

const stats = [
  { value: "3", label: "apps live on iOS & Android" },
  { value: "6", label: "codebases owned end to end" },
  { value: "3", label: "products shipped" },
];

const [currentRole] = experiences;

/** Scannable summary that answers the first questions a recruiter has. */
const glanceFacts = [
  { label: "currently", value: `${currentRole.role}, ${currentRole.company}` },
  { label: "since", value: "February 2025" },
  { label: "based_in", value: `${profile.location} · IST (UTC+5:30)` },
  { label: "focus", value: "TypeScript · React · React Native · Node.js" },
  { label: "open_to", value: "Full-time roles & freelance projects" },
];

const MotionCard = motion.create(Card);

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  // The hero is above the fold, so it animates on mount rather than on scroll.
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
  };

  const item = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0 },
      };

  const tileTransition = { duration: 0.5, ease: EASE_OUT };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-line-grid bg-fade-top absolute inset-0 opacity-50" />
        <div className="absolute -top-40 left-1/2 size-144 -translate-x-1/2 rounded-full bg-brand-solid/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 gap-3 sm:gap-4 md:grid-cols-6"
        >
          <MotionCard
            size="lg"
            variants={item}
            transition={tileTransition}
            className="col-span-3 px-6 sm:px-8 md:col-span-4 lg:p-10"
          >
            <div className="flex flex-col items-start gap-6 sm:gap-7">
              <p className="inline-flex items-center gap-2.5 rounded-lg border border-border bg-background-subtle py-1.5 pr-3.5 pl-2.5 font-mono text-xs text-foreground-muted">
                <span aria-hidden className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-solid opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-brand-solid" />
                </span>
                {profile.availability}
              </p>

              <h1 className="flex flex-col gap-3 text-4xl font-bold sm:text-6xl lg:text-7xl">
                {profile.name}
                {/* JSX drops the newline here, so the h1's text content would
                    otherwise read "Prashu PandeyFull stack developer". */}{" "}
                <span className="font-mono text-lg font-medium tracking-tight sm:text-2xl">
                  <span aria-hidden className="text-foreground-subtle">
                    {"> "}
                  </span>
                  <span className="text-brand">Full stack</span>{" "}
                  <span className="text-foreground-muted">developer</span>{" "}
                  <span
                    aria-hidden
                    className="inline-block h-5 w-2.5 animate-pulse bg-brand-solid/80 align-middle motion-reduce:animate-none sm:h-6 sm:w-3"
                  />
                </span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg">
                {profile.tagline}
              </p>

              <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row sm:flex-wrap">
                <Button size="hero" render={<a href="#contact" />}>
                  Get in touch
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </Button>
                <Button variant="outline" size="hero" render={<a href="#work" />}>
                  View selected work
                  <ArrowDown
                    className="size-4 transition-transform group-hover/button:translate-y-0.5"
                    strokeWidth={2}
                  />
                </Button>
              </div>
            </div>
          </MotionCard>

          <MotionCard
            variants={item}
            transition={tileTransition}
            className="col-span-3 gap-0 rounded-3xl py-0 md:col-span-2"
          >
            <div className="flex items-center gap-2 border-b border-border bg-background-subtle px-4 py-3">
              <span aria-hidden className="size-2.5 rounded-full bg-destructive/70" />
              <span aria-hidden className="size-2.5 rounded-full bg-warning/70" />
              <span aria-hidden className="size-2.5 rounded-full bg-success/70" />
              <p className="pl-2 font-mono text-xs text-foreground-subtle">
                at-a-glance
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-5 font-mono text-sm sm:p-6">
              <p className="text-foreground-subtle">
                <span aria-hidden className="text-brand">
                  ${" "}
                </span>
                whoami
              </p>
              <dl className="flex flex-col gap-3.5">
                {glanceFacts.map((fact) => (
                  <div key={fact.label} className="flex flex-col gap-0.5">
                    <dt className="text-xs text-brand">{fact.label}:</dt>
                    <dd className="font-sans text-sm leading-snug text-foreground">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </MotionCard>

          {stats.map((stat) => (
            <MotionCard
              key={stat.label}
              variant="interactive"
              variants={item}
              transition={tileTransition}
              className="col-span-1 rounded-3xl p-4 sm:p-6 md:col-span-2"
            >
              <dl>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="flex flex-col gap-2">
                  <span className="font-mono text-3xl font-bold tracking-tight text-brand sm:text-5xl">
                    {stat.value}
                  </span>
                  <span
                    aria-hidden
                    className="text-xs leading-snug text-foreground-muted sm:text-sm"
                  >
                    {stat.label}
                  </span>
                </dd>
              </dl>
            </MotionCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
