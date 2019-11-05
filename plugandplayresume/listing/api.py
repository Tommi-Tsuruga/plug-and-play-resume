
from listing.models import ListingInfo
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .serializers import ListingSerializer
from django.core.exceptions import ValidationError


class ListingViewSet(viewsets.ModelViewSet):
    # change later to stop people from accessing everything

    serializer_class = ListingSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.listingInfo.all()

    def perform_create(self, serializer):
        print("perform_create")
        print(self.request.user)
        serializer.save(owner=self.request.user)
