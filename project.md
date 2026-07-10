## Project Goal

Build a modern, minimal and premium personal website for a Product Manager.

The website should feel:
- clean
- elegant
- fast
- calm
- editorial
- sophisticated
- modern
- warm-tech inspired

The design should resemble:
- Scandinavian minimalism
- Premium SaaS aesthetics
- Notion
- Stripe Press

Avoid:
- crowded layouts
- too many colors
- generic portfolio templates
- corporate feeling


# Tech Stack

Use:

- Next.js (latest stable version)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

Deployment target:
- Vercel or github

# Main Pages

## 1. Home Page

Hero section should include:

- Name
- Product Manager title
- Short description
- CTA buttons

Example:

"Hüseyin Bulut Serel"
"Product Manager building scalable digital products."


CTA buttons:
- View Projects
- Contact Me

Add:
- smooth animations
- gradient background
- modern typography

---

## 2. About Page

Include:
- short biography
- product philosophy
- leadership approach
- interests

Mention:
- product strategy
- KPI ownership
- cross-functional collaboration
- 0 to 1 product building


## 3. Experience Section

Timeline-based layout.

Each experience card should contain:
- company
- role
- duration
- achievements

Styling:
- **Company names:** Deep Navy `#0F172A` (`text-navy-900`), semibold `h3` — no wrapper spans
- **Achievements:** plain `<li>` text with list bullets (no nested spans)

Use animated cards.

---

## 4. Skills Section

Categories:

### Product
- Roadmap Planning
- KPI Tracking
- Product Discovery
- Agile

### Technical
- JIRA
- Braze
- Analytics
- Firebase
- AI Tools

### Soft
- Stakeholder Management
- Communication
- Team Leadership


----

## 5. Projects Section

Create modern project cards.

Each card should include:
- title
- short description
- technologies
- outcome/impact

Hover animations required.


----

## 6. Contact Section

Include:
- LinkedIn
- GitHub
- Email

Add a modern contact form UI.

----

# Design System

## Color System

### Primary Palette
- Warm Cream
- Deep Navy Blue
- Soft Sand Beige

### General Color Direction
A premium and minimal palette built around deep navy blue, warm cream, and subtle sand tones.

The design language should feel:
- Calm
- Editorial
- Sophisticated
- Modern
- Warm-tech inspired

Inspired by Scandinavian minimalism and premium SaaS aesthetics.

### Accent Colors
- Soft Sage Green
- Light Moss Green
- Muted Green Highlights

Accent colors should be used carefully for:
- CTA buttons
- Active states
- Links
- Hover interactions
- Small UI highlights

Avoid overly saturated greens.

---

### Suggested HEX Palette

#### Background Colors
- Cream: `#F6F1E8`
- Warm Off White: `#FAF7F2`
- Sand: `#D9CBB8`

#### Navy Tones
- Deep Navy: `#0F172A`
- Soft Navy: `#1E293B`
- Muted Navy: `#334155`

#### Green Accent Colors
- Sage Green: `#A3B18A`
- Soft Moss: `#7C9473`
- Light Green Highlight: `#BFD8B8`

#### Text Colors
- Primary Text: `#111827`
- Secondary Text: `#475569`
- Muted Text: `#6B7280`

#### Border / Divider Colors
- Soft Border: `#E5E7EB`
- Warm Divider: `#DDD6CE`

---

### UI Usage Recommendations

#### Hero Section
- Background: Deep Navy
- Main Text: Warm Cream
- Accent Elements: Sage Green

#### Navbar
- Transparent or Warm Cream
- Minimal thin borders
- Navy typography

#### Cards
- Warm Off White backgrounds
- Subtle shadows
- Thin warm borders
- Experience company titles: Deep Navy `#0F172A`

#### Buttons
Primary CTA:
- Navy background
- Cream text

Secondary CTA:
- Cream background
- Navy border
- Sage Green hover effect

#### Footer
- Dark navy background
- Low contrast muted text
- Small green interaction accents

---

### Tailwind Naming (globals.css @theme)

```js
colors: {
  cream: "#F6F1E8",
  sand: "#D9CBB8",
  navy: {
    900: "#0F172A",
    800: "#1E293B",
    700: "#334155"
  },
  sage: {
    300: "#BFD8B8",
    500: "#A3B18A",
    700: "#7C9473"
  }
}
```

Use gradients carefully.

---
## Typography

Use:
- Inter
OR
- Geist

Large bold headings.

Minimal body text.
---

## UI Style

Style keywords:
- minimal
- premium
- modern SaaS
- glassmorphism (light usage)
- soft shadows
- smooth transitions

Animations should be subtle.

---

# Responsive Design

Website must work perfectly on:
- desktop
- tablet
- mobile

---

# Coding Rules

- Write reusable components
- Avoid unnecessary libraries
- Use clean TypeScript types
- Keep components modular
- Prefer server components when possible

---

# Performance

Optimize for:
- Lighthouse score
- SEO
- fast loading
- accessibility

Use:
- lazy loading
- optimized images
- semantic HTML









