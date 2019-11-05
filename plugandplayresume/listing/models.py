from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class ListingInfo(models.Model):
    owner = models.ForeignKey(
        User, related_name="listingInfo", on_delete=models.CASCADE, null=True)
    listingTitle = models.TextField()
    listing = models.TextField()
    listingKeywords = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)


class GeneratedResume(models.Model):
    name = models.CharField(max_length=100, blank=True)
    email = models.EmailField(max_length=100, unique=True, blank=True)
    education = models.TextField(blank=True)
    workHistory = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    relevantExperience1 = models.TextField()
    relevantExperience2 = models.TextField()
    relevantExperience3 = models.TextField(null=True)
    owner = models.ForeignKey(
        User, related_name="generatedResume", on_delete=models.CASCADE, null=True)
