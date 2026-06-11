@echo off
echo ===================================================
echo Starting Dermacare Clinic Systems...
echo ===================================================

echo [1/4] Starting Website Frontend...
cd /d "%~dp0"
start "Website Frontend" cmd /c "npm run dev"

echo [2/4] Starting Website Backend...
cd /d "%~dp0\backend"
start "Website Backend" cmd /c "python -m uvicorn server:app --reload --port 8000"

echo [3/4] Starting DPMS Backend...
cd /d "%~dp0..\DPMS-updated\backend"
start "DPMS Backend" cmd /c "python app.py"

echo [4/4] Starting DPMS Frontend...
cd /d "%~dp0..\DPMS-updated\frontend"
start "DPMS Frontend" cmd /c "npm install && npm run dev -- --port 5174"

echo ===================================================
echo All systems launching in background!
echo Website: http://localhost:5173
echo DPMS: http://localhost:5174
echo ===================================================
pause
