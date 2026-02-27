#!/bin/bash
# ============================================================
#   MF Luxury Rentals — Start Script (macOS)
# ============================================================
set -e

cd "$(dirname "$0")/.." || { echo "❌  Could not find project root"; exit 1; }

echo ""
echo "  ╔══════════════════════════════════════════╗"
echo "  ║     MF Italy Luxury Rent — macOS Dev     ║"
echo "  ╚══════════════════════════════════════════╝"
echo ""

# Check for Node.js
if ! command -v node &>/dev/null; then
    echo "❌  Node.js not found. Install via: brew install node"
    exit 1
fi

# Check for npm
if ! command -v npm &>/dev/null; then
    echo "❌  npm not found. Install via: brew install node"
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦  Installing dependencies..."
    npm install
fi

echo "🚀  Starting development server..."
echo ""
npm run dev
