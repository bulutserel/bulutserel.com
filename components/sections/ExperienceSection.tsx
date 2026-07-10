import { experience } from "@/content/experience";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceCard } from "@/components/ui/ExperienceCard";

const headingId = "experience-heading";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby={headingId}
      className="border-t border-card-border/60 bg-cream/25 py-section"
    >
      <Container>
        <SectionHeading
          id={headingId}
          title="Experience"
          description="A timeline of roles where I owned outcomes and worked"
        />
        <div className="relative mx-auto mt-12 max-w-3xl">
          <div
            aria-hidden
            className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-card-border to-transparent sm:left-[13px]"
          />
          <ol className="space-y-6">
            {experience.map((group, index) => (
              <li key={group.id} className="relative pl-8 sm:pl-10">
                <span
                  aria-hidden
                  className="absolute left-0 top-6 flex size-6 items-center justify-center rounded-full border border-card-border bg-cream/90 shadow-[var(--shadow-inset)] sm:top-7 sm:size-7"
                >
                  <span className="size-2 rounded-full bg-primary" />
                </span>
                <ExperienceCard group={group} index={index} />
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
