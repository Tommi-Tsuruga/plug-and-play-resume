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


def get_keywords(resume_stuff, parsed):
    resume_stuff.analyze(parsed, window_size=4, lower=False,
                         stopwords=stopwords)
    return resume_stuff.get_keywords()


class BasicInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = BasicInfo
        fields = ('first_name', 'last_name', 'email')


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ('id', 'title', 'description', 'experience_keywords')

    def get_keyword_items(self, data):
        parsed_exp = data.get("title", None) + " \n "
        parsed_exp += data.get("description", None) + " \n "
        return parsed_exp

    def update(self, instance, data):
        instance.title = data.get('title')
        instance.description = data.get("description")
        parsed_exp = self.get_keyword_items(data)
        listing_stuff = TextRank4Keyword()
        instance.experience_keywords = get_keywords(listing_stuff, parsed_exp)
        instance.save()
        return instance

    def create(self, data):
        parsed_exp = self.get_keyword_items(data)
        print(parsed_exp)
        resume_stuff = TextRank4Keyword()
        keywords = get_keywords(resume_stuff, parsed_exp)
        return Experience.objects.create(experience_keywords=keywords, **data)


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

    def get_keyword_items(self, data):
        parsed_exp = data.get("title", None) + " \n "
        parsed_exp += data.get("company", None) + " \n "
        parsed_exp += data.get("description", None) + " \n "
        return parsed_exp

    def create(self, data):
        parsed_jh = self.get_keyword_items(data)
        resume_stuff = TextRank4Keyword()
        keywords = get_keywords(resume_stuff, parsed_jh)
        return JobHistory.objects.create(job_history_keywords=keywords, **data)
