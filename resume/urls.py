from rest_framework import routers
from .views import EducationViewSet, ExperienceViewSet


router = routers.DefaultRouter()
router.register('api/education', EducationViewSet, 'education')
router.register('api/experience', ExperienceViewSet, 'experience')
urlpatterns = router.urls
