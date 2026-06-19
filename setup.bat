@echo off
title Casablanca Setup

echo.
echo ================================================
echo   Casablanca Cafe and Restaurant
echo   Project Setup for Windows
echo ================================================
echo.

cd /d "%~dp0backend"

echo [1/7] Checking Python...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Python not found.
    echo Please install Python 3.10+ from https://python.org
    pause
    exit /b 1
)
python --version
echo [OK] Python found.
echo.

echo [2/7] Creating virtual environment...
if not exist ".venv\" (
    python -m venv .venv
    echo [OK] Virtual environment created.
) else (
    echo [OK] Virtual environment already exists.
)
echo.

echo [3/7] Installing dependencies (this may take a few minutes)...
call .venv\Scripts\activate.bat
python -m pip install --upgrade pip --quiet
pip install -r requirements.txt --quiet
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies.
    pause
    exit /b 1
)
echo [OK] Dependencies installed.
echo.

echo [4/7] Setting up environment file...
if not exist ".env" (
    copy .env.example .env >nul
    echo [OK] .env file created from template.
    echo NOTE: Please edit .env and change SECRET_KEY before production use.
) else (
    echo [OK] .env file already exists.
)
echo.

echo [5/7] Running database migrations...
python manage.py migrate --run-syncdb
if %errorlevel% neq 0 (
    echo ERROR: Migration failed.
    pause
    exit /b 1
)
echo [OK] Database ready.
echo.

echo [6/7] Loading menu data...
python manage.py seed_menu --clear --data-dir ..\data
if %errorlevel% neq 0 (
    echo ERROR: Failed to seed menu data.
    pause
    exit /b 1
)
echo [OK] Menu data loaded.
echo.

echo [7/7] Creating admin user...
python manage.py create_admin_user --username admin --password casablanca1404 --email admin@casablanca.ir --first-name Admin
echo [OK] Admin user created.
echo.

echo ================================================
echo   Setup completed successfully!
echo ================================================
echo.
echo   To run the server:
echo     1. cd backend
echo     2. .venv\Scripts\activate
echo     3. python manage.py runserver
echo.
echo   Admin panel login:
echo     Username : admin
echo     Password : casablanca1404
echo.
echo   API URL: http://127.0.0.1:8000/api/
echo ================================================
echo.
pause
