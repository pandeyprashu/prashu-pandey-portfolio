import { profile } from "@/content";

/**
 * Absolute origin for the deployed site.
 *
 * Canonical URLs, OG tags and the sitemap all need an absolute origin, and a
 * wrong one is worse than none — it points crawlers at somebody else's domain.
 * Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL — set this to the custom domain in Vercel.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — the stable *.vercel.app production host,
 *      which (unlike VERCEL_URL) does not change per deployment.
 *   3. localhost, for local development.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export const siteConfig = {
  url: siteUrl,
  name: `${profile.name} — ${profile.role}`,
  shortName: profile.name,
  title: `${profile.name} — ${profile.role}`,
  description:
    "Full Stack Developer building production web and mobile products in TypeScript — React, Next.js, React Native, Node.js, Prisma and PostgreSQL. Available for full-time roles and freelance projects.",
  keywords: [
    "Prashu Pandey",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Freelance Developer India",
    "Noida",
  ],
} as const;
