#!/bin/bash
# ============================================================
#   MF Luxury Rentals — Repair Script (Linux)
# ============================================================
set -e

cd "$(dirname "$0")/.." || { echo "❌  Could not find project root"; exit 1; }

echo ""
echo "  ╔══════════════════════════════════════════╗"
echo "  ║     MF Italy Luxury Rent — Linux Repair  ║"
echo "  ╚══════════════════════════════════════════╝"
echo ""

# Check for Node.js
if ! command -v node &>/dev/null; then
    echo "❌  Node.js not found."
    echo "    Install via: sudo apt install nodejs npm"
    exit 1
fi

echo "🔧  [1/4] Removing node_modules..."
rm -rf node_modules

echo "🔧  [2/4] Clearing npm cache..."
npm cache clean --force

echo "🔧  [3/4] Removing lock file..."
rm -f package-lock.json

echo "📦  [4/4] Reinstalling dependencies..."
npm install

echo ""
echo "✅  Repair complete! Run ./start/run_linux.sh to start."
echo ""
