@echo off
title Casablanca Server

cd /d "%~dp0backend"
call .venv\Scripts\activate.bat

echo.
echo ================================================
echo   Casablanca - Dev Server Starting...
echo   API:      http://127.0.0.1:8000/api/
echo   Open frontend\index.html in your browser
echo   Open admin-ui\index.html for admin panel
echo ================================================
echo.

python manage.py runserver 0.0.0.0:8000
pause
