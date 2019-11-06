#!/usr/bin/env python
# title           : views.py
# description     :
# author          : Keisuke Suzuki
# date            : 10/22/19
# usage           : python views.py
# ==============================================================================
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions

from .serializers import UserSerializer, ExperienceSerializer
from .models import Experience


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = ExperienceSerializer
