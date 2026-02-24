@echo off
setlocal
cd /d "%~dp0.."

echo ==========================================
echo MF Luxury Rentals - Startup Script
echo ==========================================

if not exist "node_modules\" (
    echo [INFO] node_modules non trovati. Installazione in corso...
    call npm install
)

echo [INFO] Avvio del server di sviluppo...
call npm run dev

if %ERRORLEVEL% neq 0 (
    echo [ERRORE] Impossibile avviare il server.
    pause
)
