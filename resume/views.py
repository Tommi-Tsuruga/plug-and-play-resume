#!/usr/bin/env python
# title           : views.py
# description     :
# author          : Keisuke Suzuki
# date            : 11/4/19
# usage           : python views.py
# ==============================================================================
from knox.models import AuthToken
from rest_framework import generics, permissions, viewsets
from rest_framework.response import Response
from django.shortcuts import render
from .serializers import EducationSerializer, ExperienceSerializer


class ExperienceViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = ExperienceSerializer

    def get_queryset(self):
        return self.request.user.experience.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class EducationViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = EducationSerializer

    def get_queryset(self):
        return self.request.user.education.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

