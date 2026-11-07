"use client";

import { Download } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

interface PrintButtonProps {
  children: ReactNode;
  className?: string;
}

export function PrintButton({ children, className }: PrintButtonProps) {
  return (
    <Button size="pill" onClick={() => window.print()} className={className}>
      <Download className="size-4" strokeWidth={2} />
      {children}
    </Button>
  );
}
