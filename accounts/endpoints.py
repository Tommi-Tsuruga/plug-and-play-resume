#!/usr/bin/env python
# title           : endpoints.py
# description     :
# author          : Keisuke Suzuki
# date            : 10/22/19
# usage           : python endpoints.py
# ==============================================================================
from django.urls import re_path
from .api import RegisterAPI, LoginAPI, UserAPI

urlpatterns = [
    re_path(r'^auth/register/', RegisterAPI.as_view()),
    re_path(r'^auth/login/', LoginAPI.as_view()),
    re_path(r'^auth/user/', UserAPI.as_view()),
]
