# bulutserel.com — design system

## Goal and tone

Personal site for a Product Manager working on delivery operations. It should read in seconds: who he is, what he does, how to reach him.

Swiss brutalist and minimal: typographic, grid-based, confident, nothing decorative.

## Color

| Token | Value | Use |
| --- | --- | --- |
| `--background` | `#f5f5f0` | Page background |
| `--foreground` | `#0a0a0a` | Text, grid lines, filled blocks |
| `--muted` | `#555` | Secondary labels |

The avatar is the only colored element on the page. Do not add accent colors.

## Typography

- **Anton** (`font-display`): headlines, hero stats, "Let's talk". Always uppercase.
- **Geist Sans** (`font-sans`): body copy.
- **Geist Mono** (`font-mono`): labels, nav, buttons, table meta, footer. Uppercase with wide tracking.

## Rules

- 2px solid lines (`border-2 border-foreground`) divide the page into a grid.
- No rounded corners, shadows, gradients, blur or transparency.
- No animations or transitions. Hover states invert colors instantly (black ↔ off-white).
- Keep the focus outline visible: 2px, foreground color (background color on the black Contact block).

## Page structure

1. **Header** — name left, uppercase nav right; active section shown inverted.
2. **Hero** — Anton headline (positioning, not the name), tagline, two buttons; avatar cell with status, location and mantra.
3. **Stats row** — three cells from `site.heroStats`.
4. **01 About, 02 Experience, 03 Education, 04 Skills** — numbered label in a narrow left column, content on the right.
5. **05 Contact** — full-width black block with "Let's talk →" and text links.
6. **Footer** — one line: copyright and mantra.

## Components

- `components/layout/Section.tsx` — numbered two-column section wrapper used by every content section.
- `components/ui/RoleTable.tsx` — Experience and Education table; each row is a native `<details>` that expands to show achievements.
- `components/ui/Button.tsx` — `primary` (filled) and `ghost` (outlined).

## Tech stack

- Next.js (App Router, `output: "export"`), TypeScript, Tailwind CSS v4.
- Fonts: `geist` package and `next/font/google` (Anton).
- No animation or icon libraries.
- Deployed to GitHub Pages via GitHub Actions on push to `main`.

## Roadmap

Not built yet, in priority order:

1. One or two case studies (problem, insight, decision, outcome).
2. Quantified outcomes in Experience bullets.
3. Open Graph image for link previews.
4. Privacy-friendly analytics (Plausible, Umami or GA4).
