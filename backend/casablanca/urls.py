"""
URL Configuration — کازابلانکا
/admin/ غیرفعال است — پنل مدیریت از طریق URL مخفی قابل دسترسی است
"""
from pathlib import Path

from django.conf import settings
from django.conf.urls.static import static
from django.http import HttpResponse
from django.urls import include, path, re_path
from django.views.decorators.cache import cache_control
from django.views.static import serve as file_serve

FRONTEND = Path(settings.BASE_DIR).parent / 'frontend'
ADMIN_UI = Path(settings.BASE_DIR).parent / 'admin-ui'


def _page(filename, root=None):
    full_path = (root or FRONTEND) / filename
    def view(request):
        return HttpResponse(
            full_path.read_text(encoding='utf-8'),
            content_type='text/html; charset=utf-8',
        )
    view.__name__ = filename.replace('.', '_')
    return view


urlpatterns = [
    # ─── Front-end pages ────────────────────────────────────────────────────
    path('', _page('index.html'), name='home'),
    path('index.html', _page('index.html')),
    path('cafe-menu.html', _page('cafe-menu.html'), name='cafe-menu'),
    path('restaurant-menu.html', _page('restaurant-menu.html'), name='restaurant-menu'),

    # ─── Admin UI (Vue SPA, security-obscured URL) ───────────────────────────
    path(f'{settings.ADMIN_URL_SLUG}/', _page('index.html', ADMIN_UI), name='admin-ui'),

    # ─── REST API ────────────────────────────────────────────────────────────
    path('api/', include('menu.urls')),

    # ─── Frontend static assets (/assets/…) ─────────────────────────────────
    re_path(r'^assets/(?P<path>.*)$',
            cache_control(max_age=86400, public=True)(file_serve),
            {'document_root': FRONTEND / 'assets'}),
]

# Media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
