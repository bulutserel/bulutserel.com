#!/bin/bash
# Double-click this file in Finder to open Terminal in this project and start Next.js.
set -e
cd "$(dirname "$0")"

echo "Project: $PWD"
echo ""

if ! command -v npm >/dev/null 2>&1; then
  echo "npm not found. Install Node.js (includes npm): https://nodejs.org"
  echo ""
  read -r -p "Press Enter to close..."
  exit 1
fi

echo "Installing dependencies (first time may take a minute)..."
npm install

echo ""
echo "Starting dev server. Then open: http://localhost:3000"
echo "Press Ctrl+C to stop the server."
echo ""

npm run dev
