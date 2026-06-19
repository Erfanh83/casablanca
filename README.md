# کازابلانکا — Casablanca Café & Restaurant

<p align="center">
  <strong>وبسایت و پنل مدیریت کافه و رستوران کازابلانکا</strong><br/>
  <em>Django REST API · Vanilla JS Frontend · Vue.js Admin Panel</em>
</p>

---

## 📁 ساختار پروژه

```
casablanca/
├── backend/                  ← Django (API Server)
│   ├── casablanca/           ← تنظیمات اصلی
│   │   ├── settings.py       ← تنظیمات Django
│   │   └── urls.py           ← روتینگ اصلی
│   ├── menu/                 ← اپ اصلی منو
│   │   ├── models.py         ← Category + MenuItem
│   │   ├── views.py          ← Public API + Admin API
│   │   ├── serializers.py    ← DRF Serializers
│   │   ├── urls.py           ← آدرس‌های API
│   │   ├── admin.py          ← ثبت در Django Admin
│   │   └── management/commands/
│   │       ├── seed_menu.py          ← بارگذاری JSON
│   │       └── create_admin_user.py  ← ایجاد کاربر
│   ├── migrations/           ← Django migrations
│   ├── requirements.txt      ← وابستگی‌های Python
│   ├── manage.py
│   └── .env.example          ← نمونه تنظیمات محیط
│
├── frontend/                 ← صفحات وب (Static HTML)
│   ├── index.html            ← صفحه اصلی (Landing Page)
│   ├── cafe-menu.html        ← صفحه منوی کافه
│   ├── restaurant-menu.html  ← صفحه منوی رستوران
│   └── assets/
│       ├── css/
│       │   ├── main.css      ← سیستم طراحی، cursor، navbar
│       │   ├── home.css      ← استایل صفحه اصلی
│       │   └── menu.css      ← استایل صفحات منو
│       ├── js/
│       │   ├── main.js       ← cursor، navbar، magnetic، utils
│       │   ├── home.js       ← loader، hero، parallax
│       │   └── menu.js       ← fetch API + offline fallback + search
│       ├── data/
│       │   ├── cafe.json     ← fallback offline کافه
│       │   └── restaurant.json ← fallback offline رستوران
│       └── images/
│           └── logo.png      ← لوگوی کازابلانکا
│
├── admin-ui/
│   └── index.html            ← پنل مدیریت (Vue.js SPA)
│
├── data/
│   ├── cafe.json             ← داده‌های منوی کافه
│   └── restaurant.json       ← داده‌های منوی رستوران
│
├── setup.sh                  ← راه‌اندازی Linux/Mac
├── setup.bat                 ← راه‌اندازی Windows
├── run.sh                    ← اجرای سریع سرور
└── README.md
```

---

## 🚀 راه‌اندازی

### روش اول — خودکار (توصیه‌شده)

**Linux / macOS:**
```bash
chmod +x setup.sh
./setup.sh
```

**Windows:**
```
setup.bat را دابل‌کلیک کنید
```

---

### روش دوم — دستی (گام به گام)

#### ۱. پیش‌نیازها
- Python 3.10 یا بالاتر
- pip

#### ۲. ایجاد محیط مجازی
```bash
cd backend
python -m venv .venv

# Linux/Mac:
source .venv/bin/activate

# Windows:
.venv\Scripts\activate
```

#### ۳. نصب وابستگی‌ها
```bash
pip install -r requirements.txt
```

#### ۴. تنظیم فایل محیطی
```bash
cp .env.example .env
# سپس .env را ویرایش کنید و SECRET_KEY را عوض کنید
```

#### ۵. اجرای Migrations
```bash
python manage.py migrate
```

#### ۶. بارگذاری داده‌های منو
```bash
# بارگذاری هر دو منو
python manage.py seed_menu --clear

# فقط کافه
python manage.py seed_menu --type cafe --clear

# فقط رستوران
python manage.py seed_menu --type restaurant --clear
```

#### ۷. ایجاد کاربر مدیر
```bash
python manage.py create_admin_user
# یا با پارامتر:
python manage.py create_admin_user --username admin --password MyPass123
```

#### ۸. اجرای سرور
```bash
python manage.py runserver
```

---

## 🌐 آدرس‌های مهم

| صفحه | آدرس |
|------|-------|
| صفحه اصلی | `frontend/index.html` |
| منوی کافه | `frontend/cafe-menu.html` |
| منوی رستوران | `frontend/restaurant-menu.html` |
| پنل مدیریت | `admin-ui/index.html` |
| API کافه | `http://127.0.0.1:8000/api/menu/cafe/` |
| API رستوران | `http://127.0.0.1:8000/api/menu/restaurant/` |
| لاگین | `POST http://127.0.0.1:8000/api/auth/login/` |

---

## 📡 مستندات API

### Public Endpoints (بدون نیاز به احراز هویت)

```
GET  /api/menu/cafe/                  ← کل منوی کافه
GET  /api/menu/restaurant/            ← کل منوی رستوران
GET  /api/menu/cafe/category/<id>/    ← یک دسته‌بندی
```

### Auth Endpoints

```
POST /api/auth/login/                 ← ورود (username, password)
POST /api/auth/logout/                ← خروج
GET  /api/auth/me/                    ← اطلاعات کاربر جاری
```

**نمونه لاگین:**
```bash
curl -X POST http://127.0.0.1:8000/api/auth/login/ \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"casablanca1404"}'
```

**پاسخ:**
```json
{
  "access": "eyJ...",
  "refresh": "eyJ...",
  "user": { "id": 1, "username": "admin" }
}
```

### Admin Endpoints (نیاز به Bearer Token)

```
GET    /api/admin/categories/              ← لیست دسته‌بندی‌ها
POST   /api/admin/categories/             ← ایجاد دسته‌بندی جدید
PATCH  /api/admin/categories/<id>/        ← ویرایش دسته‌بندی
DELETE /api/admin/categories/<id>/        ← حذف دسته‌بندی

GET    /api/admin/menu/cafe/              ← لیست آیتم‌های کافه
POST   /api/admin/menu/cafe/             ← ایجاد آیتم جدید
GET    /api/admin/menu/restaurant/        ← لیست آیتم‌های رستوران
PATCH  /api/admin/menu/item/<id>/        ← ویرایش آیتم
DELETE /api/admin/menu/item/<id>/        ← حذف آیتم
PATCH  /api/admin/menu/item/<id>/toggle/ ← تغییر وضعیت نمایش
POST   /api/admin/upload/image/          ← آپلود تصویر
```

**نمونه با توکن:**
```bash
curl -H "Authorization: Bearer eyJ..." \
     http://127.0.0.1:8000/api/admin/categories/
```

---

## 🎨 طراحی بصری

### رنگ‌بندی

| نام | مقدار | کاربرد |
|-----|-------|---------|
| Black | `#0A0A0A` | پس‌زمینه اصلی |
| Gold | `#C9A87C` | رنگ برند اصلی |
| Gold Light | `#E8D5B7` | تأکید ثانوی |
| Teal | `#4ECDC4` | نشانگر «جدید» |
| Salmon | `#E07B5A` | تأکید آکسنت |
| White | `#F5F0EB` | متن اصلی |

### تایپوگرافی

| فونت | کاربرد |
|------|---------|
| Cinzel | عناوین انگلیسی، navbar، دکمه‌ها |
| Cormorant Garamond | متن بدنه انگلیسی، tagline |
| Vazirmatn | تمام متون فارسی |

### انیمیشن‌ها

- **GSAP 3** — همه انیمیشن‌های scroll-triggered
- **ScrollTrigger** — reveal on scroll، parallax
- **Cursor** — Custom cursor با magnetic effect
- **Marquee** — نوار متحرک GSAP
- **Loader** — صفحه لودینگ با progress bar

---

## ⚙️ تنظیمات Production

### ۱. تغییر `.env` برای production:
```ini
DEBUG=False
SECRET_KEY=<یک کلید بسیار طولانی و تصادفی>
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
DATABASE_URL=postgresql://user:pass@localhost:5432/casablanca_db
CORS_ALLOWED_ORIGINS=https://yourdomain.com
```

### ۲. جمع‌آوری فایل‌های استاتیک:
```bash
python manage.py collectstatic --noinput
```

### ۳. اجرا با Gunicorn:
```bash
gunicorn casablanca.wsgi:application \
  --bind 0.0.0.0:8000 \
  --workers 4 \
  --timeout 120
```

---

## 🔒 امنیت

- **JWT Tokens** — access 60 دقیقه، refresh 7 روز با rotation
- **Blacklist** — توکن‌های logout بلافاصله باطل می‌شوند
- **Axes** — بعد از ۵ بار ورود ناموفق، حساب ۱۵ دقیقه قفل می‌شود
- **Rate Limiting** — ۵ درخواست لاگین در ۱۵ دقیقه
- **CORS** — فقط Origin های تعریف‌شده مجاز هستند
- **WhiteNoise** — سرو امن فایل‌های استاتیک
- **Security Headers** — در production فعال می‌شوند

---

## 📦 وابستگی‌های اصلی

| پکیج | نسخه | کاربرد |
|------|-------|---------|
| Django | 4.2 | فریمورک اصلی |
| djangorestframework | 3.15 | REST API |
| simplejwt | 5.3 | احراز هویت JWT |
| django-cors-headers | 4.3 | CORS |
| django-axes | 6.4 | برنامه ضد brute-force |
| whitenoise | 6.7 | سرو فایل‌های استاتیک |
| Pillow | 10.3 | پردازش تصویر |
| python-decouple | 3.8 | مدیریت .env |

---

## 🛠 دستورات مفید

```bash
# ریست کامل دیتابیس و seed مجدد
python manage.py flush --no-input && python manage.py seed_menu

# بارگذاری فقط رستوران
python manage.py seed_menu --type restaurant --clear

# چک کردن سلامت پروژه
python manage.py check --deploy

# باز کردن Django shell
python manage.py shell

# ساخت migration جدید (بعد از تغییر models.py)
python manage.py makemigrations
python manage.py migrate
```

---

## 📝 نکات مهم

> **Offline Mode:** اگر backend در دسترس نباشد، صفحات منو به صورت خودکار از فایل‌های
> `frontend/assets/data/cafe.json` و `restaurant.json` داده می‌خوانند.

> **پنل Admin:** برای امنیت بیشتر، URL پنل مدیریت (`admin-ui/index.html`) را
> rename کنید یا آن را روی مسیر مخفی سرو کنید.

> **تصاویر:** تا زمان آپلود تصویر واقعی از طریق پنل، تصاویر placeholder از
> `picsum.photos` با seed ثابت (بر اساس نام آیتم) نمایش داده می‌شوند.

---

<p align="center">
  ساخته شده با ❤️ برای <strong>کازابلانکا</strong>
</p>
