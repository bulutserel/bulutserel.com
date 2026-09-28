import Image from "next/image";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading">
      <Container className="grid md:grid-cols-[2fr_1fr]">
        <div className="flex flex-col justify-center py-10 md:border-r-2 md:border-foreground md:py-16 md:pr-10">
          <h1
            id="hero-heading"
            className="text-balance font-display text-5xl uppercase leading-[0.95] sm:text-7xl lg:text-8xl"
          >
            {site.headline}
          </h1>
          <p className="mt-6 max-w-xl text-pretty font-mono text-sm leading-relaxed sm:text-base">
            {site.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/#contact">Contact me</Button>
            <Button href="/#experience" variant="ghost">
              View experience
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 pb-8 md:items-center md:justify-center md:py-16 md:pl-10">
          <div className="relative aspect-[4/5] w-40 border-2 border-foreground sm:w-52 lg:w-60">
            <Image
              src="/bulut_avatar.png"
              alt={`Illustrated portrait of ${site.name}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 208px, 240px"
              priority
            />
          </div>
          <div className="font-mono text-xs uppercase tracking-wide md:text-center">
            <p className="font-semibold">{site.status}</p>
            <p className="mt-1 text-muted">{site.location}</p>
            <p className="mt-3 italic">&ldquo;{site.heroMantra}&rdquo;</p>
          </div>
        </div>
      </Container>

      <div className="border-t-2 border-foreground">
        <Container>
          <ul className="grid sm:grid-cols-3">
            {site.heroStats.map((stat, i) => (
              <li
                key={stat}
                className={
                  i > 0
                    ? "border-t-2 border-foreground py-5 font-display text-2xl uppercase sm:border-l-2 sm:border-t-0 sm:pl-6"
                    : "py-5 font-display text-2xl uppercase"
                }
              >
                {stat}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
