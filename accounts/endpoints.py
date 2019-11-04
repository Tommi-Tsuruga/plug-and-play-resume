#!/usr/bin/env python
# title           : endpoints.py
# description     :
# author          : Keisuke Suzuki
# date            : 10/22/19
# usage           : python endpoints.py
# ==============================================================================
from django.conf import settings
from django.conf.urls import include
from django.conf.urls.static import static
from django.urls import path, re_path
from rest_framework import routers
from knox import views as knox_views
from .api import RegistrationAPI, LoginAPI, UserAPI, UserProfileViewSet


urlpatterns = [
    path('api/auth/register/', RegistrationAPI.as_view()),
    path('api/auth/login/', LoginAPI.as_view()),
    path('api/auth/user/', UserAPI.as_view()),
]
