#Django
#Django
from django.contrib import admin
from django.urls import path, include
#Rest framework
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('animes.urls')),
    #JWT auth
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    #Rest Framework Login urls
    path('api/auth/', include('rest_framework.urls'), name='rest_framework'),
    
]
