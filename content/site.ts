export const site = {
  name: "Hüseyin Bulut Serel",
  title: "Product Manager",
  headline: "Product Manager for delivery operations.",
  tagline: "Turning courier and driver workflows into reliable products.",
  heroStats: ["7 yrs in tech", "Cross domain", "QA → Product"],
  /** Short mantra under hero CTAs */
  heroMantra: "TALK, PLAN AND BUILD",
  description:
    "Personal site — product strategy, KPI ownership, and cross-functional product leadership.",
  url: "https://bulutserel.com",
  locale: "en",
  /** Shown under hero avatar */
  status: "PM @ Getir",
  location: "Ankara, TR",
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
