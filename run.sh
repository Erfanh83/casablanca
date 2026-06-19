#!/usr/bin/env bash
# اجرای سریع سرور توسعه
cd "$(dirname "$0")/backend"
source .venv/bin/activate 2>/dev/null || source .venv/Scripts/activate 2>/dev/null
echo ""
echo "  🚀 کازابلانکا — سرور در حال اجراست"
echo "  وب‌سایت:    http://127.0.0.1:8000/"
echo "  منوی کافه:  http://127.0.0.1:8000/cafe-menu.html"
echo "  منوی رستوران: http://127.0.0.1:8000/restaurant-menu.html"
echo "  پنل مدیریت: http://127.0.0.1:8000/c4z4bl4nc4-x9k2/"
echo "  API:        http://127.0.0.1:8000/api/"
echo ""
python manage.py runserver 0.0.0.0:8000
