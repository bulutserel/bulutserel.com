import { skills } from "@/content/skills";
import { Section } from "@/components/layout/Section";

export function SkillsSection() {
  return (
    <Section id="skills" index="04" title="Skills">
      <dl className="border-t border-line">
        {skills.map((group, i) => (
          <div
            key={group.category}
            className="reveal grid gap-3 border-b border-line py-6 sm:grid-cols-[10rem_1fr] sm:gap-6"
            style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
          >
            <dt className="font-mono text-xs uppercase tracking-wider text-muted">
              {group.category}
            </dt>
            <dd className="flex flex-wrap gap-x-5 gap-y-2 text-lg">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-muted transition-colors duration-300 hover:text-foreground"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
