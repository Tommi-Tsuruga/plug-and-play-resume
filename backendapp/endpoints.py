#!/usr/bin/env python
# title           : endpoints.py
# description     :
# author          : Keisuke Suzuki
# date            : 10/22/19
# usage           : python endpoints.py
# ==============================================================================
from django.urls import path, re_path
from django.conf.urls import include
from rest_framework import routers
from .api import RegistrationAPI
from .views import UserViewSet, ExperienceViewSet

router = routers.DefaultRouter()
router.register('experience', ExperienceViewSet)

urlpatterns = [
    path('', include(router.urls)),
    re_path('^auth/register/$', RegistrationAPI.as_view())

]
