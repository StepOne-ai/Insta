from rest_framework import serializers
from .models import *

class MemorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'description', 'image']