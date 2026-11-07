import { Badge } from "@/components/ui/badge";
import { BulletMarker } from "@/components/ui/bullet";
import { Card } from "@/components/ui/card";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { experiences } from "@/content";

export function Experience() {
  return (
    <Section id="experience" className="border-t border-border">
      <SectionHeading
        id="experience"
        index="02"
        label="Experience"
        title="Where I've been shipping."
      />

      <div className="flex flex-col gap-4">
        {experiences.map((role) => (
          <Reveal key={`${role.company}-${role.role}`}>
            <Card size="lg" className="lg:py-10">
              <article className="grid gap-8 px-(--card-spacing) lg:grid-cols-12 lg:gap-12 lg:px-10">
                <header className="flex flex-col gap-3 lg:col-span-4">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="size-2 shrink-0 rounded-full bg-brand-solid ring-4 ring-brand-wash"
                    />
                    <h3 className="text-xl font-bold sm:text-2xl">{role.company}</h3>
                  </div>
                  <div className="flex flex-col gap-1.5 pl-5">
                    <p className="font-mono text-sm text-brand">{role.role}</p>
                    <p className="font-mono text-xs text-foreground-subtle">
                      {role.period}
                    </p>
                    <p className="font-mono text-xs text-foreground-subtle">
                      {role.location}
                    </p>
                  </div>
                </header>

                <div className="flex flex-col gap-6 lg:col-span-8">
                  <p className="text-base leading-relaxed text-foreground">
                    {role.summary}
                  </p>

                  <RevealGroup as="ul" className="flex flex-col gap-3.5" stagger={0.07}>
                    {role.highlights.map((highlight) => (
                      <RevealItem
                        as="li"
                        key={highlight.slice(0, 40)}
                        className="flex gap-3 text-sm leading-relaxed text-foreground-muted"
                      >
                        <BulletMarker />
                        {highlight}
                      </RevealItem>
                    ))}
                  </RevealGroup>

                  <ul className="flex flex-wrap gap-2 pt-1">
                    {role.stack.map((tech) => (
                      <li key={tech}>
                        <Badge variant="tech">{tech}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
