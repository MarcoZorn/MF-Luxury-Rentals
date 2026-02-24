#!/bin/bash

# MF LUXURY RENTALS - PRODUCTION DEPLOYMENT SCRIPT
# Role: Automated Push to GitHub via PAT

# Load environment variables if .env exists
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Ensure PAT is available
CURRENT_PAT=${GITHUB_PAT:-$1}

if [ -z "$CURRENT_PAT" ]; then
    echo "❌ Error: GITHUB_PAT not found in .env or as argument."
    echo "Usage: ./deploy-to-github.sh <YOUR_PAT>"
    exit 1
fi

USERNAME="MarcoZorn"
REPO="MF-Luxury-Rentals"
REMOTE_URL="https://$USERNAME:$CURRENT_PAT@github.com/$USERNAME/$REPO.git"

echo "🚀 Preparing production push for MF Luxury Rentals..."

# Git Automation
git config user.name "Antigravity (MarcoZorn)"
git config user.email "marco@mf.aconite.dev"

# Remove existing origin for safety and re-add with PAT
git remote remove origin 2>/dev/null || true
git remote add origin "$REMOTE_URL"

echo "📁 Staging files..."
git add .

echo "💾 Committing changes..."
git commit -m "Auto-deploy: Production build config [$(date +'%Y-%m-%d %H:%M:%S')]"

echo "⬆️ Pushing to GitHub (main branch)..."
if git push -u origin main --force; then
    echo "✅ Success: Production build pushed to GitHub."
    echo "🌐 Site: https://mf.aconite.dev"
else
    echo "❌ Error: Push failed. Check your PAT and network connection."
    exit 1
fi
