from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from memories.views import *
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = DefaultRouter()
router.register(r'posts', MemoryViewset, basename='memory')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/register/', RegisterView.as_view(), name='register'),  # User registration
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # User login
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Token refresh
    path('api/', include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)