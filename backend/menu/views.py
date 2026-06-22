"""
Views کازابلانکا — Public API + Admin API
"""
from django.contrib.auth import authenticate
from axes.utils import reset_request as axes_reset_request
from rest_framework import status, generics
from rest_framework.decorators import api_view, permission_classes, throttle_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.throttling import ScopedRateThrottle
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import TokenError

from .models import Category, MenuItem
from .serializers import (
    CategoryWithItemsSerializer,
    CategoryAdminSerializer,
    MenuItemSerializer,
    MenuItemAdminSerializer,
    ImageUploadSerializer,
)


# ─────────────────────────────────────────────────────────────────
#  Public Views
# ─────────────────────────────────────────────────────────────────

@api_view(['GET'])
@permission_classes([AllowAny])
def public_cafe_menu(request):
    """GET /api/menu/cafe/ — دریافت منوی کافه برای نمایش عمومی"""
    categories = (
        Category.objects
        .filter(menu_type='cafe', is_visible=True)
        .prefetch_related('items')
        .order_by('order', 'name_fa')
    )
    serializer = CategoryWithItemsSerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def public_restaurant_menu(request):
    """GET /api/menu/restaurant/ — دریافت منوی رستوران برای نمایش عمومی"""
    categories = (
        Category.objects
        .filter(menu_type='restaurant', is_visible=True)
        .prefetch_related('items')
        .order_by('order', 'name_fa')
    )
    serializer = CategoryWithItemsSerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def public_category_detail(request, pk):
    """GET /api/menu/cafe/category/<id>/"""
    try:
        category = Category.objects.prefetch_related('items').get(pk=pk, is_visible=True)
    except Category.DoesNotExist:
        return Response({'error': 'دسته‌بندی یافت نشد.'}, status=status.HTTP_404_NOT_FOUND)
    return Response(CategoryWithItemsSerializer(category).data)


# ─────────────────────────────────────────────────────────────────
#  Auth Views
# ─────────────────────────────────────────────────────────────────

class LoginThrottle(ScopedRateThrottle):
    scope = 'login'


@api_view(['POST'])
@permission_classes([AllowAny])
@throttle_classes([LoginThrottle])
def login_view(request):
    """POST /api/auth/login/ — ورود مدیر"""
    username = request.data.get('username', '').strip()
    password = request.data.get('password', '')

    if not username or not password:
        return Response(
            {'error': 'نام کاربری و رمز عبور الزامی است.'},
            status=status.HTTP_400_BAD_REQUEST
        )

    user = authenticate(request, username=username, password=password)
    if user is None:
        return Response(
            {'error': 'نام کاربری یا رمز عبور اشتباه است.'},
            status=status.HTTP_401_UNAUTHORIZED
        )

    if not user.is_staff:
        return Response(
            {'error': 'دسترسی مجاز نیست.'},
            status=status.HTTP_403_FORBIDDEN
        )

    # Clear axes failure counter — the JWT flow never calls login() so
    # AXES_RESET_ON_SUCCESS would never fire without this explicit reset.
    try:
        axes_reset_request(request=request)
    except Exception:
        pass

    refresh = RefreshToken.for_user(user)
    return Response({
        'access': str(refresh.access_token),
        'refresh': str(refresh),
        'user': {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'first_name': user.first_name,
        }
    })


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_view(request):
    """POST /api/auth/logout/"""
    try:
        refresh_token = request.data.get('refresh')
        if refresh_token:
            token = RefreshToken(refresh_token)
            token.blacklist()
    except TokenError:
        pass
    return Response({'detail': 'با موفقیت خارج شدید.'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def me_view(request):
    """GET /api/auth/me/"""
    user = request.user
    return Response({
        'id': user.id,
        'username': user.username,
        'email': user.email,
        'first_name': user.first_name,
        'is_staff': user.is_staff,
    })


# ─────────────────────────────────────────────────────────────────
#  Admin — Category Views
# ─────────────────────────────────────────────────────────────────

class AdminCategoryListCreate(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CategoryAdminSerializer

    def get_queryset(self):
        qs = Category.objects.all()
        menu_type = self.request.query_params.get('type')
        if menu_type in ('cafe', 'restaurant'):
            qs = qs.filter(menu_type=menu_type)
        return qs.order_by('order', 'name_fa')


class AdminCategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CategoryAdminSerializer
    queryset = Category.objects.all()

    def destroy(self, request, *args, **kwargs):
        category = self.get_object()
        if category.items.exists():
            return Response(
                {'error': 'دسته‌بندی دارای آیتم است. ابتدا آیتم‌ها را حذف کنید.'},
                status=status.HTTP_400_BAD_REQUEST
            )
        return super().destroy(request, *args, **kwargs)


# ─────────────────────────────────────────────────────────────────
#  Admin — Menu Item Views
# ─────────────────────────────────────────────────────────────────

class AdminMenuItemListCreate(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = MenuItemAdminSerializer

    def get_queryset(self):
        menu_type = self.kwargs.get('menu_type', 'cafe')
        qs = MenuItem.objects.filter(category__menu_type=menu_type).select_related('category')
        category_id = self.request.query_params.get('category')
        search = self.request.query_params.get('search', '').strip()
        if category_id:
            qs = qs.filter(category_id=category_id)
        if search:
            qs = qs.filter(name_fa__icontains=search) | qs.filter(name_en__icontains=search)
        return qs.order_by('category__order', 'order', 'name_fa')


class AdminMenuItemDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = MenuItemAdminSerializer
    queryset = MenuItem.objects.all()


@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def toggle_item_visibility(request, pk):
    """PATCH /api/admin/menu/item/<pk>/toggle/"""
    try:
        item = MenuItem.objects.get(pk=pk)
    except MenuItem.DoesNotExist:
        return Response({'error': 'آیتم یافت نشد.'}, status=status.HTTP_404_NOT_FOUND)
    item.is_visible = not item.is_visible
    item.save(update_fields=['is_visible'])
    return Response({'id': item.id, 'is_visible': item.is_visible})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def bulk_reorder(request):
    """POST /api/admin/menu/reorder/ — ترتیب‌بندی bulk"""
    items = request.data.get('items', [])
    for entry in items:
        try:
            obj = MenuItem.objects.get(pk=entry['id'])
            obj.order = entry['order']
            obj.save(update_fields=['order'])
        except (MenuItem.DoesNotExist, KeyError):
            pass
    return Response({'detail': 'ترتیب‌بندی با موفقیت ذخیره شد.'})


# ─────────────────────────────────────────────────────────────────
#  Admin — Image Upload
# ─────────────────────────────────────────────────────────────────

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def upload_image(request):
    """POST /api/admin/upload/image/"""
    serializer = ImageUploadSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    image_file = serializer.validated_data['image']
    # Save to a temporary MenuItem or return path
    import os
    from django.core.files.storage import default_storage
    from django.utils.text import get_valid_filename
    filename = f"uploads/{get_valid_filename(os.path.basename(image_file.name))}"
    path = default_storage.save(filename, image_file)
    url = request.build_absolute_uri(f"/media/{path}")
    return Response({'url': url, 'path': path})
