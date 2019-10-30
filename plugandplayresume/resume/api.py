# basic api
from resume.models import BasicInfo, ExperienceInfo
from rest_framework import viewsets, permissions
from .serializers import ResumeSerializer, ExperienceSerializer

# viewest is a crud api, might not work with viewset for special calls


class BasicViewSet(viewsets.ModelViewSet):
    queryset = BasicInfo.objects.all()

    # change later to stop people from accessing everything
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = ResumeSerializer


# class ExperienceViewSet(viewsets.ModelViewSet):
#     queryset = ExperienceInfo.objects.all()

#     def create(self, request):

#     # change later to stop people from accessing everything
#     permission_classes = [
#         permissions.AllowAny
#     ]
#     serializer_class = ExperienceSerializer
