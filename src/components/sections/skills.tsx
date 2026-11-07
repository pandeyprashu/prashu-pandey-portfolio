import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { skillGroups } from "@/content";
import { cn } from "@/lib/utils";

const WIDE_GROUP_MIN_ITEMS = 10;

export function Skills() {
  return (
    <Section id="skills" className="border-t border-border">
      <SectionHeading
        id="skills"
        index="04"
        label="Toolkit"
        title="What I reach for."
        description="Grouped by where it sits in the stack rather than by how well I know it. Everything listed here is something I've shipped with."
      />

      <RevealGroup className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((group) => (
          <RevealItem
            key={group.title}
            className={cn(
              group.items.length >= WIDE_GROUP_MIN_ITEMS && "md:col-span-2",
            )}
          >
            <Card variant="interactive" className="h-full gap-4 rounded-3xl p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-mono text-sm font-semibold tracking-normal text-foreground">
                  <span aria-hidden className="text-brand">
                    {"./"}
                  </span>
                  {group.title}
                </h3>
                <span aria-hidden className="font-mono text-xs text-foreground-subtle">
                  {group.items.length}
                </span>
              </div>
              <div className="rule-fade" />
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge variant="tech">{item}</Badge>
                  </li>
                ))}
              </ul>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
