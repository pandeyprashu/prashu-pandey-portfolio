import { ProjectCard } from "@/components/sections/project-card";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { projects } from "@/content";

export function Projects() {
  return (
    <Section id="work" className="border-t border-border">
      <SectionHeading
        id="work"
        index="03"
        label="Selected work"
        title="Products I've built end to end."
        description="Three platforms in production. On each one I worked across the full stack: schema, API, admin console and the app people actually use."
      />

      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
