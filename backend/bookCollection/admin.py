from django.contrib import admin
from .models import BookCollection

class BookCollectionAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'pages', 'finished')

# Register your models here.

admin.site.register(BookCollection, BookCollectionAdmin)