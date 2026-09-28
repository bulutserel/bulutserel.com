# bulutserel.com

Personal site of Hüseyin Bulut Serel. Next.js static export, deployed to GitHub Pages at [bulutserel.com](https://bulutserel.com).

## Open the site locally

You need **either** Node.js on your machine **or** Docker Desktop.

### Easiest on Mac (after Node is installed)

Double‑click **`Start Local Server.command`** in Finder. It opens Terminal, runs `npm install`, then `npm run dev`. When you see “Ready”, open **http://localhost:3000**.

### Option A — Node.js (recommended)

1. Install **Node.js 20+** from [https://nodejs.org](https://nodejs.org) (LTS).
2. In Cursor: **Terminal → New Terminal** (use a **new** terminal after installing Node).
3. Run:

```bash
cd ~/Desktop/bulutserel.com
npm install
npm run dev
```

4. Open **http://localhost:3000** in your browser.

If `npm` is still “not found”, your terminal is not picking up Node. This repo includes **`.vscode/settings.json`** so macOS uses a **login shell** (`zsh -l`) in Cursor’s terminal, which usually loads `nvm` / Homebrew paths. Close all terminals and open a new one, then try again.

### Option B — Docker (no local Node required)

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) and start it.
2. From the project folder run:

```bash
cd ~/Desktop/bulutserel.com
docker compose up --build
```

3. When you see “Ready”, open **http://localhost:3000**.

The first run runs `npm install` inside the container; it can take a minute.

### Still stuck?

- **Connection refused**: nothing is listening on port 3000 — the dev server is not running or it crashed. Read the terminal output and fix any red errors.
- **Port in use**: stop other apps on 3000 or change the port in `docker-compose.yml` / run `npm run dev -- -p 3001` and open that port instead.

## Editing content

All copy lives in `content/`, so most changes don't touch components:

| File | What it holds |
| --- | --- |
| `site.ts` | Name, hero headline and tagline, hero stats, avatar caption, mantra, nav |
| `about.ts` | Bio, Rocky quote, "Why I Chose to Become a Product Manager", interests |
| `experience.ts` | Roles and achievements shown in the Experience table |
| `education.ts` | Education table |
| `skills.ts` | Skill rows (doing / using / learning) |
| `social.ts` | Email, LinkedIn, GitHub, SoundCloud links |

Design rules are in [`project.md`](project.md).

## Checks

Stop the dev server first — `next build` writes to the same `.next` folder.

```bash
npx tsc --noEmit
npm run lint
npm run build   # static export to out/
npx serve out   # preview the exact files that go live
```

## Deploying

Every push to `main` runs [`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml), which builds the site and deploys `out/` to GitHub Pages. The custom domain is set in `public/CNAME`.
