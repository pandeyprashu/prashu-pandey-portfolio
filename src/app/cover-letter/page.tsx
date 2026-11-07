import type { Metadata } from "next";

import { Letter } from "@/components/cover-letter/letter";
import { LetterToolbar } from "@/components/cover-letter/letter-toolbar";
import { profile } from "@/content";

export const metadata: Metadata = {
  title: "Cover letter",
  description: `Cover letter from ${profile.name}, ${profile.role}.`,
  alternates: { canonical: "/cover-letter" },
  robots: { index: false, follow: true },
};

export default function CoverLetterPage() {
  return (
    <>
      <LetterToolbar />
      <main id="main" className="px-4 py-10 sm:px-6 sm:py-16 print:p-0">
        <div className="mx-auto w-full max-w-3xl">
          <Letter />
        </div>
      </main>
    </>
  );
}
