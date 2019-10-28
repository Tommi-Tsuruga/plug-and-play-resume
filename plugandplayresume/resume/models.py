from django.db import models

# Create your models here.

class BasicInfo(models.Model):
    name = models.CharField(max_length=100)
    education = models.TextField()
    workHistory = models.TextField()
    testField = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Experience(models.Model):
    experience = models.TextField(blank=True)
    userId = models.ForeignKey(BasicInfo, on_delete=models.CASCADE)
    objects = BasicInfo()
