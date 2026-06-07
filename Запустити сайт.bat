@echo off
chcp 65001 >nul
set "ROOT=%~dp0"
set "PY=C:\Users\serge\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
if not exist "%PY%" set "PY=python"
start "" "http://127.0.0.1:8765/"
"%PY%" "%ROOT%server.py" --host 0.0.0.0 --port 8765
pause
