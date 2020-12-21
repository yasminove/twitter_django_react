from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.

class Tweet(models.Model):
    content = models.TextField()
    tweeted_at = models.DateTimeField(default=timezone.now)
    # author = models.ForeignKey(User, on_delete=models.CASCADE)
