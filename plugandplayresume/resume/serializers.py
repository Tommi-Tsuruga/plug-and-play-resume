from rest_framework import serializers
from resume.models import BasicInfo, ExperienceInfo, ParsedExperience

# Creates the api basically
# resume serializer


class BasicInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = BasicInfo
        fields = '__all__'


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExperienceInfo
        fields = '__all__'

# # parsed serializer for 3rd table

# maybe just send three requests at once?


class ParsedSerializer(serializers.ModelSerializer):
    experience = ExperienceSerializer(read_only=True)

    class Meta:
        model = ParsedExperience
        fields = '__all__'
