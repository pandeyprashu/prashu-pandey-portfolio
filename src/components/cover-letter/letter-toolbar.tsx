import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { PrintButton } from "@/components/ui/print-button";

export function LetterToolbar() {
  return (
    <header className="border-b border-border print:hidden">
      <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between gap-3 px-4 sm:px-6">
        <Button variant="ghost" size="pill" render={<Link href="/" />}>
          <ArrowLeft className="size-4" strokeWidth={2} />
          Portfolio
        </Button>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <PrintButton>
            <span className="hidden sm:inline">Download PDF</span>
            <span className="sm:hidden">PDF</span>
          </PrintButton>
        </div>
      </div>
    </header>
  );
}
