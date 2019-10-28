#basic api
from resume.models import BasicInfo
from rest_framework import viewsets, permissions
from .serializers import ResumeSerializer

#viewest is a crud api, might not work with viewset for special calls

class ResumeViewSet(viewsets.ModelViewSet):
    queryset = BasicInfo.objects.all()
    
    #change later to stop people from accessing everything
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ResumeSerializer

