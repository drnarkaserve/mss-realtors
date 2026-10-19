@echo off
echo ============================================
echo   MSS Realtors - Starting servers
echo ============================================
echo.

echo [1/2] Starting backend on http://127.0.0.1:8000 ...
start "MSS Realtors - Backend" cmd /k "cd /d %~dp0backend && venv\Scripts\python.exe -m uvicorn app:app --host 127.0.0.1 --port 8000"

timeout /t 2 /nobreak >nul

echo [2/2] Starting frontend on http://127.0.0.1:5173 ...
start "MSS Realtors - Frontend" cmd /k "cd /d %~dp0frontend && npm run dev -- --host 127.0.0.1 --port 5173"

timeout /t 4 /nobreak >nul
echo.
echo Website:  http://127.0.0.1:5173
echo API docs: http://127.0.0.1:8000/docs
echo.
start http://127.0.0.1:5173

