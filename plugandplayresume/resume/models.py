from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class BasicInfo(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    education = models.TextField()
    workHistory = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        User, related_name="basicInfo", on_delete=models.CASCADE, null=True)


class ExperienceInfo(models.Model):
    owner = models.ForeignKey(
        User, related_name="experienceInfo", on_delete=models.CASCADE, null=True)
    experience = models.TextField()
    experienceKeywords = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
