"""
The serializers.py depends on these models. Be sure to reflect the same changes on serializers.py
"""

from django.db import models
from rapid_task.users.models import AnonymousUser

# Create your models here.

# class VisitingUser(models.Model):
    # Record all the session activities of a user.


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published', auto_now=True)

    # To show up in the fields
    def __str__(self):
        return self.question_text


class Poll(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, blank=True)
    choice_text = models.CharField(max_length=200)
    votes = models.BooleanField(default=0)
    user_session_id = models.ForeignKey(AnonymousUser, on_delete=models.CASCADE)
    vote_date = models.DateTimeField('vote date', auto_now_add=True)


class Feedback(models.Model):
    email = models.EmailField(max_length=200)
    name = models.CharField(max_length=100)
    content = models.CharField(max_length=1000)
    create_date = models.DateTimeField(auto_now_add=True)
