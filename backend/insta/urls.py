from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from memories.views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'posts', MemoryViewset, basename='memory')
urlpatterns = router.urls

urlpatterns.append(path('admin/', admin.site.urls))

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)