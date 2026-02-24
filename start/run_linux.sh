#!/bin/bash
# Script to start the development server for MF Luxury Rentals on Linux

# Navigate to the project root directory
cd "$(dirname "$0")/.." || { echo "Could not change directory to project root"; exit 1; }

echo "=========================================="
echo "MF Luxury Rentals - Startup Script"
echo "=========================================="

if [ ! -d "node_modules" ]; then
    echo "[INFO] node_modules non trovati. Installazione in corso..."
    npm install
fi

echo "[INFO] Avvio del server di sviluppo..."
npm run dev
