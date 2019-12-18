from django.contrib.auth.models import User
from django.db import models


class ListingInfo(models.Model):
    owner = models.ForeignKey(
        User, related_name="listingInfo", on_delete=models.CASCADE, null=True)
    listingTitle = models.TextField()
    listing = models.TextField()
    listingKeywords = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)


class GeneratedResume(models.Model):
    first_name = models.CharField(max_length=100, blank=True)
    last_name = models.CharField(max_length=100, blank=True)
    email = models.EmailField(max_length=100, blank=True)
    education1 = models.TextField(blank=True)
    relevantJobHistory1 = models.TextField(blank=True, null=True)
    relevantJobHistory2 = models.TextField(blank=True, null=True)
    relevantJobHistory3 = models.TextField(blank=True, null=True)
    relevantExperience1 = models.TextField(blank=True, null=True)
    relevantExperience2 = models.TextField(blank=True, null=True)
    relevantExperience3 = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    listingID = models.IntegerField(null=True, blank=True)
    owner = models.ForeignKey(User, related_name="generatedResume",
                              on_delete=models.CASCADE, null=True)
