#!/usr/bin/env python
# title           : api.py
# description     :
# author          : Keisuke Suzuki
# date            : 11/4/19
# usage           : python api.py
# ==============================================================================
from rest_framework import generics, permissions, viewsets
from .serializers import EducationSerializer, ExperienceSerializer, \
    BasicInfoSerializer, JobHistorySerializer


class BasicInfoAPI(generics.RetrieveUpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = BasicInfoSerializer

    def get_object(self):
        return self.request.user.basicInfo

    def perform_update(self, serializer):
        serializer.save(owner=self.request.user)


class ExperienceViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = ExperienceSerializer

    def get_queryset(self):
        return self.request.user.experience.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def perform_update(self, serializer):
        serializer.save(owner=self.request.user)


class EducationViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = EducationSerializer

    def get_queryset(self):
        return self.request.user.education.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class JobHistoryViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = JobHistorySerializer

    def get_queryset(self):
        return self.request.user.jobhistory.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
