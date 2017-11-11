'''
This is how we can select a certain fields that we wish to alter:
class PollsSerializer(serializers.Serializer):
    question = serializers.PrimaryKeyRelatedField(read_only=True)
    choice_text = serializers.CharField(max_length=200)
    votes = serializers.IntegerField(default=0)
    ip_user = serializers.CharField(max_length=50)
    vote_date = serializers.DateTimeField('vote date')
'''

from rest_framework import serializers
from rapid_task.polls.models import Poll, Question, Feedback

'''
The following code handles the serialization of foreign-key relationships by using the REST framework 
"Nested relationships"
'''


class PollSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poll
        fields = (
            'question',
            'choice_text',
            'votes',
            'ip_user',
            'vote_date',
        )
    # Do not need to have a .save() or create as it is handled in QuestionSerializer


class QuestionSerializer(serializers.ModelSerializer):
    # The many=True flag represents the to-many relationship. We are defining the relationships.
    poll = PollSerializer(many=True)

    # The Meta is a shortcut to help list the models and it's fields
    class Meta:
        model = Question
        fields = ('question_text', 'pub_date', 'poll')

    # This create query supports write-options to a relational nested serializer field.
    # validated_data is data that has correctly changed from json to python native datatypes.
    def create(self, validated_data):
        # .pop() is a python method of list objects. This removes the 'poll' data from list and returns it.
        poll_data = validated_data.pop('poll')
        # Now saving the question to the database.
        # .objects.create is the same as .save() query
        question = Question.objects.create(**validated_data)
        for poll_data in question:
            # This pairs the saved question to the many poll_data inputs
            Poll.objects.create(question=question, **poll_data)
        return question


'''
Regular models
'''


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = (
            'email',
            'name',
            'content',
            'create_date'
        )
