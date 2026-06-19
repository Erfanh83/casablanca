"""
ثبت مدل‌های منو در پنل Django Admin
(پنل از طریق URL مخفی قابل دسترسی است)
"""
from django.contrib import admin
from .models import Category, MenuItem


class MenuItemInline(admin.TabularInline):
    model = MenuItem
    extra = 0
    fields = ('name_fa', 'name_en', 'price', 'is_visible', 'is_new', 'is_special', 'order')
    readonly_fields = ('created_at',)
    ordering = ('order', 'name_fa')


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display  = ('name_fa', 'name_en', 'menu_type', 'order', 'is_visible', 'items_count')
    list_filter   = ('menu_type', 'is_visible')
    list_editable = ('order', 'is_visible')
    search_fields = ('name_fa', 'name_en')
    ordering      = ('menu_type', 'order')
    inlines       = [MenuItemInline]

    def items_count(self, obj):
        return obj.items.count()
    items_count.short_description = 'تعداد آیتم‌ها'


@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    list_display   = ('name_fa', 'name_en', 'category', 'price', 'is_visible', 'is_new', 'is_special', 'order')
    list_filter    = ('category__menu_type', 'is_visible', 'is_new', 'is_special', 'category')
    list_editable  = ('price', 'is_visible', 'is_new', 'is_special', 'order')
    search_fields  = ('name_fa', 'name_en', 'description')
    ordering       = ('category__order', 'order', 'name_fa')
    readonly_fields = ('created_at', 'updated_at')
    fieldsets = (
        ('اطلاعات اصلی', {
            'fields': ('category', 'name_fa', 'name_en', 'description', 'price')
        }),
        ('تصویر', {
            'fields': ('image', 'image_seed'),
            'classes': ('collapse',),
        }),
        ('تنظیمات نمایش', {
            'fields': ('is_visible', 'is_new', 'is_special', 'order'),
        }),
        ('تاریخ‌ها', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',),
        }),
    )
