import { site } from "@/content/site";
import { AvatarRing } from "@/components/ui/AvatarRing";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Marquee } from "@/components/ui/Marquee";
import { SocialIcons } from "@/components/ui/SocialIcons";

function Words({ text, start, className }: { text: string; start: number; className?: string }) {
  return text.split(" ").map((word, i) => (
    <span key={`${word}-${i}`} className={className}>
      <span className="word" style={{ "--i": start + i } as React.CSSProperties}>
        {word}
      </span>{" "}
    </span>
  ));
}

export function HeroSection() {
  const [lead, rest] = site.headlineParts;
  const leadCount = lead.split(" ").length;

  return (
    <section aria-labelledby="hero-heading">
      <Container className="grid items-end gap-12 pb-16 pt-16 sm:pt-24 md:grid-cols-[1fr_auto] md:pb-24 md:pt-32">
        <div>
          <p
            className="fade-up font-mono text-xs uppercase tracking-[0.2em] text-muted"
            style={{ "--delay": "0ms" } as React.CSSProperties}
          >
            {site.status} — {site.location}
          </p>
          <h1
            id="hero-heading"
            className="mt-6 text-balance text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[6.5rem]"
          >
            <Words text={lead} start={0} />
            <Words text={rest} start={leadCount} className="text-muted" />
          </h1>
          <p
            className="fade-up mt-8 max-w-lg text-pretty text-base leading-relaxed text-muted sm:text-lg"
            style={{ "--delay": "700ms" } as React.CSSProperties}
          >
            {site.tagline}
          </p>
          <div
            className="fade-up mt-10 flex flex-wrap gap-3"
            style={{ "--delay": "850ms" } as React.CSSProperties}
          >
            <Button href="/#experience">View experience</Button>
            <Button href="/#contact" variant="ghost">
              Contact me
            </Button>
          </div>
          <div className="fade-up mt-8" style={{ "--delay": "1000ms" } as React.CSSProperties}>
            <SocialIcons className="flex gap-2" />
          </div>
        </div>

        <div className="fade-up" style={{ "--delay": "500ms" } as React.CSSProperties}>
          <AvatarRing />
        </div>
      </Container>

      <Marquee items={site.heroStats} />
    </section>
  );
}
