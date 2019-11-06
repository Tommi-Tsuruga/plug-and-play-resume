from rest_framework import serializers
from listing.models import ListingInfo, GeneratedResume
from resume.models import BasicInfo, ExperienceInfo
# Creates the api basically
# resume serializer
from utils import TextRank4Keyword
import sys
import os.path
sys.path.append(os.path.abspath('../'))


class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListingInfo
        fields = ('id', 'listingTitle', 'listing', 'listingKeywords')

    def create(self, data):
        parsedExp = data.get("listing", None)
        parsedExp += " \n "
        parsedExp += data.get("listingTitle", None)
        listingStuff = TextRank4Keyword()
        listingStuff.analyze(parsedExp, window_size=4, lower=False,
                             stopwords=['technology', 'workplace', 'software', 'job', 'google', 'ideas', 'qualifications',
                                        'status', 'world', 'opportunity', 'opportunities', 'products', 'engineering', 'engineers',
                                        'information', 'busy', 'product', 'production', 'business', 'people', 'problem'])
        keywordList = listingStuff.get_keywords()

        listingObj = ListingInfo.objects.create(
            listingKeywords=keywordList, **data)

        return listingObj


class GeneratedResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneratedResume
        fields = ('name', 'email', 'education', 'workHistory',
                  'relevantExperience1', 'relevantExperience2', 'relevantExperience3')


# will probably wind up duplicating data here

    def create(self, data):
        # Comments.objects.select_related('user__pk','user__profile__pk')
        for e in BasicInfo.objects.select_related('owner'):
            name = e.name
            email = e.email
            education = e.education

        print("create called")
        for i in ExperienceInfo.objects.select_related('owner'):
            print("i:", i.experienceText)

        resumeObj = GeneratedResume.objects.create(
            name=name, email=email, education=education, **data)

        return resumeObj
