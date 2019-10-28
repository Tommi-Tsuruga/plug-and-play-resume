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
from .api import RegistrationAPI
from .views import UserViewSet, ExperienceViewSet


router = routers.DefaultRouter()
router.register('experience', ExperienceViewSet, base_name='experience')

urlpatterns = [
    path('', include(router.urls), name='experience'),
    # re_path(r'^auth/register/$', RegistrationAPI.as_view())
]
