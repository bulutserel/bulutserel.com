import { skills } from "@/content/skills";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const headingId = "skills-heading";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby={headingId}
      className="py-section"
    >
      <Container>
        <SectionHeading
          id={headingId}
          title="Skills"
          description="What I'm practicing, the tools I ship with, and what I'm actively leveling up on."
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-card-border bg-card/60 p-6 shadow-soft backdrop-blur-md"
            >
              <h3 className="text-balance text-center text-sm font-semibold tracking-tight text-foreground">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="inline-flex rounded-xl border border-navy-900 bg-cream px-4 py-2 text-sm font-medium tracking-tight text-navy-900 shadow-soft">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
