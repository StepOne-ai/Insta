from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from .serializers import *
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from .models import *

def home(request):
    return HttpResponse("Hello, world.")

class MemoryViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]  # TODO: Change to appropriate permissions
    queryset = Post.objects.all()
    serializer_class = MemorySerializer
    parser_classes = [MultiPartParser, FormParser]

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
    def retrieve(self, request, pk=None):
        try:
            post = self.queryset.get(pk=pk)
            serializer = self.serializer_class(post)
            return Response(serializer.data)
        except Post.DoesNotExist:
            return Response({"error": "Post not found"}, status=404)

    def update(self, request, pk=None):
        try:
            post = self.queryset.get(pk=pk)
            serializer = self.serializer_class(post, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=200)
            return Response(serializer.errors, status=400)
        except Post.DoesNotExist:
            return Response({"error": "Post not found"}, status=404)
    
    def destroy(self, request, pk=None):
        try:
            post = self.queryset.get(pk=pk)
            post.delete()
            return Response(status=204)
        except Post.DoesNotExist:
            return Response({"error": "Post not found"}, status=404)