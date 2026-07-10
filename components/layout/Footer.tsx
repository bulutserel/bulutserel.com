import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { SoundcloudIcon } from "@/components/icons/SoundcloudIcon";
import { social } from "@/content/social";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";

const iconClass = "size-4 shrink-0";

export function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-900 py-10">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-cream">{site.name}</p>
          <p className="mt-1 text-sm text-cream/60">{site.title}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={social.linkedin}
            className="inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-sage-300"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className={iconClass} aria-hidden />
            LinkedIn
          </Link>
          <Link
            href={social.github}
            className="inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-sage-300"
            target="_blank"
            rel="noreferrer"
          >
            <Github className={iconClass} aria-hidden />
            GitHub
          </Link>
          <Link
            href={social.email}
            className="inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-sage-300"
          >
            <Mail className={iconClass} aria-hidden />
            Email
          </Link>
          <Link
            href={social.soundcloud}
            className="inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-sage-300"
            target="_blank"
            rel="noreferrer"
          >
            <SoundcloudIcon className={iconClass} />
            SoundCloud
          </Link>
        </div>
      </Container>
    </footer>
  );
}
