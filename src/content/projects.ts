import type { Project } from "@/content/types";

export const projects: Project[] = [
  {
    slug: "dazzl",
    name: "Dazzl",
    tagline: "On-demand beauty & grooming services platform",
    summary:
      "Three mobile apps, an 81-page admin console and a 232-model backend. I built features across all six codebases — from the Prisma schema and payment webhooks through to the screens customers and partners actually tap.",
    metrics: [
      { value: "3", label: "apps live on iOS & Android" },
      { value: "81", label: "page admin console" },
      { value: "232", label: "backend data models" },
      { value: "6", label: "codebases touched" },
    ],
    highlights: [
      "Built Dazzl Pass, a paid loyalty program, end to end across 6 codebases: Prisma models, purchase and webhook APIs with Redis-cached entitlement checks, Razorpay standalone and booking-bundled checkout, cart discount logic, consumer-app upsell UI, and an admin pass-holder console.",
      "Engineered a professional payouts system with a configurable salary and incentive calculation engine, an attendance-driven payout-day formula, per-metric breakdowns with visible formulas, RBAC-gated access and one-click Excel export.",
      "Delivered an attendance platform across admin and mobile: geofenced check-in/check-out backed by background location tracking, automatic late and overtime computation, split and bulk approval actions, leave management and monthly summaries.",
      "Integrated a scheduled hub weather service (OpenWeatherMap) that surfaces live rain state to operations and injects a 15-minute ETA buffer into availability checks during rain.",
      "Shipped a server-driven, feature-flagged checkout flow, photo-verification gates requiring kit and completion photos before a booking can start or close, and a partner performance dashboard with 4-week rolling rating metrics.",
    ],
    stack: [
      "React Native (Expo)",
      "Next.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Razorpay",
      "GCP",
    ],
  },
  {
    slug: "orchid-analytics",
    name: "Orchid Analytics Dashboard",
    tagline: "Hotel business intelligence platform",
    summary:
      "A BI layer for hotel operations that reads legacy PMS data in place. Rather than migrating a live property management system, I bridged two databases behind type-safe tRPC routers so analytics could ship without touching the source of truth.",
    metrics: [
      { value: "2", label: "databases bridged" },
      { value: "11", label: "type-safe tRPC routers" },
      { value: "10+", label: "interactive KPI charts" },
      { value: "0", label: "legacy data migrated" },
    ],
    highlights: [
      "Designed a dual-database architecture bridging PostgreSQL (app state via Drizzle ORM) and MSSQL (legacy hotel data via Prisma) behind 11 type-safe tRPC routers, enabling analytics on legacy PMS data with no migration.",
      "Visualised hotel performance through 10+ interactive KPI charts and a multi-property compare dashboard with independent date ranges and business-unit filters, powered by dynamic SQL aggregation across day, week, month, quarter and year periods.",
      "Automated operational monitoring with a real-time alert engine using 3 configurable rule types, consecutive-period matching and multi-level escalation with email notifications, deployed via Docker and GitHub Actions CI/CD to AWS ECR.",
    ],
    stack: [
      "React 19",
      "TanStack Start (SSR)",
      "tRPC",
      "Drizzle ORM",
      "Prisma",
      "PostgreSQL",
      "MSSQL",
      "Docker",
    ],
  },
  {
    slug: "education-planner",
    name: "Education Planner",
    tagline: "Study abroad consultancy platform",
    summary:
      "A multi-role SaaS for university admissions, fronted by an AI search pipeline that turns a sentence like “MBA in Canada under $30k” into a structured query across 20+ filter dimensions.",
    metrics: [
      { value: "20+", label: "AI filter dimensions" },
      { value: "12", label: "RBAC roles" },
      { value: "51", label: "API service modules" },
      { value: "1,000+", label: "university listings" },
    ],
    highlights: [
      "Architected a retrieval-augmented AI search pipeline grounding Google Gemini 2.5 Flash on filter vocabularies and sample programs retrieved from the database, converting natural-language queries into schema-constrained JSON across 20+ filter dimensions.",
      "Developed a multi-role SaaS with 12 RBAC roles, Stripe payments, a wallet system, LeadSquared CRM pipeline, application tracking and a full CMS across 51 API service modules.",
      "Optimised organic reach with server-rendered pages for 1,000+ university listings, JSON-LD structured data, automated sitemaps and AWS S3 presigned-URL uploads.",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "tRPC",
      "Drizzle ORM",
      "MySQL",
      "Google Gemini",
      "Stripe",
      "AWS S3",
    ],
  },
];
