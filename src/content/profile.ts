import type { NavItem, Profile } from "@/content/types";

export const profile: Profile = {
  name: "Prashu Pandey",
  role: "Full Stack Developer",
  location: "Noida, India",
  email: "prashupandey0210@gmail.com",
  phone: "+91 98710 51838",
  tagline:
    "I build production web and mobile products in TypeScript — from Postgres schema to the app in your pocket.",
  bio: [
    "I'm a full stack developer working across the whole surface of a product: React and Next.js on the web, React Native and Expo on mobile, and Node.js with Prisma, PostgreSQL and Redis on the backend.",
    "Most of my work has been end-to-end ownership rather than tickets. At RemoteState I run delivery across three products and six codebases, threading a single capability through the database model, the API, the admin console and the mobile UI in one cycle — working directly with founders and product owners.",
    "I've shipped payment and loyalty systems, payroll and attendance platforms, AI-powered search, and business intelligence dashboards. Three of the mobile apps I work on are live on the App Store and Google Play.",
  ],
  availability: "Open to full-time roles and freelance projects",
  resumeUrl: "/prashu-pandey-resume.pdf",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/pandeyprashu",
      handle: "@pandeyprashu",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/prashu-pandey-8474a2225/",
      handle: "in/prashu-pandey",
    },
  ],
};

export const navItems: NavItem[] = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Work", id: "work" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];
