from rest_framework import serializers
from .models import Experience, Education, BasicInfo
from .utils import TextRank4Keyword


class BasicInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = BasicInfo
        fields = ('id', 'first_name', 'last_name', 'email', 'created_at')


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ('id', 'title', 'description', 'company',
                  'start_date', 'end_date', 'experience_keywords')

    def create(self, data):
        parsed_exp = data.get("title", None) + " \n "
        parsed_exp += data.get("company", None) + " \n "
        parsed_exp += data.get("description", None) + " \n "
        resume_stuff = TextRank4Keyword()
        resume_stuff.analyze(parsed_exp, window_size=4, lower=False,
                             stopwords=['technology', 'workplace',
                                        'software', 'job', 'google', 'ideas',
                                        'qualifications',
                                        'status', 'world', 'opportunity',
                                        'opportunities', 'products',
                                        'engineering', 'engineers',
                                        'information'])
        keyword_list = resume_stuff.get_keywords()

        experience_obj = Experience.objects.create(
            experience_keywords=keyword_list, **data)

        return experience_obj


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ('id', 'school_name', 'start_date', 'end_date')

