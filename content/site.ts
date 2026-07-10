export const site = {
  name: "Hüseyin Bulut Serel",
  title: "Product Manager",
  tagline:
    "Building scalable digital products — from discovery and data clarity to shipped iterations.",
  /** Short mantra under hero CTAs */
  heroMantra: "TALK, PLAN, BUILD",
  description:
    "Personal site — product strategy, KPI ownership, and cross-functional product leadership.",
  url: "https://bulutserel.com",
  locale: "en",
  /** Shown under hero avatar */
  location: "Ankara, Türkiye",
} as const;

export const nav = {
  home: { href: "/", label: "Home" },
  about: { href: "/#about", label: "About" },
  anchors: [
    { href: "/#experience", label: "Experience", id: "experience" as const },
    { href: "/#education", label: "Education", id: "education" as const },
    { href: "/#skills", label: "Skills", id: "skills" as const },
    { href: "/#contact", label: "Contact", id: "contact" as const },
  ],
} as const;
