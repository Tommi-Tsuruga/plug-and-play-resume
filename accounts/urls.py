#!/usr/bin/env python
# title           : urls.py
# description     :
# author          : Keisuke Suzuki
# date            : 10/22/19
# usage           : python urls.py
# ==============================================================================
from django.urls import re_path
from knox import views as knox_views
from rest_framework import routers
from .api import RegisterAPI, LoginAPI, UserAPI
from resume.api import ExperienceViewSet, EducationViewSet, BasicInfoAPI
from listing.api import ListingInfoViewSet, GeneratedResumeViewSet

urlpatterns = [
    re_path(r'^auth/register/', RegisterAPI.as_view()),
    re_path(r'^auth/login/', LoginAPI.as_view()),
    re_path(r'^auth/user/', UserAPI.as_view()),
    re_path(r'^auth/logout/', knox_views.LogoutView.as_view(),
            name='knox logout')
]
