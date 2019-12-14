from django.urls import re_path, include, path
from rest_framework import routers
from django.conf.urls import url
from .api import ListingInfoViewSet, GeneratedResumeViewSet, ResumePDFViewset

router = routers.DefaultRouter()
router.register(r'listing', ListingInfoViewSet, basename='listing')
router.register(r'resume', GeneratedResumeViewSet, basename='resume')
router.register(r'resumePDF', ResumePDFViewset, basename='resumePDF')


urlpatterns = [
    re_path(r'^', include(router.urls)),
]
