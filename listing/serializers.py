import os.path
import sys

from rest_framework import serializers

from listing.models import ListingInfo, GeneratedResume
from resume.models import BasicInfo, Experience, Education
from resume.utils import TextRank4Keyword

sys.path.append(os.path.abspath('../'))


class ListingInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListingInfo
        fields = ('id', 'listingTitle', 'listing', 'listingKeywords')

    def create(self, data):
        parsed_exp = data.get("listingTitle", None)
        parsed_exp += " \n "
        parsed_exp += data.get("listing", None)
        listing_stuff = TextRank4Keyword()
        listing_stuff.analyze(parsed_exp, window_size=4, lower=False,
                              stopwords=['technology', 'workplace', 'software',
                                         'job', 'google', 'ideas',
                                         'qualifications',
                                         'status', 'world', 'opportunity',
                                         'opportunities', 'products',
                                         'engineering', 'engineers',
                                         'information', 'busy', 'product',
                                         'production', 'business', 'people',
                                         'problem'])
        keyword_list = listing_stuff.get_keywords()

        listing_obj = ListingInfo.objects.create(
            listingKeywords=keyword_list, **data)

        return listing_obj


class GeneratedResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneratedResume
        fields = ('first_name', 'last_name', 'email', 'education1',
                  'education2', 'relevantExperience1', 'relevantExperience2',
                  'relevantExperience3', 'listingID')

    # will probably wind up duplicating data here

    def create(self, data):
        print("data get: ", data.get("listingID", None))
        print('self listings: ', self.data)
        callKey = data.get("listingID", None)
        print('callkey ', callKey)

        print('self listings data: ', data)
        # KEY IN data. listingID
        # Comments.objects.select_related('user__pk','user__profile__pk')
        for e in BasicInfo.objects.select_related('owner'):
            first_name = e.first_name
            last_name = e.last_name
            email = e.email

        education = {}
        for ind, val in enumerate(Education.objects.select_related('owner')):
            tmp = "{}  ({} - {})".format(val.school_name, val.start_date,
                                         val.end_date)
            print(tmp)
            education[ind] = tmp

        k = ListingInfo.objects.select_related('owner').get(id=callKey)
        print("K??", k, "maybe", k.listingKeywords)
        wordsk = k.listingKeywords.split(',')
        print('wordsk', wordsk)
        listingSet = set(wordsk)
        a = BasicInfo.objects.select_related('owner')
        print("listings set", listingSet)

        expWordCount = {}

        for idx, val in enumerate(Experience.objects.select_related('owner')):
            tempSet = set()
            tempSet = set(val.experience_keywords.split(','))
            listingWords = wordsk
            setListing = set(listingWords)
            tempSet = tempSet.intersection(setListing)
            expWordCount[val.id] = len(tempSet)
            tempSet.clear()

        print("final set", expWordCount)
        # print(len(expWordCount[0]))
        exp_key_order = sorted(expWordCount.items(), key=lambda x: x[1],
                               reverse=True)
        print(exp_key_order)

        # for i in range(3):
        #     print(exp_key_order[i], type(exp_key_order[i]))

        generatedExp1 = Experience.objects.select_related('owner').get(
            id=exp_key_order[0][0]).title
        generatedExp1 += '\n-'
        generatedExp1 += Experience.objects.select_related(
            'owner').get(id=exp_key_order[0][0]).description
        relevantExperience1 = generatedExp1

        generatedExp2 = Experience.objects.select_related(
            'owner').get(id=exp_key_order[1][0]).title
        generatedExp2 += '\n-'
        generatedExp2 += Experience.objects.select_related(
            'owner').get(id=exp_key_order[1][0]).description
        relevantExperience2 = generatedExp2

        generatedExp3 = Experience.objects.select_related(
            'owner').get(id=exp_key_order[2][0]).title
        generatedExp3 += '\n-'
        generatedExp3 += Experience.objects.select_related(
            'owner').get(id=exp_key_order[2][0]).description
        relevantExperience3 = generatedExp3

        resumeObj = GeneratedResume.objects.create(
            first_name=first_name,
            last_name=last_name,
            # email=email,
            education1=education[0],
            education2=education[1],
            relevantExperience1=relevantExperience1,
            relevantExperience2=relevantExperience2,
            relevantExperience3=relevantExperience3, **data)

        return resumeObj
