"""
URL Routing کازابلانکا
"""
from django.urls import path
from . import views

urlpatterns = [
    # ─── Public Endpoints ──────────────────────────────────────────
    path('menu/cafe/', views.public_cafe_menu, name='public-cafe-menu'),
    path('menu/restaurant/', views.public_restaurant_menu, name='public-restaurant-menu'),
    path('menu/cafe/category/<int:pk>/', views.public_category_detail, name='public-category-detail'),

    # ─── Auth Endpoints ────────────────────────────────────────────
    path('auth/login/', views.login_view, name='auth-login'),
    path('auth/logout/', views.logout_view, name='auth-logout'),
    path('auth/me/', views.me_view, name='auth-me'),

    # ─── Admin — Categories ────────────────────────────────────────
    path('admin/categories/', views.AdminCategoryListCreate.as_view(), name='admin-categories'),
    path('admin/categories/<int:pk>/', views.AdminCategoryDetail.as_view(), name='admin-category-detail'),

    # ─── Admin — Menu Items ────────────────────────────────────────
    path('admin/menu/<str:menu_type>/', views.AdminMenuItemListCreate.as_view(), name='admin-menu-list'),
    path('admin/menu/item/<int:pk>/', views.AdminMenuItemDetail.as_view(), name='admin-menu-item-detail'),
    path('admin/menu/item/<int:pk>/toggle/', views.toggle_item_visibility, name='admin-toggle-visibility'),
    path('admin/menu/reorder/', views.bulk_reorder, name='admin-reorder'),

    # ─── Admin — Image Upload ──────────────────────────────────────
    path('admin/upload/image/', views.upload_image, name='admin-upload-image'),
]
