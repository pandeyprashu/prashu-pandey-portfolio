import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { experiences } from "@/content";

export function Experience() {
  return (
    <Section id="experience" className="border-t border-border">
      <SectionHeading
        id="experience"
        eyebrow="02 / Experience"
        title="Where I've been shipping."
      />

      <div className="mt-14 space-y-10">
        {experiences.map((role) => (
          <Reveal key={`${role.company}-${role.role}`}>
            <article className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              <header className="lg:col-span-4">
                {/* Timeline marker, drawn only where there's room for the rail. */}
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="size-2 shrink-0 rounded-full bg-brand-solid ring-4 ring-brand-wash"
                  />
                  <h3 className="text-xl font-semibold">{role.company}</h3>
                </div>
                <p className="mt-3 ml-5 text-sm text-foreground">{role.role}</p>
                <p className="mt-1.5 ml-5 font-mono text-xs text-foreground-subtle">
                  {role.period}
                </p>
                <p className="mt-1 ml-5 font-mono text-xs text-foreground-subtle">
                  {role.location}
                </p>
              </header>

              <div className="lg:col-span-8">
                <p className="text-base leading-relaxed text-foreground">
                  {role.summary}
                </p>

                <RevealGroup as="ul" className="mt-6 space-y-3.5" stagger={0.07}>
                  {role.highlights.map((highlight) => (
                    <RevealItem
                      as="li"
                      key={highlight.slice(0, 40)}
                      className="flex gap-3 text-sm leading-relaxed text-foreground-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-2 size-1 shrink-0 rounded-full bg-brand"
                      />
                      {highlight}
                    </RevealItem>
                  ))}
                </RevealGroup>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {role.stack.map((tech) => (
                    <li key={tech}>
                      <Badge variant="tech">{tech}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
