#Django
from django.db import models

class Anime(models.Model):
    """Anime Model"""

    character = models.CharField('Personaje', max_length=150, unique=True, blank=False, null=False)
    anime = models.CharField('anime', max_length=150, blank=False, null=False)

    class Meta:
        verbose_name = "Anime"
        verbose_name_plural = "Animes"

    def __str__(self):
        return self.name