import { GraduationCap } from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { education, profile } from "@/content";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        id="about"
        eyebrow="01 / About"
        title="I take features from schema to shipped."
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal delay={0.05} className="lg:col-span-7">
          <div className="space-y-5 text-base leading-relaxed text-foreground-muted">
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <div className="lg:col-span-5">
          <RevealGroup className="space-y-4" delay={0.1}>
            <RevealItem>
              <h3 className="flex items-center gap-2 font-mono text-xs tracking-[0.16em] text-foreground-subtle uppercase">
                <GraduationCap className="size-4" strokeWidth={1.7} />
                Education
              </h3>
            </RevealItem>

            {education.map((entry) => (
              <RevealItem
                key={entry.abbreviation}
                className="rounded-2xl border border-border bg-surface/50 p-5 transition-colors hover:border-border-strong"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">
                      {entry.degree}{" "}
                      <span className="text-foreground-subtle">
                        ({entry.abbreviation})
                      </span>
                    </p>
                    <p className="mt-1 text-sm text-foreground-muted">
                      {entry.institution}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-accent/25 bg-accent-wash px-2.5 py-1 font-mono text-[0.7rem] text-accent">
                    {entry.grade}
                  </span>
                </div>
                <p className="mt-3 font-mono text-xs text-foreground-subtle">
                  {entry.period}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </Section>
  );
}
