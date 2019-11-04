from rest_framework import serializers
from resume.models import BasicInfo, ExperienceInfo
# Creates the api basically
# resume serializer
from .utils import TextRank4Keyword


class BasicInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = BasicInfo
        fields = '__all__'


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExperienceInfo
        fields = ('experience', 'experienceKeywords')

    def create(self, data):
        print("self: ", self)
        parsedExp = data.get("experience", None)
        resumeStuff = TextRank4Keyword()
        resumeStuff.analyze(parsedExp, window_size=4, lower=False,
                            stopwords=['technology', 'workplace', 'software', 'job', 'google', 'ideas', 'qualifications',
                                       'status', 'world', 'opportunity', 'opportunities', 'products', 'engineering', 'engineers',
                                       'information'])
        keywordList = resumeStuff.get_keywords()

        print(" ????", keywordList)
        experienceObj = ExperienceInfo.objects.create(
            experienceKeywords=keywordList, **data)

        return experienceObj

    # thin views thick serializers, do the data transofrmation here. def create:


# # parsed serializer for 3rd table

# maybe just send three requests at once?
'''
def create(self, validated_data):
    email = validated.data.get("email", None)
    validated.pop("email") 
    # Now you have a clean valid email 
    # You might want to call an external API or modify another table
    # (eg. keep track of number of accounts registered.) or even
    # make changes to the email format.

    # Once you are done, create the instance with the validated data
    return models.YourModel.objects.create(email=email, **validated_data)
    '''
