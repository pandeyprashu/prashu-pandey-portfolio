import { ArrowUpRight, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { profile } from "@/content";

export function Contact() {
  return (
    <Section id="contact" className="border-t border-border">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/40 px-6 py-14 sm:px-12 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="bg-dot-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,black,transparent)]" />
          <div className="absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand-solid/10 blur-[100px]" />
        </div>

        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 font-mono text-xs tracking-[0.18em] text-brand uppercase">
            <span aria-hidden className="h-px w-6 bg-brand/50" />
            05 / Contact
            <span aria-hidden className="h-px w-6 bg-brand/50" />
          </p>

          <h2 id="contact-heading" className="mt-6 text-3xl font-semibold sm:text-5xl">
            Let&rsquo;s build something{" "}
            <span className="font-serif italic text-brand">good</span>.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-foreground-muted sm:text-lg">
            I&rsquo;m open to full-time roles and freelance projects, whether
            that&rsquo;s owning a product end to end or joining a team that needs
            someone comfortable across the whole stack. Happy to talk through
            what you&rsquo;re building.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="hero"
              render={<a href={`mailto:${profile.email}`} />}
            >
              <Mail className="size-4" strokeWidth={2} />
              Email me
            </Button>
            <Button
              variant="outline"
              size="hero"
              render={
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Download résumé
              <ArrowUpRight
                className="size-4 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                strokeWidth={2}
              />
            </Button>
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mx-auto mt-12 grid max-w-2xl gap-3 sm:grid-cols-2"
        >
          <ContactRow
            icon={<Mail className="size-4" strokeWidth={1.8} />}
            label="Email"
            value={profile.email}
            href={`mailto:${profile.email}`}
          />
          <ContactRow
            icon={<Phone className="size-4" strokeWidth={1.8} />}
            label="Phone"
            value={profile.phone}
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
          />
        </Reveal>
      </div>
    </Section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/60 px-4 py-3 text-left">
      <span aria-hidden className="text-brand">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[0.7rem] tracking-[0.14em] text-foreground-subtle uppercase">
          {label}
        </p>
        <a
          href={href}
          className="block truncate text-sm transition-colors hover:text-brand"
        >
          {value}
        </a>
      </div>
      <CopyButton value={value} label={label} />
    </div>
  );
}
