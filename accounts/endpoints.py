#!/usr/bin/env python
# title           : endpoints.py
# description     :
# author          : Keisuke Suzuki
# date            : 10/22/19
# usage           : python endpoints.py
# ==============================================================================
from django.urls import re_path, include
from .api import RegisterAPI, LoginAPI, UserAPI
from knox import views as knox_views
urlpatterns = [
    re_path(r'^auth/register/', RegisterAPI.as_view()),
    re_path(r'^auth/login/', LoginAPI.as_view()),
    re_path(r'^auth/user/', UserAPI.as_view()),
    re_path(r'^auth/logout/', knox_views.LogoutView.as_view(),
            name='knox logout')
]

