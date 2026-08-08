import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/layout/theme-provider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/** Display face, used italic for emphasised words in headings. */
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prashu Pandey — Full Stack Developer",
  description:
    "Full Stack Developer building production web and mobile products in TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      // next-themes swaps the class on <html> before paint; React would
      // otherwise flag the injected attribute as a hydration mismatch.
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
