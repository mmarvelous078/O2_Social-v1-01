# Generated by Django 4.2.4 on 2023-11-01 15:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0016_like_you_like_this'),
    ]

    operations = [
        migrations.AddField(
            model_name='threadscontent',
            name='content_video',
            field=models.FileField(blank=True, null=True, upload_to='content_videos/'),
        ),
    ]
