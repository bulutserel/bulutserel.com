"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const links = [nav.home, nav.about, ...nav.anchors] as const;

const SECTION_IDS = ["about", "experience", "education", "skills", "contact"] as const;
type SectionId = (typeof SECTION_IDS)[number] | "home";

function getActiveSection(): SectionId {
  if (typeof document === "undefined") return "home";
  const headerOffset = 96;
  const atBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  if (atBottom) return "contact";
  let active: SectionId = "home";
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= headerOffset) {
      active = id;
    }
  }
  return active;
}

function hrefToSectionId(href: string): SectionId | null {
  if (href === "/") return "home";
  if (href.startsWith("/#")) {
    const id = href.slice(2);
    if (id === "about" || SECTION_IDS.includes(id as (typeof SECTION_IDS)[number])) {
      return id as SectionId;
    }
  }
  return null;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  const updateScrollState = useCallback(() => {
    setScrolled(window.scrollY > 8);
    setPastHero(pathname !== "/" || window.scrollY > 520);
    if (pathname === "/") {
      setActiveSection(getActiveSection());
    } else {
      setActiveSection("home");
    }
  }, [pathname]);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    window.addEventListener("hashchange", updateScrollState);
    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      window.removeEventListener("hashchange", updateScrollState);
    };
  }, [updateScrollState]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    queueMicrotask(() => firstLinkRef.current?.focus());
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isNavActive = (href: string) => {
    if (pathname !== "/") {
      return href === pathname;
    }
    const section = hrefToSectionId(href);
    if (section == null) return false;
    return section === activeSection;
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-background/70 backdrop-blur-xl transition-colors duration-500",
        scrolled ? "border-line" : "border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href={nav.home.href}
          className="flex min-w-0 items-center text-sm font-medium tracking-tight transition-opacity duration-300 hover:opacity-60"
        >
          <span
            aria-hidden
            className={cn(
              "relative shrink-0 overflow-hidden rounded-full transition-all duration-700 ease-out-expo",
              pastHero ? "mr-3 size-8 opacity-100" : "mr-0 size-0 opacity-0",
            )}
          >
            <Image src="/bulut_face.png" alt="" fill sizes="32px" className="object-cover" />
          </span>
          <span className="max-w-[min(50vw,16rem)] truncate sm:max-w-none">{site.name}</span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center md:flex" aria-label="Primary">
            {links.map((item) => {
              const active = isNavActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "true" : undefined}
                  className={cn(
                    "relative px-3 py-2 text-sm transition-colors duration-300 hover:text-foreground",
                    active ? "text-foreground" : "text-muted",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-3 -bottom-px h-px origin-left bg-foreground transition-transform duration-500 ease-out-expo",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <ThemeToggle />

          <button
            type="button"
            className="grid h-9 place-items-center rounded-full border border-line px-4 text-xs transition-colors duration-300 hover:border-foreground md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-out-expo md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden" inert={!open}>
          <Container className="flex flex-col pb-6 pt-2">
            {links.map((item, i) => (
              <Link
                key={item.href}
                ref={i === 0 ? firstLinkRef : undefined}
                href={item.href}
                className={cn(
                  "border-b border-line py-4 text-2xl font-medium tracking-tight transition-colors duration-300 last:border-b-0",
                  isNavActive(item.href) ? "text-foreground" : "text-muted hover:text-foreground",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </div>
      </div>
    </header>
  );
}
