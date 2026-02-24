@echo off
setlocal
cd /d "%~dp0.."

echo ==========================================
echo MF Luxury Rentals - Windows Repair Tool
echo ==========================================
echo [INFO] Rilevato errore Rollup/Vite su Windows.
echo [INFO] Inizio procedura di riparazione...

echo [1/3] Pulizia cache e vecchi file...
if exist "node_modules\" (
    echo [INFO] Eliminazione node_modules...
    rmdir /s /q "node_modules"
)
if exist "package-lock.json" (
    echo [INFO] Eliminazione package-lock.json...
    del /f /q "package-lock.json"
)

echo [2/3] Reinstallazione pulita delle dipendenze...
echo [ATTENZIONE] Questa operazione potrebbe richiedere qualche minuto...
call npm install

echo [3/3] Verifica dipendenze specifiche Rollup...
call npm install @rollup/rollup-win32-x64-msvc

echo ==========================================
echo [OK] Riparazione completata!
echo Puoi ora provare ad avviare il sito con 'run_windows.bat'.
echo ==========================================
pause
