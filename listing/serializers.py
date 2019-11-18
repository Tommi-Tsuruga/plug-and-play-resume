import os.path
import sys

from rest_framework import serializers

from listing.models import ListingInfo, GeneratedResume
from resume.models import BasicInfo, Experience, Education
from resume.utils import TextRank4Keyword

sys.path.append(os.path.abspath('../'))

stopwords = ['technology', 'workplace', 'software', 'job', 'google', 'ideas',
             'qualifications', 'status', 'world', 'opportunity',
             'opportunities', 'products', 'engineering', 'engineers',
             'information', 'busy', 'product', 'production', 'business',
             'people', 'problem']


class ListingInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListingInfo
        fields = ('id', 'listingTitle', 'listing', 'listingKeywords')

    def update(self, instance, data):
        parsed_exp = data.get("listingTitle", instance.listingTitle)
        parsed_exp += " \n "
        parsed_exp += data.get("listing", instance.listing)
        listing_stuff = TextRank4Keyword()
        listing_stuff.analyze(parsed_exp, window_size=4, lower=False,
                              stopwords=stopwords)
        keyword_list = listing_stuff.get_keywords()
        instance.listingKeywords = keyword_list
        return instance.save

    def create(self, data):
        parsed_exp = data.get("listingTitle", None)
        parsed_exp += " \n "
        parsed_exp += data.get("listing", None)
        listing_stuff = TextRank4Keyword()
        listing_stuff.analyze(parsed_exp, window_size=4, lower=False,
                              stopwords=stopwords)
        keyword_list = listing_stuff.get_keywords()

        listing_obj = ListingInfo.objects.create(
            listingKeywords=keyword_list, **data)

        return listing_obj


class GeneratedResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneratedResume
        fields = ('id', 'first_name', 'last_name', 'email', 'education1',
                  'education2', 'relevantExperience1', 'relevantExperience2',
                  'relevantExperience3', 'listingID')

    # will probably wind up duplicating data here

    def create(self, data):
        call_key = data.get("listingID", None)

        print('self listings data: ', data)
        # KEY IN data. listingID
        # Comments.objects.select_related('user__pk','user__profile__pk')
        print("all()[0]: ", BasicInfo.objects.all().get(owner=data.get(
            'owner')))
        basic_info = BasicInfo.objects.get(owner=data.get('owner'))
        first_name = basic_info.first_name
        last_name = basic_info.last_name
        email = basic_info.email
        print(first_name, last_name, email)
        print("after loop", basic_info)
        education = {}
        for ind, val in enumerate(Education.objects.select_related('owner')):
            tmp = "{}  ({} - {})\n{} in {}".format(val.school_name,
                                                    val.start_date,
                                                    val.end_date, val.degree,
                                                    val.major)
            print(tmp)
            education[ind] = tmp

        k = ListingInfo.objects.select_related('owner').get(id=call_key)
        print("K??", k, "maybe", k.listingKeywords)
        wordsk = k.listingKeywords.split(',')
        print('wordsk', wordsk)
        listing_set = set(wordsk)
        a = BasicInfo.objects.select_related('owner')
        print("listings set", listing_set)

        exp_word_count = {}

        for idx, val in enumerate(Experience.objects.select_related('owner')):
            temp_set = set()
            temp_set = set(val.experience_keywords.split(','))
            listing_words = wordsk
            set_listing = set(listing_words)
            temp_set = temp_set.intersection(set_listing)
            exp_word_count[val.id] = len(temp_set)
            temp_set.clear()

        print("final set", exp_word_count)
        # print(len(exp_word_count[0]))
        exp_key_order = sorted(exp_word_count.items(), key=lambda x: x[1],
                               reverse=True)
        print(exp_key_order)

        # for i in range(3):
        #     print(exp_key_order[i], type(exp_key_order[i]))

        generated_exp1 = Experience.objects.select_related('owner').get(
            id=exp_key_order[0][0]).title
        generated_exp1 += '\n-'
        generated_exp1 += Experience.objects.select_related(
            'owner').get(id=exp_key_order[0][0]).description
        relevant_experience1 = generated_exp1

        generated_exp2 = Experience.objects.select_related(
            'owner').get(id=exp_key_order[1][0]).title
        generated_exp2 += '\n-'
        generated_exp2 += Experience.objects.select_related(
            'owner').get(id=exp_key_order[1][0]).description
        relevant_experience2 = generated_exp2

        generated_exp3 = Experience.objects.select_related(
            'owner').get(id=exp_key_order[2][0]).title
        generated_exp3 += '\n-'
        generated_exp3 += Experience.objects.select_related(
            'owner').get(id=exp_key_order[2][0]).description
        relevant_experience3 = generated_exp3

        resume_obj = GeneratedResume.objects.create(
            first_name=first_name,
            last_name=last_name,
            email=email,
            education1=education[0],
            education2=education[1],
            relevantExperience1=relevant_experience1,
            relevantExperience2=relevant_experience2,
            relevantExperience3=relevant_experience3, **data)

        return resume_obj
