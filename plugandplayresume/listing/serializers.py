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
                  'relevantExperience1', 'relevantExperience2', 'relevantExperience3', 'listingID')


# will probably wind up duplicating data here


    def create(self, data):
        # print("data get: ", data.get("listingID", None))
        # print('self listing: ', self.data)
        callKey = data.get("listingID", None)
        # print('callkey ', callKey)

        # print('self listing data: ', data)
        # KEY IN data. listingID
        # Comments.objects.select_related('user__pk','user__profile__pk')
        for e in BasicInfo.objects.select_related('owner'):
            name = e.name
            email = e.email
            education = e.education

        # a = BasicInfo.objects.select_related('owner'):
        expWordList = []
        expKeyList = []
        for i in ExperienceInfo.objects.select_related('owner'):
            # print("i:", i.experienceText)
            expWordList.append(i.experienceText)
            expKeyList.append(i.experienceKeywords)

        print(expWordList, '\n', expKeyList)
        print(expWordList[1])
        k = ListingInfo.objects.select_related('owner').get(id=callKey)
        print("K??", k, "maybe", k.listingKeywords)
        relevantExperience1 = "this is a test string"
        relevantExperience2 = "this is another test string"
        relevantExperience3 = "this is a third test string"

        resumeObj = GeneratedResume.objects.create(
            name=name, email=email, education=education, relevantExperience1=relevantExperience1, relevantExperience2=relevantExperience2, relevantExperience3=relevantExperience3, **data)

        return resumeObj
