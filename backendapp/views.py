#!/usr/bin/env python
# title           : views.py
# description     :
# author          : Keisuke Suzuki
# date            : 10/22/19
# usage           : python views.py
# ==============================================================================
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions

from .serializers import UserSerializer, ExperiencesSerializer
from .models import Experiences


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class ExperiencesViewSet(viewsets.ModelViewSet):
    queryset = Experiences.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = ExperiencesSerializer
