from rest_framework import serializers
from listing.models import ListingInfo, GeneratedResume
from resume.models import BasicInfo
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
        # print("self: ", self)
        parsedExp = data.get("listing", None)
        parsedExp += " \n "
        parsedExp += data.get("listingTitle", None)
        print("exp: \n", parsedExp, "\ntype: ", type(parsedExp))
        listingStuff = TextRank4Keyword()
        listingStuff.analyze(parsedExp, window_size=4, lower=False,
                             stopwords=['technology', 'workplace', 'software', 'job', 'google', 'ideas', 'qualifications',
                                        'status', 'world', 'opportunity', 'opportunities', 'products', 'engineering', 'engineers',
                                        'information', 'busy', 'product', 'production', 'business', 'people', 'problem'])
        keywordList = listingStuff.get_keywords()

        print(" ????", keywordList)
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
            print(e.name, e.workHistory, e.email)
            name = e.name
            workHistory = e.workHistory
            email = e.email

        # name = e.name
        # email = e.email
        # education = e.education
        # print(type(e))
        # print(type(a))
        resumeObj = GeneratedResume.objects.create(
            name=name, workHistory=workHistory, email=email, **data)

        return resumeObj
