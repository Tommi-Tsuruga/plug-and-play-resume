from rest_framework import serializers
from resume.models import BasicInfo, ExperienceInfo

# Creates the api basically
# resume serializer


class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = BasicInfo
        fields = '__all__'


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExperienceInfo
        fields = 'all'

# # parsed serializer for 3rd table


# class ParsedSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ParsedExperience
#         fields = '__all__'
