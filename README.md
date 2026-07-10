# bulutserel.com2

## Open the site locally

You need **either** Node.js on your machine **or** Docker Desktop.

### Easiest on Mac (after Node is installed)

Double‑click **`Start Local Server.command`** in Finder. It opens Terminal, runs `npm install`, then `npm run dev`. When you see “Ready”, open **http://localhost:3000**.

### Option A — Node.js (recommended)

1. Install **Node.js 20+** from [https://nodejs.org](https://nodejs.org) (LTS).
2. In Cursor: **Terminal → New Terminal** (use a **new** terminal after installing Node).
3. Run:

```bash
cd ~/Desktop/bulutserel.com2
npm install
npm run dev
```

4. Open **http://localhost:3000** in your browser.

If `npm` is still “not found”, your terminal is not picking up Node. This repo includes **`.vscode/settings.json`** so macOS uses a **login shell** (`zsh -l`) in Cursor’s terminal, which usually loads `nvm` / Homebrew paths. Close all terminals and open a new one, then try again.

### Option B — Docker (no local Node required)

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) and start it.
2. From the project folder run:

```bash
cd ~/Desktop/bulutserel.com2
docker compose up --build
```

3. When you see “Ready”, open **http://localhost:3000**.

The first run runs `npm install` inside the container; it can take a minute.

### Still stuck?

- **Connection refused**: nothing is listening on port 3000 — the dev server is not running or it crashed. Read the terminal output and fix any red errors.
- **Port in use**: stop other apps on 3000 or change the port in `docker-compose.yml` / run `npm run dev -- -p 3001` and open that port instead.
