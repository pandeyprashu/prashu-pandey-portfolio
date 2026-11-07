import type { CoverLetter } from "@/content/types";

export const coverLetter: CoverLetter = {
  greeting: "Dear Hiring Team,",
  paragraphs: [
    "I'm a full stack developer who builds production web and mobile products in TypeScript, and I'd like to be considered for a role on your team. At RemoteState I own delivery end to end across three products and six codebases, from the Postgres schema through to three React Native apps live on the App Store and Google Play.",
    "Most of my work is threading one capability through every layer in a single cycle: the Prisma model, the REST or tRPC API, the admin console and the mobile screen. On Dazzl, an on-demand beauty and grooming platform, that meant building a paid loyalty program across four codebases with Razorpay checkout and Redis-cached entitlement checks, a configurable payouts engine with visible formulas, and a geofenced attendance platform used by field professionals every day.",
    "I care about the parts that keep a product dependable as it grows. I enforce end-to-end type safety with strict TypeScript, Zod-validated contracts and generated tRPC and Prisma types, and I've standardised repositories on pnpm, repaired Docker and CI/CD builds, and led an Expo SDK 54 to 56 upgrade. Beyond Dazzl, I've built a BI dashboard that reads legacy hotel data in place across two databases, and a retrieval-augmented AI search that turns plain-English queries into structured filters across more than twenty dimensions.",
    "I do my best work close to founders and product owners, turning loosely defined problems into shipped features. I'd welcome the chance to talk about what you're building and where I could help. My résumé and selected work are linked below.",
  ],
  closing: "Thank you for your time and consideration.",
  signOff: "Best regards,",
};
