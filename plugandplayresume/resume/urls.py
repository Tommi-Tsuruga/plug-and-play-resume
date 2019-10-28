from rest_framework import routers
from .api import ResumeViewSet

router = routers.DefaultRouter()
router.register('api/resume', ResumeViewSet, 'resume')

urlpatterns = router.urls