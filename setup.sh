#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════
#  کازابلانکا — اسکریپت راه‌اندازی خودکار (Linux / macOS)
#  chmod +x setup.sh && ./setup.sh
# ═══════════════════════════════════════════════════════════════

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m'

echo ""
echo -e "${CYAN}╔═══════════════════════════════════════╗${NC}"
echo -e "${CYAN}║   کافه و رستوران کازابلانکا           ║${NC}"
echo -e "${CYAN}║   راه‌اندازی خودکار پروژه             ║${NC}"
echo -e "${CYAN}╚═══════════════════════════════════════╝${NC}"
echo ""

# ── 1. Check Python ────────────────────────────────────────────
echo -e "${YELLOW}[1/7] بررسی Python...${NC}"
if ! command -v python3 &> /dev/null; then
    echo -e "${RED}✗ Python 3 نصب نشده است. لطفاً Python 3.10+ نصب کنید.${NC}"
    exit 1
fi
PYTHON_VERSION=$(python3 -c 'import sys; print(".".join(map(str, sys.version_info[:2])))')
echo -e "${GREEN}✓ Python ${PYTHON_VERSION} یافت شد${NC}"

# ── 2. Create virtual environment ──────────────────────────────
echo -e "${YELLOW}[2/7] ایجاد محیط مجازی...${NC}"
cd backend
if [ ! -d ".venv" ]; then
    python3 -m venv .venv
    echo -e "${GREEN}✓ محیط مجازی ایجاد شد${NC}"
else
    echo -e "${GREEN}✓ محیط مجازی از قبل موجود است${NC}"
fi

# ── 3. Activate & Install dependencies ─────────────────────────
echo -e "${YELLOW}[3/7] نصب وابستگی‌ها...${NC}"
source .venv/bin/activate
pip install --upgrade pip -q
pip install -r requirements.txt -q
echo -e "${GREEN}✓ وابستگی‌ها نصب شدند${NC}"

# ── 4. Setup .env ──────────────────────────────────────────────
echo -e "${YELLOW}[4/7] تنظیم فایل محیطی...${NC}"
if [ ! -f ".env" ]; then
    cp .env.example .env
    # Generate a random secret key
    SECRET=$(python3 -c "import secrets; print(secrets.token_urlsafe(50))")
    sed -i "s/your-very-long-secret-key-here-change-in-production/${SECRET}/" .env
    echo -e "${GREEN}✓ فایل .env ایجاد شد (کلید مخفی تصادفی تولید شد)${NC}"
else
    echo -e "${GREEN}✓ فایل .env از قبل موجود است${NC}"
fi

# ── 5. Run migrations ──────────────────────────────────────────
echo -e "${YELLOW}[5/7] اجرای migrations...${NC}"
python manage.py migrate --run-syncdb
echo -e "${GREEN}✓ پایگاه داده آماده شد${NC}"

# ── 6. Seed menu data ──────────────────────────────────────────
echo -e "${YELLOW}[6/7] بارگذاری داده‌های منو...${NC}"
python manage.py seed_menu --clear --data-dir ../data
echo -e "${GREEN}✓ داده‌های منو بارگذاری شدند${NC}"

# ── 7. Create admin user ───────────────────────────────────────
echo -e "${YELLOW}[7/7] ایجاد کاربر مدیر...${NC}"
python manage.py create_admin_user --username admin --password casablanca1404 --email admin@casablanca.ir --first-name مدیر
echo -e "${GREEN}✓ کاربر مدیر ایجاد شد${NC}"

# ── Done ───────────────────────────────────────────────────────
echo ""
echo -e "${CYAN}╔═══════════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║  ✅ راه‌اندازی با موفقیت انجام شد!               ║${NC}"
echo -e "${CYAN}╠═══════════════════════════════════════════════════╣${NC}"
echo -e "${CYAN}║                                                   ║${NC}"
echo -e "${CYAN}║  برای اجرای سرور:                                 ║${NC}"
echo -e "${CYAN}║  cd backend && source .venv/bin/activate          ║${NC}"
echo -e "${CYAN}║  python manage.py runserver                       ║${NC}"
echo -e "${CYAN}║                                                   ║${NC}"
echo -e "${CYAN}║  اطلاعات ورود به پنل مدیریت:                     ║${NC}"
echo -e "${CYAN}║  نام کاربری : admin                               ║${NC}"
echo -e "${CYAN}║  رمز عبور   : casablanca1404                      ║${NC}"
echo -e "${CYAN}║                                                   ║${NC}"
echo -e "${CYAN}║  آدرس API: http://127.0.0.1:8000/api/            ║${NC}"
echo -e "${CYAN}╚═══════════════════════════════════════════════════╝${NC}"
echo ""
