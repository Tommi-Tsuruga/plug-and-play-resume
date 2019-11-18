from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework import serializers

from listing.serializers import stopwords
from .models import Experience, Education, BasicInfo
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
        fields = ('id', 'title', 'description', 'company',
                  'start_date', 'end_date', 'experience_keywords')

    def update(self, instance, data):
        data.pop('id')
        for key, value in data.items():
            setattr(instance, key, value)
        data.pop('start_date')
        data.pop('end_date')
        parsed_exp = {}
        for value in data.items():
            parsed_exp += value + " \n "
        listing_stuff = TextRank4Keyword()
        listing_stuff.analyze(parsed_exp, window_size=4, lower=False,
                              stopwords=stopwords)
        keyword_list = listing_stuff.get_keywords()
        instance.experience_keywords = keyword_list
        instance.save()
        return instance

    def create(self, data):
        parsed_exp = data.get("title", None) + " \n "
        parsed_exp += data.get("company", None) + " \n "
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
