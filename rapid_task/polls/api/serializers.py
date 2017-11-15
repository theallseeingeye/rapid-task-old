from rest_framework import serializers
from rapid_task.polls.models import Poll, Question, Feedback
from rapid_task.users.models import AnonymousUser
from django.conf import settings

# class QuestionSerializer(serializers.ModelSerializer):
#     # The Meta is a shortcut to help list the models and it's fields
#     class Meta:
#         model = Question
#         fields = ('question_text', 'pub_date', 'uuid')

"""
These are nested relationships. Able to create editable foreign keys and present them.
"""
class PollSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poll
        fields = (
            'question',
            'choice_text',
            'votes',
            'vote_date',
            'user_session_id',
        )


class QuestionSerializer(serializers.ModelSerializer):
    polls = PollSerializer(many=True)
    # The Meta is a shortcut to help list the models and it's fields
    class Meta:
        model = Question
        fields = ('question_text', 'pub_date','uuid', 'polls')


"""
These are regular simple serializers with no relationships
"""
class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = (
            'email',
            'name',
            'content',
            'create_date'
        )
