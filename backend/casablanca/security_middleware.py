class SecurityHeadersMiddleware:
    """
    Adds security headers to every response.
    - CSP locks down script/style/image/font/media sources
    - Referrer-Policy prevents URL leaks to third parties
    - Permissions-Policy disables unused browser APIs
    - X-Frame-Options and X-Content-Type-Options always on (not just production)
    """

    _CSP = (
        "default-src 'self'; "
        "script-src 'self' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://unpkg.com; "
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
        "font-src 'self' https://fonts.gstatic.com; "
        "img-src 'self' data: blob: https://images.unsplash.com https://picsum.photos; "
        "media-src 'self' https://assets.mixkit.co; "
        "connect-src 'self'; "
        "object-src 'none'; "
        "frame-ancestors 'none'; "
        "form-action 'self'; "
        "base-uri 'self';"
    )

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        response['X-Content-Type-Options'] = 'nosniff'
        response['X-Frame-Options'] = 'DENY'
        response['Referrer-Policy'] = 'strict-origin-when-cross-origin'
        response['Permissions-Policy'] = 'camera=(), microphone=(), geolocation=(), payment=(), usb=()'
        response['Content-Security-Policy'] = self._CSP
        return response
