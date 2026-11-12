import Image from "next/image";
import Link from "next/link";
import { social } from "@/content/social";
import { Container } from "@/components/layout/Container";

const links = [
  { href: social.email, label: "Email" },
  { href: social.linkedin, label: "LinkedIn", external: true },
  { href: social.github, label: "GitHub", external: true },
  { href: social.soundcloud, label: "SoundCloud", external: true },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-line pb-40 pt-24 sm:py-36"
    >
      <Container>
        <p className="reveal flex items-baseline gap-3">
          <span className="font-mono text-xs text-muted">05</span>
          <span className="text-sm font-medium uppercase tracking-[0.2em]">Contact</span>
        </p>
        <h2 id="contact-heading" className="reveal mt-8" style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
          <Link
            href={social.email}
            className="talk-link group inline-flex items-baseline gap-4 text-6xl font-medium leading-none tracking-[-0.05em] sm:text-8xl lg:text-[10rem]"
          >
            <span className="text-muted transition-colors duration-500 group-hover:text-foreground">
              Let&rsquo;s talk
            </span>
            <span
              aria-hidden
              className="inline-block transition-transform duration-500 ease-out-expo group-hover:translate-x-4 group-hover:-rotate-45"
            >
              &rarr;
            </span>
          </Link>
        </h2>
        <ul
          className="reveal mt-14 flex flex-wrap gap-x-8 gap-y-3"
          style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
        >
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="group relative inline-flex items-center gap-1 py-1 text-sm text-muted transition-colors duration-300 hover:text-foreground"
                {...(link.external && { target: "_blank", rel: "noreferrer" })}
              >
                {link.label}
                {link.external && (
                  <span
                    aria-hidden
                    className="inline-block text-xs transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    &#8599;
                  </span>
                )}
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-foreground transition-transform duration-500 ease-out-expo group-hover:origin-left group-hover:scale-x-100"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      <div
        aria-hidden
        className="peek pointer-events-none absolute bottom-0 right-4 w-28 sm:right-[8%] sm:w-44 lg:w-52"
      >
        <Image src="/bulut_head.png" alt="" width={298} height={529} sizes="208px" className="h-auto w-full" />
      </div>
    </section>
  );
}
