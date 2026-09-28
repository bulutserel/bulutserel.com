"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";
import { Container } from "@/components/layout/Container";
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
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  const updateScrollState = useCallback(() => {
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
    <header className="sticky top-0 z-40 border-b-2 border-foreground bg-background">
      <Container className="flex h-14 items-center justify-between gap-4 sm:h-16">
        <Link
          href={nav.home.href}
          className="max-w-[min(60vw,16rem)] truncate font-mono text-sm font-semibold uppercase tracking-wide hover:underline sm:max-w-none"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((item) => {
            const active = isNavActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 font-mono text-xs uppercase tracking-wide hover:bg-foreground hover:text-background",
                  active && "bg-foreground text-background",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="-mr-4 h-14 bg-foreground px-4 font-mono text-xs uppercase tracking-wide text-background sm:-mr-6 sm:h-16 sm:px-6 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "border-t-2 border-foreground bg-background md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col py-2">
          {links.map((item, i) => (
            <Link
              key={item.href}
              ref={i === 0 ? firstLinkRef : undefined}
              href={item.href}
              className={cn(
                "-mx-2 border-b-2 border-foreground px-2 py-3 font-mono text-sm uppercase tracking-wide last:border-b-0 hover:bg-foreground hover:text-background",
                isNavActive(item.href) && "bg-foreground text-background",
              )}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </Container>
      </div>
    </header>
  );
}
