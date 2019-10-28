from rest_framework import serializers
from resume.models import BasicInfo

# Creates the api basically
# resume serializer

class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = BasicInfo
        fields = '__all__'