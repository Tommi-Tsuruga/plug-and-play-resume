#!/usr/bin/env python
# title           : urls.py
# description     :
# author          : Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga 
# date            : 10/22/19
# usage           : python urls.py
# ==============================================================================
from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
]
