from rest_framework import viewsets, permissions, mixins
from .serializers import ListingInfoSerializer, GeneratedResumeSerializer
from django.template.loader import get_template
from django.template import Context
from .models import GeneratedResume
from django.views.generic import View
from django.http import HttpResponse
from resume.models import BasicInfo, Experience, Education, JobHistory
import os.path
import sys
import io


class ListingInfoViewSet(viewsets.ModelViewSet):
    serializer_class = ListingInfoSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.listingInfo.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class GeneratedResumeViewSet(viewsets.ModelViewSet):
    serializer_class = GeneratedResumeSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.generatedResume.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user,
                        listingID=self.request.data.get('i'))
