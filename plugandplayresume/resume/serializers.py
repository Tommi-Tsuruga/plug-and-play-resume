from utils import TextRank4Keyword
from resume.models import BasicInfo, ExperienceInfo
from rest_framework import serializers
import sys
import os.path
sys.path.append(os.path.abspath('../'))

# Creates the api basically
# resume serializer


class BasicInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = BasicInfo
        fields = '__all__'


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExperienceInfo
        fields = ('id', 'experienceTitle', 'experience', 'experienceKeywords')

    def create(self, data):
        parsedExp = data.get("experience", None)
        parsedExp += " \n "
        parsedExp += data.get("experienceTitle", None)
        resumeStuff = TextRank4Keyword()
        resumeStuff.analyze(parsedExp, window_size=4, lower=False,
                            stopwords=['technology', 'workplace', 'software', 'job', 'google', 'ideas', 'qualifications',
                                       'status', 'world', 'opportunity', 'opportunities', 'products', 'engineering', 'engineers',
                                       'information'])
        keywordList = resumeStuff.get_keywords()

        experienceObj = ExperienceInfo.objects.create(
            experienceKeywords=keywordList, **data)

        return experienceObj
