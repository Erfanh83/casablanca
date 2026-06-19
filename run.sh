#!/usr/bin/env bash
# اجرای سریع سرور توسعه
cd "$(dirname "$0")/backend"
source .venv/bin/activate 2>/dev/null || source .venv/Scripts/activate 2>/dev/null
echo ""
echo "  🚀 کازابلانکا — سرور در حال اجراست"
echo "  API:     http://127.0.0.1:8000/api/"
echo "  Frontend: فایل‌های frontend/ را در مرورگر باز کنید"
echo "  Admin UI: فایل admin-ui/index.html را در مرورگر باز کنید"
echo ""
python manage.py runserver 0.0.0.0:8000
