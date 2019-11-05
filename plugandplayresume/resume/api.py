# basic api
from resume.models import BasicInfo, ExperienceInfo
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .serializers import BasicInfoSerializer, ExperienceSerializer
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
        print("perform_create")
        # tells the serlializer what to save, but which is serializer?
        # experience = serializer.validated_data.get('experience')
        # if experience.user != self.request.user:
        #     raise ValidationError({'experience': ['not valid exp']})
        # print(self)
        print(self.request.user)
        serializer.save(owner=self.request.user)
