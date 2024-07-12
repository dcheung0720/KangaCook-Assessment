from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BookCollectionSerializer
from .models import BookCollection

# Create your views here.

class BookCollectionView(viewsets.ModelViewSet):
    serializer_class = BookCollectionSerializer
    queryset = BookCollection.objects.all()