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

        k = ListingInfo.objects.select_related('owner').get(id=callKey)
        # print("K??", k, "maybe", k.listingKeywords)
        wordsk = k.listingKeywords.split(',')
        # print('wordsk', wordsk)
        # listingSet = set(wordsk)
        # a = BasicInfo.objects.select_related('owner'):
        # print("listing set", listingSet)

        expWordCount = {}

        for idx, val in enumerate(ExperienceInfo.objects.select_related('owner')):
            tempSet = set()
            tempSet = set(val.experienceKeywords.split(','))
            listingWords = wordsk
            setListing = set(listingWords)
            tempSet = tempSet.intersection(setListing)
            expWordCount[val.id] = len(tempSet)
            tempSet.clear()

        print("final set", expWordCount)
        # print(len(expWordCount[0]))
        keyOrder = sorted(expWordCount.items(),
                          key=lambda x: x[1], reverse=True)
        print(keyOrder)

        # for i in range(3):
        #     print(keyOrder[i], type(keyOrder[i]))

        generatedExp1 = ExperienceInfo.objects.select_related(
            'owner').get(id=keyOrder[0][0]).experienceTitle
        generatedExp1 += '\n-'
        generatedExp1 += ExperienceInfo.objects.select_related(
            'owner').get(id=keyOrder[0][0]).experienceText
        relevantExperience1 = generatedExp1

        generatedExp2 = ExperienceInfo.objects.select_related(
            'owner').get(id=keyOrder[1][0]).experienceTitle
        generatedExp2 += '\n-'
        generatedExp2 += ExperienceInfo.objects.select_related(
            'owner').get(id=keyOrder[1][0]).experienceText
        relevantExperience2 = generatedExp2

        generatedExp3 = ExperienceInfo.objects.select_related(
            'owner').get(id=keyOrder[2][0]).experienceTitle
        generatedExp3 += '\n-'
        generatedExp3 += ExperienceInfo.objects.select_related(
            'owner').get(id=keyOrder[2][0]).experienceText
        relevantExperience3 = generatedExp3

        resumeObj = GeneratedResume.objects.create(
            name=name, email=email, education=education, relevantExperience1=relevantExperience1, relevantExperience2=relevantExperience2, relevantExperience3=relevantExperience3, **data)

        return resumeObj
