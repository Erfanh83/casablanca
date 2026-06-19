"""
URL Configuration — کازابلانکا
/admin/ غیرفعال است — پنل مدیریت از طریق URL مخفی قابل دسترسی است
"""
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include

urlpatterns = [
    # Django /admin/ is DISABLED intentionally for security
    # Public API
    path('api/', include('menu.urls')),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
