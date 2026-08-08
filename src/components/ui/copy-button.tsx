"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Copies `value` to the clipboard and confirms inline for a couple of seconds. */
export function CopyButton({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // Clipboard access can be blocked (insecure origin, denied permission).
      // The address is visible next to this button, so failing quietly is fine.
    }
  }

  return (
    <Button
      variant="outline"
      size="pill-icon"
      onClick={handleCopy}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      className={cn("shrink-0 text-foreground-muted", className)}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={copied ? "check" : "copy"}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.15, ease: EASE_OUT }}
        >
          {copied ? (
            <Check className="size-4 text-brand" strokeWidth={2} />
          ) : (
            <Copy className="size-4" strokeWidth={1.8} />
          )}
        </motion.span>
      </AnimatePresence>
      <span aria-live="polite" className="sr-only">
        {copied ? `${label} copied to clipboard` : ""}
      </span>
    </Button>
  );
}
