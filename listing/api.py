from rest_framework import viewsets, permissions
from .serializers import ListingInfoSerializer, GeneratedResumeSerializer
from django.template.loader import get_template
from django.template import Context
from subprocess import Popen, PIPE
import tempfile
from .models import GeneratedResume
from django.views.generic import View
import datetime
from listing.pdfutils import render_to_pdf


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


class ResumePDFViewset(viewsets.ModelViewSet):
    serializer_class = GeneratedResumeSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user,
                        listingID=self.request.data.get('i'))
