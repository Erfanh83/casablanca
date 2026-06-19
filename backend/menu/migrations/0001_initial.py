from django.db import migrations, models
import django.core.validators
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_fa', models.CharField(max_length=120, verbose_name='نام فارسی')),
                ('name_en', models.CharField(blank=True, max_length=120, verbose_name='نام انگلیسی')),
                ('menu_type', models.CharField(choices=[('cafe', 'کافه'), ('restaurant', 'رستوران')], max_length=20, verbose_name='نوع منو')),
                ('order', models.PositiveIntegerField(default=0, verbose_name='ترتیب نمایش')),
                ('is_visible', models.BooleanField(default=True, verbose_name='نمایش داده شود')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'دسته‌بندی',
                'verbose_name_plural': 'دسته‌بندی‌ها',
                'ordering': ['order', 'name_fa'],
                'unique_together': {('name_fa', 'menu_type')},
            },
        ),
        migrations.CreateModel(
            name='MenuItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_fa', models.CharField(max_length=200, verbose_name='نام فارسی')),
                ('name_en', models.CharField(blank=True, max_length=200, verbose_name='نام انگلیسی')),
                ('description', models.TextField(blank=True, verbose_name='توضیحات')),
                ('price', models.DecimalField(decimal_places=0, max_digits=10,
                    validators=[django.core.validators.MinValueValidator(0)],
                    verbose_name='قیمت (هزار تومان)')),
                ('image', models.ImageField(blank=True, null=True, upload_to='menu_images/', verbose_name='تصویر')),
                ('image_seed', models.CharField(blank=True, max_length=100, verbose_name='سید تصویر placeholder')),
                ('is_visible', models.BooleanField(default=True, verbose_name='نمایش داده شود')),
                ('is_new', models.BooleanField(default=False, verbose_name='جدید')),
                ('is_special', models.BooleanField(default=False, verbose_name='ویژه')),
                ('order', models.PositiveIntegerField(default=0, verbose_name='ترتیب نمایش')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE,
                    related_name='items', to='menu.category', verbose_name='دسته‌بندی')),
            ],
            options={
                'verbose_name': 'آیتم منو',
                'verbose_name_plural': 'آیتم‌های منو',
                'ordering': ['order', 'name_fa'],
            },
        ),
    ]
