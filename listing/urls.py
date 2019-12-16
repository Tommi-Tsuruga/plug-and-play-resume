from django.urls import re_path, include
from rest_framework import routers

from .api import ListingInfoViewSet, GeneratedResumeViewSet

router = routers.DefaultRouter()
router.register(r'listing', ListingInfoViewSet, basename='listing')
router.register(r'resume', GeneratedResumeViewSet, basename='resume')

urlpatterns = [
    re_path(r'^', include(router.urls))
]
