#Rest franwork
from django.contrib.auth import authenticate
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
#Django
from django.shortcuts import render
#Serializers
from .serializers import AnimeSerializer
#Models
from .models import Anime

class AnimeViewSet(ModelViewSet):
    serializer_class = AnimeSerializer
    queryset = Anime.objects.all()
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]