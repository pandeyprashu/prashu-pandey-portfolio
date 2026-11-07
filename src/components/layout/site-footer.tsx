import { ArrowUp } from "lucide-react";

import { navItems, profile } from "@/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-content flex-col gap-14 px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex max-w-xs flex-col gap-4">
            <p className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight">
              <span
                aria-hidden
                className="grid size-9 place-items-center rounded-lg border border-border bg-surface font-mono text-xs font-bold text-brand"
              >
                PP
              </span>
              {profile.name}
            </p>
            <p className="text-sm leading-relaxed text-foreground-muted">
              {profile.role} based in {profile.location}. {profile.availability}.
            </p>
          </div>

          <div className="flex gap-14 sm:gap-20">
            <nav aria-label="Footer" className="flex flex-col gap-4">
              {/* Plain text, not a heading: these are column labels and would
                  otherwise sit alongside real sections in the document outline. */}
              <p className="font-mono text-xs text-foreground-subtle">
                navigate
              </p>
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="flex min-h-11 items-center text-sm text-foreground-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Profiles and contact" className="flex flex-col gap-4">
              <p className="font-mono text-xs text-foreground-subtle">
                elsewhere
              </p>
              <ul className="flex flex-col">
                {profile.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-11 items-center text-sm text-foreground-muted transition-colors hover:text-foreground"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex min-h-11 items-center text-sm text-foreground-muted transition-colors hover:text-foreground"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-7 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-foreground-subtle">
            &copy; {year} {profile.name}. Built with Next.js and Tailwind CSS.
          </p>
          <a
            href="#top"
            className="group inline-flex min-h-11 items-center gap-1.5 font-mono text-xs text-foreground-muted transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp
              aria-hidden
              className="size-3.5 transition-transform group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
