from rapid_task.polls.models import Question, Poll, Feedback
from rapid_task.polls.api.serializers import PollSerializer, QuestionSerializer, FeedbackSerializer
from rest_framework.permissions import AllowAny
from rest_framework import generics


class FeedbackList(generics.ListCreateAPIView):
    """
    Shows the list of all the feedbacks that were received
    """
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer



class FeedbackCreate(generics.CreateAPIView):
    """
    Post:
    Creates a new entry of feedback
    """
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    permission_classes = (AllowAny,)


class QuestionList(generics.ListCreateAPIView):
    """
    Get:
    Returns a list of all the poll answers to each question

    Post:
    Create a new question
    *Nested relationship created* Create a new poll result
    """
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    lookup_field = 'uuid'

    def create(self, validated_data):
        # Pulls the "polls" data from the fields and deletes from the list- Then validates the data
        polls_data = validated_data.pop('polls')
        # Pulls and validates the data and creates it
        questions = Question.objects.create(**validated_data)
        # Saves the Question before saving the poll data to the question
        for poll_data in polls_data:
            Poll.objects.create(questions=questions, **poll_data)
        return questions


class PollCreate(generics.CreateAPIView):
    """
    Post:
    Creates the new poll result
    """
    queryset = Poll.objects.all()
    serializer_class = PollSerializer
    permission_classes = (AllowAny,)

    # # Session id tracking and vote status
    # def post_vote(request, vote):
    #     # Checks to see if they haven't voted.
    #     if request.session.get('votes', False):
    #         return HttpResponse("You've already voted.")
    #     v = Poll.votes(vote=vote)
    #     v.save()
    #     # Saves in session id that they have already voted.
    #     request.session['votes'] = True
    #     return HttpResponse('Thanks for your vote!')


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
