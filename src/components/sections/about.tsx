import { GraduationCap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { education, profile } from "@/content";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        id="about"
        index="01"
        label="About"
        title="I take features from schema to shipped."
      />

      <div className="grid gap-4 lg:grid-cols-12">
        <Reveal delay={0.05} className="lg:col-span-7">
          <Card size="lg" className="h-full">
            <div className="flex flex-col gap-5 px-(--card-spacing) text-base leading-relaxed text-foreground-muted">
              {profile.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Card>
        </Reveal>

        <RevealGroup className="flex flex-col gap-4 lg:col-span-5" delay={0.1}>
          <RevealItem>
            <h3 className="flex items-center gap-2 px-1 pt-2 font-mono text-sm font-medium tracking-normal text-foreground-subtle lg:pt-0">
              <GraduationCap aria-hidden className="size-4 text-brand" strokeWidth={1.7} />
              Education
            </h3>
          </RevealItem>

          {education.map((entry) => (
            <RevealItem key={entry.abbreviation}>
              <Card variant="interactive" className="gap-3 rounded-3xl p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-semibold">
                      {entry.degree}{" "}
                      <span className="text-foreground-subtle">
                        ({entry.abbreviation})
                      </span>
                    </p>
                    <p className="text-sm text-foreground-muted">
                      {entry.institution}
                    </p>
                  </div>
                  <Badge variant="brand" className="shrink-0">
                    {entry.grade}
                  </Badge>
                </div>
                <p className="font-mono text-xs text-foreground-subtle">
                  {entry.period}
                </p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
