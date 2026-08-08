"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";

import { buttonStyles } from "@/components/ui/button";
import { profile } from "@/content";
import { EASE_OUT } from "@/lib/motion";

const stats = [
  { value: "3", label: "apps live on iOS & Android" },
  { value: "6", label: "codebases owned end to end" },
  { value: "3", label: "products shipped" },
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  // The hero is above the fold, so it animates on mount rather than on scroll.
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };

  const item = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 22 },
        visible: { opacity: 1, y: 0 },
      };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Backdrop: dot grid faded out at the edges, warmed by an accent glow. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-dot-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-32 left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-accent-vivid/10 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-content px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-7">
            <motion.p
              variants={item}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 py-1.5 pr-4 pl-2.5 text-xs text-foreground-muted backdrop-blur"
            >
              <span aria-hidden className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-vivid opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-accent-vivid" />
              </span>
              {profile.availability}
            </motion.p>

            <motion.h1
              variants={item}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="mt-7 text-5xl font-semibold sm:text-6xl lg:text-7xl"
            >
              {profile.name}
              {/* JSX drops the newline here, so the h1's text content would
                  otherwise read "Prashu PandeyFull stack developer". */}{" "}
              <span className="mt-3 block font-serif text-2xl font-normal italic sm:text-3xl lg:text-4xl">
                <span className="text-accent">Full stack</span>{" "}
                <span className="text-foreground-muted">developer</span>
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="mt-7 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              variants={item}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href="#contact" className={buttonStyles()}>
                Get in touch
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </a>
              <a href="#work" className={buttonStyles({ variant: "secondary" })}>
                View selected work
                <ArrowDown
                  className="size-4 transition-transform group-hover:translate-y-0.5"
                  strokeWidth={2}
                />
              </a>
            </motion.div>

            <motion.dl
              variants={item}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-3xl font-semibold tracking-tight sm:text-4xl">
                      {stat.value}
                    </span>
                    <span
                      aria-hidden
                      className="mt-1.5 block text-xs leading-snug text-foreground-subtle"
                    >
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            variants={item}
            transition={{ duration: 0.7, ease: EASE_OUT }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-xs lg:ml-auto">
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-[2rem] bg-accent-vivid/10 blur-2xl"
              />
              <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_20px_60px_-24px_rgb(var(--shadow-color)/0.45)]">
                <Image
                  src="/prashu-pandey.png"
                  alt={`Portrait of ${profile.name}`}
                  width={437}
                  height={381}
                  priority
                  sizes="(min-width: 1024px) 20rem, 16rem"
                  className="w-full object-cover"
                />
                <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3.5">
                  <span className="inline-flex items-center gap-1.5 text-xs text-foreground-muted">
                    <MapPin className="size-3.5" strokeWidth={1.8} />
                    {profile.location}
                  </span>
                  <span className="font-mono text-[0.7rem] text-accent">
                    since 2025 @ RemoteState
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
