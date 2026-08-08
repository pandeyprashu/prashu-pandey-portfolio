import { ArrowUp } from "lucide-react";

import { navItems, profile } from "@/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-content px-6 py-14 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <p className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">
              <span
                aria-hidden
                className="grid size-8 place-items-center rounded-lg border border-border bg-surface font-mono text-xs text-accent"
              >
                PP
              </span>
              {profile.name}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
              {profile.role} based in {profile.location}. {profile.availability}.
            </p>
          </div>

          <div className="flex gap-14 sm:gap-20">
            <nav aria-label="Footer">
              {/* Plain text, not a heading: these are column labels and would
                  otherwise sit alongside real sections in the document outline. */}
              <p className="font-mono text-xs tracking-[0.16em] text-foreground-subtle uppercase">
                Navigate
              </p>
              <ul className="mt-4 space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Profiles and contact">
              <p className="font-mono text-xs tracking-[0.16em] text-foreground-subtle uppercase">
                Elsewhere
              </p>
              <ul className="mt-4 space-y-2.5">
                {profile.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-7 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-foreground-subtle">
            &copy; {year} {profile.name}. Built with Next.js and Tailwind CSS.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-1.5 font-mono text-xs text-foreground-muted transition-colors hover:text-foreground"
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
