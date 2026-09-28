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
      className="bg-foreground py-16 text-background sm:py-24"
    >
      <Container>
        <p className="font-mono text-sm uppercase tracking-wide">05 — Contact</p>
        <h2 id="contact-heading" className="mt-4">
          <Link
            href={social.email}
            className="font-display text-6xl uppercase leading-none hover:underline focus-visible:outline-background sm:text-8xl lg:text-9xl"
          >
            Let&rsquo;s talk &rarr;
          </Link>
        </h2>
        <ul className="mt-10 flex flex-wrap gap-x-2 gap-y-3 font-mono text-sm uppercase tracking-wide">
          {links.map((link, i) => (
            <li key={link.label} className="flex gap-2">
              {i > 0 && <span aria-hidden>/</span>}
              <Link
                href={link.href}
                className="underline-offset-4 hover:underline focus-visible:outline-background"
                {...(link.external && { target: "_blank", rel: "noreferrer" })}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
