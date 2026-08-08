import type { Experience } from "@/content/types";

export const experiences: Experience[] = [
  {
    company: "RemoteState",
    role: "Full Stack Developer",
    period: "Feb 2025 – Present",
    location: "Noida, India",
    summary:
      "Own end-to-end delivery across 3 products and 6 codebases: 3 React Native apps live on the App Store and Google Play, 2 Next.js web platforms, and a TypeScript/Express backend, all the way from database schema through to release.",
    highlights: [
      "Thread single capabilities through Prisma models, REST/tRPC APIs, admin console and mobile UI in one cycle, working directly with founders and product owners.",
      "Enforce end-to-end type safety with TypeScript strict mode, Zod-validated contracts and tRPC/Prisma-generated types, eliminating an entire class of runtime API mismatches.",
      "Improved engineering workflow by standardising repos on pnpm, fixing Docker and CI/CD builds, adding Husky pre-commit formatting, and wiring JS bundle versions into Firebase Crashlytics for release-accurate crash triage.",
      "Led an Expo SDK 54 → 56 upgrade, migrating React Navigation to Expo Router and refreshing the native iOS and Android build config.",
    ],
    stack: [
      "TypeScript",
      "React Native (Expo)",
      "Next.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "tRPC",
      "Docker",
    ],
  },
];
