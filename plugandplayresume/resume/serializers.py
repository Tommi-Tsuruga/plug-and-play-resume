from rest_framework import serializers
from resume.models import BasicInfo, ExperienceInfo
# Creates the api basically
# resume serializer


class BasicInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = BasicInfo
        fields = '__all__'


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExperienceInfo
        fields = ('experience', 'experienceKeywords')

    def create(self, data):
        parsedExp = data.get("experience", None).upper()
        print("data: ", data, type(data))
        print(" ????", ExperienceInfo.experienceKeywords)
        print("?", parsedExp, type(parsedExp))
        experienceObj = ExperienceInfo.objects.create(
            experience=data['experience'], experienceKeywords=parsedExp)
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
