@echo off
title Casablanca Server

cd /d "%~dp0backend"
call .venv\Scripts\activate.bat

echo.
echo ================================================
echo   Casablanca - Dev Server Starting...
echo   Website:  http://127.0.0.1:8000/
echo   Cafe:     http://127.0.0.1:8000/cafe-menu.html
echo   Restaurant: http://127.0.0.1:8000/restaurant-menu.html
echo   Admin:    http://127.0.0.1:8000/c4z4bl4nc4-x9k2/
echo   API:      http://127.0.0.1:8000/api/
echo ================================================
echo.

python manage.py runserver 0.0.0.0:8000
pause
