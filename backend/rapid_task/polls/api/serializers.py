from rest_framework import serializers
from rapid_task.polls.models import Question, Feedback, Choice


"""
These are nested relationships. Able to create editable foreign keys and present them.
"""


# class PollSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Poll
#         fields = (
#             'choice',
#             'votes',
#             'vote_date',
#         )


# class ChoiceSerializer(serializers.ModelSerializer):
#     polls = PollSerializer(many=True)
#
#     class Meta:
#         model = Choice
#         fields = ('choice_text', 'polls')

#
# class QuestionSerializer(serializers.ModelSerializer):
#     # polls = PollSerializer(many=True)
#     choice = ChoiceSerializer(many=True)
#
#     # The Meta is a shortcut to help list the models and it's fields
#     class Meta:
#         model = Question
#         fields = ('question_text', 'pub_date', 'uuid', 'choice')
#

"""
These are regular simple serializers with no relationships
"""

#
# class FeedbackSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Feedback
#         fields = (
#             'email',
#             'name',
#             'content',
#             'create_date'
#         )
