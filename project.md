# bulutserel.com — design system

## Goal and tone

Personal site for a Product Manager who works across domains, from 0 to 1. It should read in seconds: who he is, what he does, how to reach him.

Minimal and cinematic: dark by default, typographic, lots of space, with calm motion that never gets in the way.

## Color

Grayscale only. Dark is the default; light follows the system setting or the header toggle (`data-theme` on `<html>`, saved in `localStorage`).

| Token | Dark | Light | Use |
| --- | --- | --- | --- |
| `--background` | `#0a0a0a` | `#fafafa` | Page background |
| `--foreground` | `#ededed` | `#0a0a0a` | Primary text, filled buttons |
| `--muted` | `#8a8a8a` | `#6b6b6b` | Secondary text, inactive nav |
| `--faint` | `#3a3a3a` | `#c4c4c4` | Marquee text, bullets |
| `--line` | `#222222` | `#e4e4e4` | 1px dividers and outlines |
| `--surface` | `#141414` | `#f0f0f0` | Image placeholder |

The avatar is the only colored element on the page.

## Typography

- **Geist Sans** for everything: headlines are medium weight with tight negative tracking.
- **Geist Mono** for small uppercase meta labels (dates, section numbers, footer).

## Motion

- On the first visit in a session an intro curtain shows the avatar, the name and a loading line, then lifts (`.intro`, skipped via `sessionStorage`).
- Hero headline rises in word by word after the curtain; the rest of the hero fades up after it.
- Content uses `.reveal` and fades up once when it scrolls into view (`RevealObserver`). Use `--reveal-delay` to stagger.
- Stats run as an endless marquee that pauses on hover.
- The mantra ring around the hero avatar turns slowly and speeds up on hover.
- The About quote illustration draws its steps in, then the figure raises its arms and keeps hopping.
- The contact avatar head rises when "Let's talk" is hovered.
- Hovers are short color and position transitions (`ease-out-expo`).
- Everything is switched off under `prefers-reduced-motion`. Content is never hidden without JS.

## Page structure

1. **Header**: sticky with blur, name left (a mini avatar slides in once the hero is passed), nav with sliding underline, theme toggle.
2. **Hero**: status line, two-tone headline, tagline, two pill buttons, social icons (GitHub, LinkedIn, SoundCloud, email), round avatar with the mantra rotating around it (`AvatarRing`).
3. **Marquee**: `site.heroStats`.
4. **01 About, 02 Experience, 03 Education, 04 Skills**: small number plus a large section title, content in the right three quarters. The About quote has a small line illustration of steps next to it.
5. **05 Contact**: oversized "Let's talk →" and text links; the cut-out avatar head peeks over the bottom edge and rises when "Let's talk" is hovered.
6. **Footer**: one line, copyright and mantra.

## Components

- `components/layout/Section.tsx`: numbered two-column section wrapper.
- `components/ui/RoleTable.tsx`: Experience and Education accordion with animated height and a soft gray hover background.
- `components/ui/Button.tsx`: `primary` (filled pill) and `ghost` (outlined pill).
- `components/ui/AvatarRing.tsx`: hero avatar with the rotating mantra.
- `components/ui/SocialIcons.tsx`: round icon links built from `content/social.ts`.
- `components/ui/StairsIllustration.tsx`: line drawing beside the About quote.
- `components/ui/Marquee.tsx`, `components/ui/ThemeToggle.tsx`, `components/motion/RevealObserver.tsx`.

## Avatar files

- `public/bulut_avatar.png`: the original illustration.
- `public/bulut_bust.png`: square head-and-shoulders crop with the T-shirt (hero ring); sides extended with the image's own edge colors.
- `public/bulut_face.png`: tighter square face crop (header, intro, icons).
- `public/bulut_head.png`: head cut out with a transparent background (contact peek).
- `app/icon.png`, `app/apple-icon.png`, `app/opengraph-image.png`: favicon, home-screen icon and link preview, generated from the face crop.

The link preview is a static image with the headline and location baked in. Regenerate it whenever `site.headlineParts` or `site.location` changes.

## Tech stack

- Next.js (App Router, `output: "export"`), TypeScript, Tailwind CSS v4.
- Fonts: `geist` package.
- Motion is plain CSS plus one IntersectionObserver; no animation library.
- Icons: `@tabler/icons-react` (outline set), used for the hero social links.
- Deployed to GitHub Pages via GitHub Actions on push to `main`.

## Roadmap

Not built yet, in priority order:

1. One or two case studies (problem, insight, decision, outcome).
2. Quantified outcomes in Experience bullets.
3. Privacy-friendly analytics (Plausible, Umami or GA4).
