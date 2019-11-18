from django.conf.urls import include
from django.urls import re_path
from rest_framework import routers

from .api import ExperienceViewSet, EducationViewSet, BasicInfoAPI

router = routers.DefaultRouter()
router.register(r'experience', ExperienceViewSet, basename='experience')
router.register(r'education', EducationViewSet, basename='education')

urlpatterns = [
    re_path(r'^basic/', BasicInfoAPI.as_view()),
    re_path(r'^', include(router.urls))
]
