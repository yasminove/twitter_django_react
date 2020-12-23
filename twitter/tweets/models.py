from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.

class Tweet(models.Model):
    content = models.TextField()
    profile_pic = models.URLField(default='pic')
    displayName = models.CharField(max_length=50, default='Twitter User')
    username = models.CharField(max_length=50, default='username')
    tweeted_at = models.DateTimeField(default=timezone.now)
    # author = models.ForeignKey(User, on_delete=models.CASCADE)
