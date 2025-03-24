from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    id = models.AutoField(primary_key=True)
    caption = models.TextField()
    image = models.ImageField(upload_to='media/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title