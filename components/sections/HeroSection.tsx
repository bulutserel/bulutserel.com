"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { SoundcloudIcon } from "@/components/icons/SoundcloudIcon";
import { social } from "@/content/social";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function HeroSection() {
  const reduce = useReducedMotion();
  const duration = reduce ? 0 : 0.45;

  return (
    <section className="relative overflow-hidden bg-navy-900 py-section text-cream">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_-15%,var(--hero-glow),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_25%,var(--hero-sand),transparent_40%)]" />
      </div>
      <Container>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-sage-500">
            {site.title}
          </p>
          <div className="mt-3 flex flex-row items-start gap-4 sm:gap-8">
            <div className="flex min-w-0 flex-1 flex-col">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-cream sm:text-6xl">
                {site.name}
                <span className="sr-only">, {site.title}</span>
              </h1>
              <p className="mt-2 max-w-2xl text-pretty text-lg leading-relaxed text-cream/80 sm:mt-3 sm:text-xl">
                {site.tagline}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
                <Button href="/#experience" variant="ghost">
                  View Experience
                </Button>
                <Button href="/#contact" variant="ghost">
                  Contact Me
                </Button>
              </div>
              <p className="mt-5 max-w-2xl font-mono text-xs font-normal uppercase tracking-[0.28em] text-cream/60 sm:mt-6 sm:text-sm sm:tracking-[0.32em] md:text-base md:tracking-[0.34em]">
                {site.heroMantra}
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-3 sm:mt-1 sm:gap-4">
              <div className="relative aspect-[4/5] w-36 overflow-hidden rounded-2xl border border-cream/20 bg-navy-800 shadow-soft sm:w-52 lg:w-56">
                <Image
                  src="/bulut_avatar.png"
                  alt={`Illustrated portrait of ${site.name}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 144px, (max-width: 1024px) 208px, 224px"
                  priority
                />
              </div>
              <nav
                aria-label="Social profiles"
                className="flex flex-wrap items-center justify-center gap-2"
              >
                <Link
                  href={social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-cream/15 bg-navy-800/60 text-cream/70 shadow-[var(--shadow-inset)] backdrop-blur-sm transition-colors hover:text-sage-300 sm:size-10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-4 shrink-0 sm:size-[18px]" aria-hidden />
                </Link>
                <Link
                  href={social.email}
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-cream/15 bg-navy-800/60 text-cream/70 shadow-[var(--shadow-inset)] backdrop-blur-sm transition-colors hover:text-sage-300 sm:size-10"
                  aria-label="Email"
                >
                  <Mail className="size-4 shrink-0 sm:size-[18px]" aria-hidden />
                </Link>
                <Link
                  href={social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-cream/15 bg-navy-800/60 text-cream/70 shadow-[var(--shadow-inset)] backdrop-blur-sm transition-colors hover:text-sage-300 sm:size-10"
                  aria-label="GitHub"
                >
                  <Github className="size-4 shrink-0 sm:size-[18px]" aria-hidden />
                </Link>
                <Link
                  href={social.soundcloud}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-cream/15 bg-navy-800/60 text-cream/70 shadow-[var(--shadow-inset)] backdrop-blur-sm transition-colors hover:text-sage-300 sm:size-10"
                  aria-label="SoundCloud"
                >
                  <SoundcloudIcon className="size-4 shrink-0 sm:size-[18px]" />
                </Link>
              </nav>
              <p className="flex items-center justify-center gap-2 text-center text-xs leading-snug text-cream/60 sm:text-sm">
                <span
                  className="select-none text-base leading-none sm:text-lg"
                  role="img"
                  aria-label="Turkish flag"
                >
                  🇹🇷
                </span>
                <span>{site.location}</span>
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
