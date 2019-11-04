from rest_framework import routers
from .api import BasicViewSet, ExperienceViewSet, ParsedViewSet


router = routers.DefaultRouter()
router.register('api/basic', BasicViewSet, 'basic')
router.register('api/experience', ExperienceViewSet, 'experience')
router.register('api/parsed', ParsedViewSet, 'parsed')

urlpatterns = router.urls
