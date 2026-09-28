import { skills } from "@/content/skills";
import { Section } from "@/components/layout/Section";

export function SkillsSection() {
  return (
    <Section id="skills" index="04" title="Skills">
      <dl className="border-t-2 border-foreground">
        {skills.map((group) => (
          <div
            key={group.category}
            className="grid gap-2 border-b-2 border-foreground py-4 sm:grid-cols-[11rem_1fr] sm:gap-4"
          >
            <dt className="font-mono text-xs uppercase tracking-wide text-muted sm:text-sm">
              {group.category}
            </dt>
            <dd className="font-semibold uppercase leading-relaxed">
              {group.items.join(" / ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
