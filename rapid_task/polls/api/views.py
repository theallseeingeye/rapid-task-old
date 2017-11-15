from rapid_task.polls.models import Question, Poll, Feedback
from rapid_task.polls.api.serializers import PollSerializer, QuestionSerializer, FeedbackSerializer
from rest_framework.permissions import AllowAny
from rest_framework import generics
from django.contrib.sessions.models import Session

# Shows the list of feedbacks
class FeedbackList(generics.ListCreateAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer

# Allow anyone to write the feedback
class FeedbackCreate(generics.CreateAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    permission_classes = (AllowAny,)

# Produces a list of created questions
class QuestionList(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    lookup_field = 'uuid'

    def create(self, validated_data):
        polls_data = validated_data.pop('polls')
        questions = Question.objects.create(**validated_data)
        for poll_data in polls_data:
            Poll.objects.create(questions=questions, **poll_data)
        return questions


class PollCreate(generics.CreateAPIView):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer
    permission_classes = (AllowAny,)

    # Session id tracking and vote status
    def post_vote(request, vote):
        # Checks to see if they haven't voted.
        if request.session.get('votes', False):
            return HttpResponse("You've already voted.")
        v = Poll.votes(vote=vote)
        v.save()
        # Saves in session id that they have already voted.
        request.session['votes'] = True
        return HttpResponse('Thanks for your vote!')



# # Shows the list of polls that have been submitted
# class PollList(generics.ListCreateAPIView):
#     queryset = Poll.objects.all()
#     serializer_class = PollSerializer

# # PK look up function for each poll
# class PollDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Poll.objects.all()
#     serializer_class = PollSerializer
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