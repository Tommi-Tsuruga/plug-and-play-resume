from django.db import models

# Create your models here.


class BasicInfo(models.Model):
    name = models.CharField(max_length=100)
    education = models.TextField()
    workHistory = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


class ExperienceInfo(models.Model):
    user = models.ForeignKey(BasicInfo, on_delete=models.CASCADE)
    experience = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
