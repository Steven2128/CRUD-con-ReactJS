# Generated by Django 3.2.9 on 2021-11-23 00:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Anime',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('character', models.CharField(max_length=150, unique=True, verbose_name='Personaje')),
                ('anime', models.CharField(max_length=150, verbose_name='anime')),
            ],
            options={
                'verbose_name': 'Anime',
                'verbose_name_plural': 'Animes',
            },
        ),
    ]
