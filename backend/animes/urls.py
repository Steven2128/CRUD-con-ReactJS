#Rest frmamework
from rest_framework.routers import DefaultRouter
#Django
from django.urls import path, include
#Views
from .views import AnimeViewSet

router = DefaultRouter()
router.register('animes', AnimeViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
