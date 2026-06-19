"""
دستور مدیریت: بارگذاری داده‌های منو از فایل‌های JSON
python manage.py seed_menu
python manage.py seed_menu --clear   # پاک کردن قبل از بارگذاری
"""
import json
from pathlib import Path
from django.core.management.base import BaseCommand
from menu.models import Category, MenuItem


class Command(BaseCommand):
    help = 'بارگذاری منوی کافه و رستوران از فایل‌های JSON'

    def add_arguments(self, parser):
        parser.add_argument(
            '--clear',
            action='store_true',
            help='پاک کردن تمام داده‌های قبلی قبل از بارگذاری',
        )
        parser.add_argument(
            '--type',
            choices=['cafe', 'restaurant', 'all'],
            default='all',
            help='نوع منو برای بارگذاری (پیش‌فرض: all)',
        )
        parser.add_argument(
            '--data-dir',
            type=str,
            default=None,
            help='مسیر پوشه حاوی فایل‌های JSON',
        )

    def handle(self, *args, **options):
        # Determine data directory
        if options['data_dir']:
            data_dir = Path(options['data_dir'])
        else:
            # Look relative to manage.py location
            base = Path(__file__).resolve().parent.parent.parent.parent
            data_dir = base.parent / 'data'
            if not data_dir.exists():
                data_dir = base / 'data'

        self.stdout.write(self.style.HTTP_INFO(f'📂 مسیر داده: {data_dir}'))

        if options['clear']:
            self.stdout.write(self.style.WARNING('🗑️  پاک کردن داده‌های قبلی...'))
            if options['type'] in ('cafe', 'all'):
                Category.objects.filter(menu_type='cafe').delete()
            if options['type'] in ('restaurant', 'all'):
                Category.objects.filter(menu_type='restaurant').delete()
            self.stdout.write(self.style.SUCCESS('   ✓ داده‌های قبلی پاک شدند'))

        total_categories = 0
        total_items = 0

        if options['type'] in ('cafe', 'all'):
            c, i = self._load_file(data_dir / 'cafe.json', 'cafe')
            total_categories += c
            total_items += i

        if options['type'] in ('restaurant', 'all'):
            c, i = self._load_file(data_dir / 'restaurant.json', 'restaurant')
            total_categories += c
            total_items += i

        self.stdout.write('')
        self.stdout.write(self.style.SUCCESS(
            f'✅ بارگذاری کامل شد: {total_categories} دسته‌بندی، {total_items} آیتم'
        ))

    def _load_file(self, filepath: Path, menu_type: str):
        label = 'کافه' if menu_type == 'cafe' else 'رستوران'
        self.stdout.write(f'\n🍽️  بارگذاری منوی {label} از {filepath.name}...')

        if not filepath.exists():
            self.stdout.write(self.style.ERROR(f'   ✗ فایل یافت نشد: {filepath}'))
            return 0, 0

        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)

        category_count = 0
        item_count = 0

        for order_idx, cat_data in enumerate(data):
            cat_fa = cat_data.get('category_fa', '').strip()
            cat_en = cat_data.get('category_en', '').strip()

            if not cat_fa:
                continue

            category, created = Category.objects.get_or_create(
                name_fa=cat_fa,
                menu_type=menu_type,
                defaults={
                    'name_en': cat_en,
                    'order': order_idx,
                    'is_visible': True,
                }
            )
            if not created:
                category.name_en = cat_en
                category.order = order_idx
                category.save(update_fields=['name_en', 'order'])

            category_count += 1
            action = '✓ ایجاد' if created else '↻ بروزرسانی'
            self.stdout.write(f'   {action} دسته‌بندی: {cat_fa}')

            items = cat_data.get('items', [])
            for item_idx, item_data in enumerate(items):
                name_fa = item_data.get('name_fa', '').strip()
                name_en = item_data.get('name_en', '').strip()
                price_raw = str(item_data.get('price', '0')).replace(',', '').strip()

                if not name_fa:
                    continue

                try:
                    price = int(float(price_raw))
                except ValueError:
                    price = 0

                seed = (name_en or name_fa).replace(' ', '-').lower()

                item, item_created = MenuItem.objects.get_or_create(
                    name_fa=name_fa,
                    category=category,
                    defaults={
                        'name_en': name_en,
                        'description': item_data.get('description', ''),
                        'price': price,
                        'image_seed': seed,
                        'order': item_idx,
                        'is_visible': True,
                    }
                )
                if not item_created:
                    item.name_en = name_en
                    item.description = item_data.get('description', '')
                    item.price = price
                    item.image_seed = seed
                    item.order = item_idx
                    item.save(update_fields=['name_en', 'description', 'price', 'image_seed', 'order'])

                item_count += 1

            self.stdout.write(f'      └─ {len(items)} آیتم بارگذاری شد')

        return category_count, item_count
