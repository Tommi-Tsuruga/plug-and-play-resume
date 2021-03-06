import os.path
import sys

from django.contrib.auth.models import User
from rest_framework import serializers
from django.http import HttpResponse
from django.template import Context
from django.template.loader import get_template
from subprocess import Popen, PIPE
import tempfile
from listing.models import ListingInfo, GeneratedResume
from resume.models import BasicInfo, Experience, Education, JobHistory
from resume.utils import TextRank4Keyword

sys.path.append(os.path.abspath('../'))

stopwords = ['technology', 'workplace', 'software', 'job', 'google', 'ideas',
             'qualifications', 'status', 'world', 'opportunity',
             'opportunities', 'products', 'engineering', 'engineers',
             'information', 'busy', 'product', 'production', 'business',
             'people', 'problem']


def get_keywords(resume_stuff, parsed):
    resume_stuff.analyze(parsed, window_size=4, lower=False,
                         stopwords=stopwords)
    return resume_stuff.get_keywords()


class ListingInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListingInfo
        fields = ('id', 'listingTitle', 'listing', 'listingKeywords')

    def update(self, instance, data):
        parsed_exp = data.get("listingTitle", instance.listingTitle)
        parsed_exp += " \n "
        parsed_exp += data.get("listing", instance.listing)
        listing_stuff = TextRank4Keyword()
        keywords = get_keywords(listing_stuff, parsed_exp)
        instance.listingKeywords = keywords
        return instance.save

    def create(self, data):
        print("listingifo data: ", data)
        parsed_exp = data.get("listingTitle", None)
        parsed_exp += " \n "
        parsed_exp += data.get("listing", None)
        listing_stuff = TextRank4Keyword()
        keywords = get_keywords(listing_stuff, parsed_exp)
        return ListingInfo.objects.create(listingKeywords=keywords, **data)


class GeneratedResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneratedResume
        fields = ('id', 'first_name', 'last_name', 'email', 'education1',
                  'relevantExperience1', 'relevantExperience2',
                  'relevantExperience3',
                  'relevantJobHistory1', 'relevantJobHistory2',
                  'relevantJobHistory3', 'listingID')


    def create(self, data):
        call_key = data.get("listingID", None)
        print("owner: ", data.get('owner'))

        basic_info = BasicInfo.objects.get(owner=data.get('owner'))
        first_name = basic_info.first_name
        last_name = basic_info.last_name
        email = basic_info.email
        print('self listing data: ', data)
        education = {}
        for ind, val in enumerate(Education.objects.filter(owner=data.get(
                'owner'))):
            tmp = "{}  ({} - {})\n{} in {}" \
                .format(val.school_name, val.start_date, val.end_date,
                        val.degree, val.major)
            print("education objects: ", Education.objects.select_related("owner"))
            education[ind] = tmp
            tmp = ""

        k = ListingInfo.objects.select_related('owner').get(id=call_key)
        wordsk = k.listingKeywords.split(',')
        listing_set = set(wordsk)
        a = BasicInfo.objects.select_related('owner')

        exp_word_count = {}
        for idx, val in enumerate(Experience.objects.filter(owner=data.get(
                'owner'))):
            temp_set = set()
            temp_set = set(val.experience_keywords.split(','))
            listing_words = wordsk
            set_listing = set(listing_words)
            temp_set = temp_set.intersection(set_listing)
            exp_word_count[val.id] = len(temp_set)
            temp_set.clear()

        jh_word_count = {}
        for idx, val in enumerate(JobHistory.objects.filter(owner=data.get(
                'owner'))):
            temp_set = set()
            temp_set = set(val.job_history_keywords.split(','))
            listing_words = wordsk
            set_listing = set(listing_words)
            temp_set = temp_set.intersection(set_listing)
            jh_word_count[val.id] = len(temp_set)
            temp_set.clear()

        exp_key_order = sorted(exp_word_count.items(), key=lambda x: x[1],
                               reverse=True)
        jh_key_order = sorted(jh_word_count.items(), key=lambda x: x[1],
                              reverse=True)

        # TODO: refactor
        generated_exp1 = Experience.objects.select_related('owner').get(
            id=exp_key_order[0][0]).title
        generated_exp1 += '\n - '
        generated_exp1 += Experience.objects.select_related(
            'owner').get(id=exp_key_order[0][0]).description
        relevant_experience1 = generated_exp1

        generated_exp2 = Experience.objects.select_related(
            'owner').get(id=exp_key_order[1][0]).title
        generated_exp2 += '\n - '
        generated_exp2 += Experience.objects.select_related(
            'owner').get(id=exp_key_order[1][0]).description
        relevant_experience2 = generated_exp2

        generated_exp3 = Experience.objects.select_related(
            'owner').get(id=exp_key_order[2][0]).title
        generated_exp3 += '\n - '
        generated_exp3 += Experience.objects.select_related(
            'owner').get(id=exp_key_order[2][0]).description
        relevant_experience3 = generated_exp3

        generated_job_history1 = JobHistory.objects.select_related(
            'owner').get(id=jh_key_order[0][0]).title
        generated_job_history1 += '\n - '
        generated_job_history1 += JobHistory.objects.select_related(
            'owner').get(id=jh_key_order[0][0]).description
        relevant_job_history1 = generated_job_history1

        generated_job_history2 = JobHistory.objects.select_related(
            'owner').get(id=jh_key_order[1][0]).title
        generated_job_history2 += '\n - '
        generated_job_history2 += JobHistory.objects.select_related(
            'owner').get(id=jh_key_order[1][0]).description
        relevant_job_history2 = generated_job_history2

        generated_job_history3 = JobHistory.objects.select_related(
            'owner').get(id=jh_key_order[2][0]).title
        generated_job_history3 += '\n - '
        generated_job_history3 += JobHistory.objects.select_related(
            'owner').get(id=jh_key_order[2][0]).description
        relevant_job_history3 = generated_job_history3

        resume_obj = GeneratedResume.objects.create(
            first_name=first_name,
            last_name=last_name,
            email=email,
            education1=education[0],
            relevantExperience1=relevant_experience1,
            relevantExperience2=relevant_experience2,
            relevantExperience3=relevant_experience3,
            relevantJobHistory1=relevant_job_history1,
            relevantJobHistory2=relevant_job_history2,
            relevantJobHistory3=relevant_job_history3, **data)

        return resume_obj
