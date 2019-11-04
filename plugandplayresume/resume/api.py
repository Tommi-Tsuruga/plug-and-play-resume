# basic api
from resume.models import BasicInfo, ExperienceInfo, ParsedExperience
from rest_framework import viewsets, permissions
from .serializers import BasicInfoSerializer, ExperienceSerializer, ParsedSerializer
from django.core.exceptions import ValidationError
# viewest is a crud api, might not work with viewset for special calls


class BasicViewSet(viewsets.ModelViewSet):
    # change later to stop people from accessing everything

    serializer_class = BasicInfoSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.basicInfo.all()

    def perform_create(self, serializer):
        # tells the serlializer what to save, but which is serializer?

        serializer.save(owner=self.request.user)


class ExperienceViewSet(viewsets.ModelViewSet):
    # change later to stop people from accessing everything

    serializer_class = ExperienceSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.experienceInfo.all()

    def perform_create(self, serializer):
        # tells the serlializer what to save, but which is serializer?
        # experience = serializer.validated_data.get('experience')
        # if experience.user != self.request.user:
        #     raise ValidationError({'experience': ['not valid exp']})
        serializer.save(owner=self.request.user)


class ParsedViewSet(viewsets.ModelViewSet):

    serializer_class = ParsedSerializer

    def get_queryset(self):
        return self.request.user.experienceKeywords.all()

    def perform_create(self, serializer):
        exp = ExperienceInfo.objects.all().upper()
        serializer.save(owner=self.request.user)
