from django.shortcuts import render
from resume.models import BasicInfo, ExperienceInfo
from rest_framework import viewsets, permissions
from .serializers import ResumeSerializer, ExperienceSerializer
from django.http import HttpResponse

# # Create your views here.
# @api_view(['GET', 'POST'])
# def basic_content_list(request, name):
#     try:
#         basic = BasicInfo.objects.get(name=name)
#     except:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'GET':
#         contents = Content.objects
#         serializer = ResumeSerializer(contents, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         request.data["topic"] = topic
#         serializer = ContentSerializer(data=request.data)
#         # print request.data
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
