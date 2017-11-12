"""
The serializers.py depends on these models. Be sure to reflect the same changes on serializers.py
"""

from django.db import models

# Create your models here.

# class VisitingUser(models.Model):
    # Record all the session activities of a user.


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published', auto_now=True)


class Poll(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    non_user_id = models.CharField(max_length=50)
    vote_date = models.DateTimeField('vote date', auto_now_add=True)


class Feedback(models.Model):
    email = models.EmailField(max_length=200)
    name = models.CharField(max_length=100)
    content = models.CharField(max_length=1000)
    create_date = models.DateTimeField(auto_now_add=True)
