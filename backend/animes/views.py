#Rest franwork
from rest_framework.viewsets import ModelViewSet
#Django
from django.shortcuts import render
#Serializers
from .serializers import AnimeSerializer
#Models
from .models import Anime

class AnimeViewSet(ModelViewSet):
    serializer_class = AnimeSerializer
    queryset = Anime.objects.all()