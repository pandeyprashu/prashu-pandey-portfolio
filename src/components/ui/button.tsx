import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

const base = cn(
  "group inline-flex items-center justify-center gap-2 rounded-full",
  "font-medium whitespace-nowrap transition-all duration-200",
  "disabled:pointer-events-none disabled:opacity-50",
);

const variants: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-accent-vivid text-accent-contrast",
    "hover:brightness-110 hover:-translate-y-0.5",
    "shadow-[0_1px_2px_rgb(var(--shadow-color)/0.2)]",
  ),
  secondary: cn(
    "border border-border bg-surface/60 text-foreground backdrop-blur",
    "hover:border-border-strong hover:bg-surface hover:-translate-y-0.5",
  ),
  ghost: "text-foreground-muted hover:text-foreground",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm sm:text-[0.95rem]",
};

/**
 * Shared button styling. Exported as a class builder rather than a component
 * so it can dress a `<button>`, a Next `<Link>`, or a plain `<a>` alike.
 */
export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], className);
}
