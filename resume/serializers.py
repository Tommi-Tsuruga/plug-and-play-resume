from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework import serializers

from listing.serializers import stopwords
from .models import Experience, Education, BasicInfo, JobHistory
from .utils import TextRank4Keyword


@receiver(post_save, sender=get_user_model())
def create_user_basic_info(sender, instance, created, **kwargs):
    if created:
        BasicInfo.objects.create(owner=instance)


class BasicInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = BasicInfo
        fields = ('first_name', 'last_name', 'email')


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ('id', 'title', 'description', 'experience_keywords')

    def update(self, instance, data):
        instance.title = data.get('title')
        instance.description = data.get("description")
        instance.save()
        parsed_exp = data.get("title") + " \n "
        parsed_exp += data.get("company") + " \n "
        parsed_exp += data.get("description") + " \n "
        listing_stuff = TextRank4Keyword()
        listing_stuff.analyze(parsed_exp, window_size=4, lower=False,
                              stopwords=stopwords)
        keyword_list = listing_stuff.get_keywords()
        instance.experience_keywords = keyword_list
        instance.save()
        return instance

    def create(self, data):
        parsed_exp = data.get("title", None) + " \n "
        parsed_exp += data.get("description", None) + " \n "
        resume_stuff = TextRank4Keyword()
        resume_stuff.analyze(parsed_exp, window_size=4, lower=False,
                             stopwords=stopwords)
        keyword_list = resume_stuff.get_keywords()
        experience_obj = Experience.objects.create(
            experience_keywords=keyword_list, **data)
        return experience_obj


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ('id', 'school_name', 'degree', 'major', 'start_date',
                  'end_date')


class JobHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = JobHistory
        fields = ('id', 'title', 'description', 'company',
                  'start_date', 'end_date', 'job_history_keywords')

    def create(self, data):
        parsed_exp = data.get("title", None) + " \n "
        parsed_exp += data.get("company", None) + " \n "
        parsed_exp += data.get("description", None) + " \n "
        resume_stuff = TextRank4Keyword()
        resume_stuff.analyze(parsed_exp, window_size=4, lower=False,
                             stopwords=stopwords)
        keyword_list = resume_stuff.get_keywords()
        job_history_obj = JobHistory.objects.create(
            job_history_keywords=keyword_list, **data)
        return job_history_obj
