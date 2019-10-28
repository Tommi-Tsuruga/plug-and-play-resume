from django.db import models

# Create your models here.

class BasicInfo(models.Model):
    name = models.CharField(max_length=100)
    education = models.TextField()
    workHistory = models.TextField()
    experience1 = models.CharField(max_length=400, blank=True)
    experience2 = models.CharField(max_length=400, blank=True)
    experience3 = models.CharField(max_length=400, blank=True)
    experience4 = models.CharField(max_length=400, blank=True)
    experience5 = models.CharField(max_length=400, blank=True)
    experience6 = models.CharField(max_length=400, blank=True)
    experience7 = models.CharField(max_length=400, blank=True)
    experience8 = models.CharField(max_length=400, blank=True)
    experience9 = models.CharField(max_length=400, blank=True)
    experience10 = models.CharField(max_length=400, blank=True)
    experience11 = models.CharField(max_length=400, blank=True)
    experience12 = models.CharField(max_length=400, blank=True)
    experience13 = models.CharField(max_length=400, blank=True)
    experience14 = models.CharField(max_length=400, blank=True)
    experience15 = models.CharField(max_length=400, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)