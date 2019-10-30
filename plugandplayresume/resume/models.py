from django.db import models

# Create your models here.


class BasicInfo(models.Model):
    name = models.CharField(max_length=100)
    education = models.TextField()
    workHistory = models.TextField()
    workExperience = models.CharField(max_length=400, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
