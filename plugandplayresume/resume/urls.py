from rest_framework import routers
from .api import ResumeViewSet, ExperienceViewSet

router = routers.DefaultRouter()
router.register('api/resume', ResumeViewSet, 'resume')
router.register('api/experience', ExperienceViewSet, 'experience')

urlpatterns = router.urls