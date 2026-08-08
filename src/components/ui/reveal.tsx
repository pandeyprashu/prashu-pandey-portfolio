"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

import { fadeUp, staggerContainer, transition, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before this element animates. */
  delay?: number;
  as?: ElementType;
  variants?: Variants;
};

/**
 * Fades and lifts its children the first time they scroll into view.
 * Collapses to a plain fade when the visitor prefers reduced motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  variants = fadeUp,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={
        prefersReducedMotion
          ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition } }
          : variants
      }
      transition={{ ...transition, delay }}
    >
      {children}
    </MotionTag>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  /** Gap in seconds between each child's animation. */
  stagger?: number;
  delay?: number;
  as?: ElementType;
};

/**
 * Wraps a list so its `RevealItem` children animate in sequence rather than
 * all at once. Pair with `RevealItem`, not `Reveal`.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  as = "div",
}: RevealGroupProps) {
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer(stagger, delay)}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
  variants = fadeUp,
}: Omit<RevealProps, "delay">) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      className={cn(className)}
      variants={
        prefersReducedMotion
          ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition } }
          : variants
      }
    >
      {children}
    </MotionTag>
  );
}
