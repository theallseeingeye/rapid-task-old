"""
The serializers.py depends on these models. Be sure to reflect the same changes on serializers.py
"""
import uuid
from django.db import models
from django.contrib.sessions.models import Session


class Question(models.Model):
    uuid = models.UUIDField(db_index=True, default=uuid.uuid4, editable=False)
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published', auto_now=True)

    # To show up in the fields
    def __str__(self):
        return self.question_text


# class Poll(models.Model):
#     question = models.ForeignKey(Question, related_name='polls', on_delete=models.CASCADE)
#     choice_text = models.CharField(max_length=200)
#     votes = models.BooleanField(default=0)
#     # I need to set the session uuid to the anonymous user session and record it.
#     user_session_id = models.ForeignKey(Session, on_delete=models.CASCADE, blank=True)
#     vote_date = models.DateTimeField('vote date', auto_now_add=True)
#
#     # To show up in the fields
#     def __str__(self):
#         return self.choice_text


class Choice(models.Model):
    pass
    # This is where I am debating to nest in another table between question-choices-votes
    question = models.ForeignKey(Question, related_name='choice', on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)

    def __str__(self):
        return self.choice_text


class Poll(models.Model):
    choice = models.ForeignKey(Choice, related_name='polls', on_delete=models.CASCADE)
    votes = models.BooleanField(default=0)
    # I need to set the session uuid to the anonymous user session and record it.
    #user_session_id = models.ForeignKey(Session, on_delete=models.CASCADE, blank=True)
    vote_date = models.DateTimeField('vote date', auto_now_add=True)


class Feedback(models.Model):
    email = models.EmailField(max_length=200)
    name = models.CharField(max_length=100)
    content = models.TextField(max_length=1000)
    create_date = models.DateTimeField(auto_now_add=True, editable=False)

