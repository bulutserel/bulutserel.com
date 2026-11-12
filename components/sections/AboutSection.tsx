import { about } from "@/content/about";
import { Section } from "@/components/layout/Section";
import { StairsIllustration } from "@/components/ui/StairsIllustration";

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

export function AboutSection() {
  return (
    <Section id="about" index="01" title="About">
      <div className="max-w-2xl space-y-16">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {about.bio.map((p, i) => (
            <p key={p} className={i === 0 ? "reveal text-foreground" : "reveal"} style={delay(i * 80)}>
              {p}
            </p>
          ))}
        </div>

        <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-10">
          <StairsIllustration className="w-32 shrink-0 sm:order-last sm:w-40" />
          <figure>
            <blockquote className="text-balance text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">
              &ldquo;{about.quote.text}&rdquo;
            </blockquote>
            <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              &mdash; {about.quote.author}
            </figcaption>
          </figure>
        </div>

        <section aria-labelledby="why-pm-heading" className="reveal">
          <h3 id="why-pm-heading" className="text-2xl font-medium tracking-[-0.02em]">
            Why I chose to become a product manager
          </h3>
          <div className="mt-5 space-y-5 leading-relaxed text-muted">
            {about.philosophy.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section aria-labelledby="interests-heading" className="reveal">
          <h3 id="interests-heading" className="text-2xl font-medium tracking-[-0.02em]">
            Interests
          </h3>
          <div className="mt-6 space-y-6">
            {[
              { label: "Professionally", items: about.interests.professional },
              { label: "Beyond work", items: about.interests.personal },
            ].map((group) => (
              <div key={group.label}>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {group.label}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="cursor-default rounded-full border border-line px-4 py-1.5 text-sm transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Section>
  );
}
