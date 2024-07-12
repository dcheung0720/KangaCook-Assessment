from rest_framework import serializers
from .models import BookCollection

class BookCollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookCollection
        fields = ('id', 'title', 'author', 'pages', 'finished')