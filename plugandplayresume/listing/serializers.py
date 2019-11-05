from rest_framework import serializers
from listing.models import ListingInfo
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
        # print("self: ", self)
        parsedExp = data.get("listing", None)
        parsedExp += " \n "
        parsedExp += data.get("listingTitle", None)
        print("exp: \n", parsedExp, "\ntype: ", type(parsedExp))
        listingStuff = TextRank4Keyword()
        listingStuff.analyze(parsedExp, window_size=4, lower=False,
                             stopwords=['technology', 'workplace', 'software', 'job', 'google', 'ideas', 'qualifications',
                                        'status', 'world', 'opportunity', 'opportunities', 'products', 'engineering', 'engineers',
                                        'information', 'busy', 'product', 'production', 'business', 'people', 'problem'])
        keywordList = listingStuff.get_keywords()

        print(" ????", keywordList)
        listingObj = ListingInfo.objects.create(
            listingKeywords=keywordList, **data)

        return listingObj
