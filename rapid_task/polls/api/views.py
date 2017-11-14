from rapid_task.polls.models import Question, Poll, Feedback
from rapid_task.polls.api.serializers import PollSerializer, QuestionSerializer, FeedbackSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics


class FeedbackList(generics.ListCreateAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer


class QuestionList(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class PollList(generics.ListCreateAPIView):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer


class PollDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer




    # This create query supports write-options to a relational nested serializer field.
    # validated_data is data that has correctly changed from json to python native datatypes.
    # def create(self, validated_data):
    #     # .pop() is a python method of list objects. This removes the 'poll' data from list and returns it.
    #     polls_data = validated_data.pop('poll')
    #     # Now saving the question to the database.
    #     # .objects.create is the same as .save() query
    #     question = Question.objects.create(**validated_data)
    #     for poll_data in polls_data:
    #         # This pairs the saved question to the many poll_data inputs
    #         Poll.objects.create(question=question, **poll_data)
    #     return question

# class PollDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Question.objects.all()
#     serializer_class = QuestionSerializer