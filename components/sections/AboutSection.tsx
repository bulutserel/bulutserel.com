import { about } from "@/content/about";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const headingId = "about-section-heading";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby={headingId}
      className="border-y border-card-border/60 bg-cream/15 py-section"
    >
      <Container>
        <SectionHeading id={headingId} title="About Me" />

        <div className="mx-auto mt-12 max-w-3xl space-y-10">
          <div className="space-y-4 text-base leading-relaxed text-muted">
            {about.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <section aria-labelledby="why-pm-heading">
            <h3
              id="why-pm-heading"
              className="text-sm font-semibold tracking-tight text-foreground"
            >
              Why I choose to become a Product Manager ?
            </h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
              {about.philosophy.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="interests-heading">
            <h3
              id="interests-heading"
              className="text-center text-sm font-semibold tracking-tight text-foreground"
            >
              Interests
            </h3>
            <div className="mt-4 flex flex-wrap justify-center gap-2.5">
              {about.interests.map((item) => (
                <span
                  key={item}
                  className="inline-flex rounded-xl border border-navy-900 bg-cream px-4 py-2 text-sm font-medium tracking-tight text-navy-900 shadow-soft"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
}
