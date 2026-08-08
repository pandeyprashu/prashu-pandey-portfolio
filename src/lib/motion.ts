import type { Transition, Variants } from "framer-motion";

/**
 * Shared motion language for the site. Keeping easing and duration in one
 * place is what makes independently-authored sections feel like one system.
 */

/** Gentle deceleration curve — no overshoot, nothing springy. */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const transition: Transition = {
  duration: 0.55,
  ease: EASE_OUT,
};

/** Parent that staggers its children as the group scrolls into view. */
export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/** Default child: a short lift paired with a fade. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition },
};

/**
 * Viewport config shared by every scroll-triggered section. `once` stops
 * elements re-animating on scroll-up, which reads as noise rather than polish.
 */
export const viewport = { once: true, amount: 0.25 } as const;
