"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const links = [nav.home, nav.about, ...nav.anchors] as const;

const SECTION_IDS = ["about", "experience", "education", "skills", "contact"] as const;
type SectionId = (typeof SECTION_IDS)[number] | "home";

function getActiveSection(): SectionId {
  if (typeof document === "undefined") return "home";
  const headerOffset = 96;
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
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  const updateScrollState = useCallback(() => {
    setScrolled(window.scrollY > 8);
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
        "sticky top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-200",
        scrolled
          ? "border-card-border/80 bg-cream/80 backdrop-blur-md"
          : "border-transparent bg-cream/50 backdrop-blur-sm",
      )}
    >
      <Container className="flex h-14 items-center justify-between gap-4 sm:h-16">
        <Link
          href={nav.home.href}
          className="max-w-[min(50vw,14rem)] truncate text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent-deep sm:max-w-none"
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
                  "rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-sage-300/25 hover:text-foreground",
                  active && "bg-sage-300/30 text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-card-border bg-card/60 p-2 text-foreground backdrop-blur-md md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="size-5" aria-hidden />
          ) : (
            <Menu className="size-5" aria-hidden />
          )}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "border-b border-card-border/80 bg-background/95 backdrop-blur-md md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-1 py-3">
          {links.map((item, i) => (
            <Link
              key={item.href}
              ref={i === 0 ? firstLinkRef : undefined}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm text-foreground hover:bg-sage-300/25",
                isNavActive(item.href) && "bg-sage-300/30",
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
