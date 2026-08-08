import { Badge } from "@/components/ui/badge";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { skillGroups } from "@/content";

export function Skills() {
  return (
    <Section id="skills" className="border-t border-border">
      <SectionHeading
        id="skills"
        eyebrow="04 / Toolkit"
        title="What I reach for."
        description="Grouped by where it sits in the stack rather than by how well I know it. Everything listed here is something I've shipped with."
      />

      <RevealGroup className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <RevealItem key={group.title}>
            <h3 className="font-mono text-xs tracking-[0.16em] text-foreground-subtle uppercase">
              {group.title}
            </h3>
            <div className="rule-fade mt-3.5" />
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Badge variant="tech">{item}</Badge>
                </li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
