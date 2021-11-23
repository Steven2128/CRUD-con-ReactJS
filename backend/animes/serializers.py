#Rest framework
from django.db.models import fields
from rest_framework import serializers
#Models
from .models import Anime

class AnimeSerializer(serializers.ModelSerializer):
    """Anime Model sSerializer"""
    class Meta:
        model = Anime
        fields = '__all__'
