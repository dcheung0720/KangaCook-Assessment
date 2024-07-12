from django.db import models

# Create your models here.
class BookCollection(models.Model):
    title = models.CharField(max_length=120)
    author = models.TextField()
    pages = models.IntegerField()
    finished = models.BooleanField(default=False)

    def _str_(self):
        return self.title