"""
دستور مدیریت: ایجاد کاربر مدیر اولیه
python manage.py create_admin_user
python manage.py create_admin_user --username admin --password secret123 --email admin@cafe.ir
"""
import getpass
from django.contrib.auth.models import User
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = 'ایجاد کاربر مدیر برای پنل کازابلانکا'

    def add_arguments(self, parser):
        parser.add_argument('--username', type=str, default=None)
        parser.add_argument('--password', type=str, default=None)
        parser.add_argument('--email', type=str, default='')
        parser.add_argument('--first-name', type=str, default='مدیر')

    def handle(self, *args, **options):
        self.stdout.write(self.style.HTTP_INFO('\n👤 ایجاد کاربر مدیر کازابلانکا\n'))

        username = options['username'] or input('   نام کاربری: ').strip()
        if not username:
            self.stdout.write(self.style.ERROR('✗ نام کاربری نمی‌تواند خالی باشد.'))
            return

        if User.objects.filter(username=username).exists():
            self.stdout.write(self.style.WARNING(f'⚠️  کاربر "{username}" از قبل وجود دارد.'))
            overwrite = input('   آیا رمز عبور را بازنویسی کنم؟ (y/N): ').strip().lower()
            if overwrite != 'y':
                return
            user = User.objects.get(username=username)
            password = options['password'] or getpass.getpass('   رمز عبور جدید: ')
            user.set_password(password)
            user.is_staff = True
            user.is_superuser = True
            user.save()
            self.stdout.write(self.style.SUCCESS(f'✅ رمز عبور "{username}" بروزرسانی شد.'))
            return

        password = options['password']
        if not password:
            password = getpass.getpass('   رمز عبور: ')
            confirm = getpass.getpass('   تکرار رمز عبور: ')
            if password != confirm:
                self.stdout.write(self.style.ERROR('✗ رمزهای عبور مطابقت ندارند.'))
                return

        if len(password) < 8:
            self.stdout.write(self.style.ERROR('✗ رمز عبور باید حداقل ۸ کاراکتر باشد.'))
            return

        user = User.objects.create_superuser(
            username=username,
            email=options['email'],
            password=password,
            first_name=options['first_name'],
        )

        self.stdout.write('')
        self.stdout.write(self.style.SUCCESS(f'✅ کاربر مدیر ایجاد شد:'))
        self.stdout.write(f'   نام کاربری : {user.username}')
        self.stdout.write(f'   ایمیل       : {user.email or "—"}')
        self.stdout.write(f'   is_staff    : {user.is_staff}')
        self.stdout.write(f'   is_superuser: {user.is_superuser}')
        self.stdout.write('')
