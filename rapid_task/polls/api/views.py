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


# class PollDetail(APIView):
#     """
#     To create, update and save the poll details
#     """
#     def get_object(self, pk):
#         try:
#             return Question.objects.get(pk=pk)
#         except Question.DoesNotExist:
#             raise Http404
#
#     def get(self, request, pk, format=None):
#         question = self.get_object(pk)
#         serializer = QuestionSerializer(question)
#         return Response(serializer.data)

#     def put(self, request, pk, format=None):
#         question = self.get_object(pk)
#         serializer = QuestionSerializer(question, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     def delete(self, request, pk, format=None):
#         question = self.get_object(pk)
#         question.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

class PollDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer