import { about } from "@/content/about";
import { Section } from "@/components/layout/Section";

export function AboutSection() {
  return (
    <Section id="about" index="01" title="About">
      <div className="max-w-2xl space-y-10">
        <div className="space-y-4 text-base leading-relaxed">
          {about.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <p className="border-l-2 border-foreground pl-5 text-lg italic leading-relaxed">
          &ldquo;{about.quote.text}&rdquo;{" "}
          <span className="whitespace-nowrap font-mono text-sm not-italic">
            &mdash; {about.quote.author}
          </span>
        </p>

        <section aria-labelledby="why-pm-heading">
          <h3 id="why-pm-heading" className="font-display text-2xl uppercase sm:text-3xl">
            Why I Chose to Become a Product Manager
          </h3>
          <div className="mt-4 space-y-4 text-base leading-relaxed">
            {about.philosophy.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section aria-labelledby="interests-heading">
          <h3 id="interests-heading" className="font-display text-2xl uppercase sm:text-3xl">
            Interests
          </h3>
          <div className="mt-4 space-y-5">
            {[
              { label: "Professionally", items: about.interests.professional },
              { label: "Beyond work", items: about.interests.personal },
            ].map((group) => (
              <div key={group.label}>
                <p className="font-mono text-xs uppercase tracking-wide text-muted">
                  {group.label}
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-2 border-foreground px-3 py-1.5 font-mono text-xs uppercase tracking-wide"
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
