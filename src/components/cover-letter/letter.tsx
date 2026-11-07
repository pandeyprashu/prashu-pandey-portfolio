import Link from "next/link";

import { Card } from "@/components/ui/card";
import { coverLetter, profile } from "@/content";
import { siteUrl } from "@/lib/site";

const portfolioHost = siteUrl.replace(/^https?:\/\//, "");

const contactLinks = [
  { label: profile.email, href: `mailto:${profile.email}` },
  { label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { label: portfolioHost, href: siteUrl },
  ...profile.socials.map((social) => ({ label: social.label, href: social.href })),
];

export function Letter() {
  return (
    <Card
      size="lg"
      className="gap-10 rounded-3xl px-6 sm:px-12 sm:py-12 print:gap-8 print:overflow-visible print:rounded-none print:bg-transparent print:px-0 print:py-0 print:ring-0"
    >
      <header className="flex flex-col gap-4 border-b border-border pb-8">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold sm:text-4xl">{profile.name}</h1>
          <p className="font-mono text-sm text-brand">{profile.role}</p>
        </div>
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground-muted">
          <li>{profile.location}</li>
          {contactLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-brand"
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground print:text-sm">
        <p>{coverLetter.greeting}</p>
        {coverLetter.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="text-foreground-muted">
            {paragraph}
          </p>
        ))}
        <p className="text-foreground-muted">{coverLetter.closing}</p>
        <div className="flex flex-col gap-1 pt-2">
          <p>{coverLetter.signOff}</p>
          <p className="font-semibold">{profile.name}</p>
        </div>
      </div>

      <footer className="flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6 font-mono text-sm print:hidden">
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 items-center text-brand hover:underline"
        >
          View résumé
        </a>
        <Link href="/#work" className="flex min-h-11 items-center text-brand hover:underline">
          Selected work
        </Link>
      </footer>
    </Card>
  );
}
