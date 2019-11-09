"""plug-and-play-resume URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf import settings
from django.conf.urls import include
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView
from rest_framework import routers

from accounts import endpoints
from frontend import urls as frontend_urls
from listing.api import ListingViewSet, GeneratedResumeViewSet
from resume.api import ExperienceViewSet, EducationViewSet, BasicViewSet

router = routers.DefaultRouter()
router.register('basic', BasicViewSet, 'basic')
router.register('experience', ExperienceViewSet, 'experience')
router.register('education', EducationViewSet, 'education')
router.register('listings', ListingViewSet, 'listings')
router.register('resume', GeneratedResumeViewSet, 'resume')


urlpatterns = [
    re_path(r'^api/', include(router.urls)),
    re_path(r'^api/', include(endpoints)),
    re_path(r'^api/auth/', include('knox.urls')),
    re_path(r'^.*', include(frontend_urls)),
]
