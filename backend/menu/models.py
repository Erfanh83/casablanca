"""
مدل‌های منو کازابلانکا
Category (دسته‌بندی) و MenuItem (آیتم منو) برای کافه و رستوران
"""
from django.db import models
from django.core.validators import MinValueValidator


class Category(models.Model):
    MENU_TYPE_CHOICES = [
        ('cafe', 'کافه'),
        ('restaurant', 'رستوران'),
    ]

    name_fa = models.CharField(max_length=120, verbose_name='نام فارسی')
    name_en = models.CharField(max_length=120, blank=True, verbose_name='نام انگلیسی')
    menu_type = models.CharField(
        max_length=20, choices=MENU_TYPE_CHOICES, verbose_name='نوع منو'
    )
    order = models.PositiveIntegerField(default=0, verbose_name='ترتیب نمایش')
    is_visible = models.BooleanField(default=True, verbose_name='نمایش داده شود')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'دسته‌بندی'
        verbose_name_plural = 'دسته‌بندی‌ها'
        ordering = ['order', 'name_fa']
        unique_together = ['name_fa', 'menu_type']

    def __str__(self):
        return f"[{self.get_menu_type_display()}] {self.name_fa}"


class MenuItem(models.Model):
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name='items',
        verbose_name='دسته‌بندی'
    )
    name_fa = models.CharField(max_length=200, verbose_name='نام فارسی')
    name_en = models.CharField(max_length=200, blank=True, verbose_name='نام انگلیسی')
    description = models.TextField(blank=True, verbose_name='توضیحات')
    price = models.DecimalField(
        max_digits=10,
        decimal_places=0,
        validators=[MinValueValidator(0)],
        verbose_name='قیمت (هزار تومان)'
    )
    image = models.ImageField(
        upload_to='menu_images/',
        blank=True,
        null=True,
        verbose_name='تصویر'
    )
    image_seed = models.CharField(
        max_length=100,
        blank=True,
        verbose_name='سید تصویر placeholder'
    )
    is_visible = models.BooleanField(default=True, verbose_name='نمایش داده شود')
    is_new = models.BooleanField(default=False, verbose_name='جدید')
    is_special = models.BooleanField(default=False, verbose_name='ویژه')
    order = models.PositiveIntegerField(default=0, verbose_name='ترتیب نمایش')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'آیتم منو'
        verbose_name_plural = 'آیتم‌های منو'
        ordering = ['order', 'name_fa']

    def __str__(self):
        return f"{self.name_fa} — {self.category.name_fa}"

    def get_image_url(self):
        """تصویر واقعی یا placeholder با سید ثابت"""
        if self.image:
            return self.image.url
        seed = self.image_seed or f"{self.name_en or self.name_fa}-casablanca".replace(' ', '-').lower()
        return f"https://picsum.photos/seed/{seed}/400/400.webp"

    @property
    def menu_type(self):
        return self.category.menu_type
