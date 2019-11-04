from rest_framework import routers
from .api import BasicViewSet, ExperienceViewSet
# , ExperienceViewSet

router = routers.DefaultRouter()
router.register('api/basic', BasicViewSet, 'basic')
router.register('api/experience', ExperienceViewSet, 'experience')

urlpatterns = router.urls
