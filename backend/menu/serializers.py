"""
Serializers کازابلانکا — تبدیل مدل‌ها به JSON
"""
from rest_framework import serializers
from .models import Category, MenuItem


class MenuItemSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    menu_type = serializers.CharField(source='category.menu_type', read_only=True)

    class Meta:
        model = MenuItem
        fields = [
            'id', 'name_fa', 'name_en', 'description',
            'price', 'image_url', 'is_new', 'is_special',
            'is_visible', 'order', 'menu_type', 'category',
        ]
        read_only_fields = ['id', 'image_url', 'menu_type']

    def get_image_url(self, obj):
        return obj.get_image_url()


class MenuItemAdminSerializer(serializers.ModelSerializer):
    """Serializer کامل برای پنل مدیریت"""
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = MenuItem
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'updated_at']

    def get_image_url(self, obj):
        return obj.get_image_url()


class CategoryWithItemsSerializer(serializers.ModelSerializer):
    """دسته‌بندی همراه با آیتم‌های قابل نمایش"""
    items = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ['id', 'name_fa', 'name_en', 'menu_type', 'order', 'items']

    def get_items(self, obj):
        visible_items = obj.items.filter(is_visible=True).order_by('order', 'name_fa')
        return MenuItemSerializer(visible_items, many=True).data


class CategoryAdminSerializer(serializers.ModelSerializer):
    items_count = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'updated_at']

    def get_items_count(self, obj):
        return obj.items.count()


class ImageUploadSerializer(serializers.Serializer):
    image = serializers.ImageField()

    def validate_image(self, value):
        from django.conf import settings
        if value.size > settings.MAX_UPLOAD_SIZE:
            raise serializers.ValidationError(
                f"حجم فایل نباید بیشتر از {settings.MAX_UPLOAD_SIZE // (1024*1024)} مگابایت باشد."
            )
        allowed_types = ['image/jpeg', 'image/png', 'image/webp']
        if value.content_type not in allowed_types:
            raise serializers.ValidationError("فقط فرمت‌های JPG، PNG و WebP مجاز هستند.")
        return value
