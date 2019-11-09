from rest_framework import viewsets, permissions
from .serializers import ListingSerializer, GeneratedResumeSerializer


class ListingViewSet(viewsets.ModelViewSet):
    # change later to stop people from accessing everything

    serializer_class = ListingSerializer

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
        print("self data", self.request.data)
        print("self data", self.request.data.get('i'))
        print("self type", type(self.request.data))

        serializer.save(owner=self.request.user,
                        listingID=self.request.data.get('i'))

