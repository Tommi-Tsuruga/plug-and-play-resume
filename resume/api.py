#!/usr/bin/env python
# title           : api.py
# description     :
# author          : Keisuke Suzuki
# date            : 11/4/19
# usage           : python api.py
# ==============================================================================

from knox.models import AuthToken
from rest_framework import generics, permissions, viewsets
from rest_framework.response import Response
from django.shortcuts import render
from .serializers import EducationSerializer, ExperienceSerializer, \
    BasicInfoSerializer


class BasicViewSet(viewsets.ModelViewSet):
    serializer_class = BasicInfoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.basicInfo.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ExperienceViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = ExperienceSerializer

    def get_queryset(self):
        return self.request.user.experience.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class EducationViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = EducationSerializer

    def get_queryset(self):
        return self.request.user.education.all()

    def perform_create(self, serializer):
        print("perform_create")
        print(self.request.user)
        serializer.save(owner=self.request.user)

