from rest_framework import routers
from .api import ListingViewSet

router = routers.DefaultRouter()
router.register('api/listing', ListingViewSet, 'listing')
urlpatterns = router.urls
