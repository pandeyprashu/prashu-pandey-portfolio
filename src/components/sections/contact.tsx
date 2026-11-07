import { ArrowUpRight, Mail, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copy-button";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionEyebrow } from "@/components/ui/section";
import { profile } from "@/content";

export function Contact() {
  return (
    <Section id="contact" className="border-t border-border">
      <Card className="relative isolate items-center gap-12 rounded-3xl px-4 py-14 sm:px-12 sm:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-line-grid bg-fade-top absolute inset-0 opacity-40" />
          <div className="absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand-solid/10 blur-3xl" />
        </div>

        <Reveal className="flex max-w-2xl flex-col items-center gap-6 text-center">
          <SectionEyebrow index="05" label="Contact" />

          <h2 id="contact-heading" className="text-3xl font-bold sm:text-5xl">
            Let&rsquo;s build something <span className="text-brand">good</span>.
          </h2>

          <p className="text-base leading-relaxed text-foreground-muted sm:text-lg">
            I&rsquo;m open to full-time roles and freelance projects, whether
            that&rsquo;s owning a product end to end or joining a team that needs
            someone comfortable across the whole stack. Happy to talk through
            what you&rsquo;re building.
          </p>

          <div className="flex w-full flex-col gap-3 pt-4 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
            <Button size="hero" render={<a href={`mailto:${profile.email}`} />}>
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

        <Reveal delay={0.1} className="grid w-full max-w-2xl gap-3 sm:grid-cols-2">
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
      </Card>
    </Section>
  );
}

interface ContactRowProps {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}

function ContactRow({ icon, label, value, href }: ContactRowProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-background-subtle py-2 pr-2 pl-4 text-left">
      <span aria-hidden className="text-brand">
        {icon}
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <p className="font-mono text-xs text-foreground-subtle">{label.toLowerCase()}</p>
        <a
          href={href}
          className="truncate text-sm transition-colors hover:text-brand"
        >
          {value}
        </a>
      </div>
      <CopyButton value={value} label={label} />
    </div>
  );
}
