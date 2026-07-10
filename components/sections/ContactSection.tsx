import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { SoundcloudIcon } from "@/components/icons/SoundcloudIcon";
import { social } from "@/content/social";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const headingId = "contact-heading";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby={headingId}
      className="py-section"
    >
      <Container>
        <SectionHeading id={headingId} title="Contact" />

        <div className="mx-auto mt-12 max-w-md">
          <h3 className="text-center text-sm font-semibold tracking-tight text-foreground">
            Get in Touch
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Link
              href={social.linkedin}
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-navy-900 bg-cream px-4 py-3 text-sm font-medium tracking-tight text-navy-900 shadow-soft transition-colors hover:bg-cream/80"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="size-4 text-accent-deep" aria-hidden />
              LinkedIn
            </Link>
            <Link
              href={social.github}
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-navy-900 bg-cream px-4 py-3 text-sm font-medium tracking-tight text-navy-900 shadow-soft transition-colors hover:bg-cream/80"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="size-4 text-accent-deep" aria-hidden />
              GitHub
            </Link>
            <Link
              href={social.email}
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-navy-900 bg-cream px-4 py-3 text-sm font-medium tracking-tight text-navy-900 shadow-soft transition-colors hover:bg-cream/80"
            >
              <Mail className="size-4 text-accent-deep" aria-hidden />
              Email
            </Link>
            <Link
              href={social.soundcloud}
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-navy-900 bg-cream px-4 py-3 text-sm font-medium tracking-tight text-navy-900 shadow-soft transition-colors hover:bg-cream/80"
              target="_blank"
              rel="noreferrer"
            >
              <SoundcloudIcon className="size-4 shrink-0 text-accent-deep" />
              SoundCloud
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
