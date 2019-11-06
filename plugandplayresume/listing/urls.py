from rest_framework import routers
from .api import ListingViewSet, GeneratedResumeViewset

router = routers.DefaultRouter()
router.register('api/listing', ListingViewSet, 'listing')
router.register('api/resume', GeneratedResumeViewset, 'resume')

urlpatterns = router.urls
