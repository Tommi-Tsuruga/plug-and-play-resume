# basic api
from resume.models import BasicInfo, ExperienceInfo
from rest_framework import viewsets, permissions
from .serializers import BasicInfoSerializer, ExperienceSerializer

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

# class ExperienceViewSet(viewsets.ModelViewSet):
#     queryset = ExperienceInfo.objects.all()

#     def create(self, request):

#     # change later to stop people from accessing everything
#     permission_classes = [
#         permissions.AllowAny
#     ]
#     serializer_class = ExperienceSerializer
