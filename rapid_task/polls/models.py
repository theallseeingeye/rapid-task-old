'''
The serializers.py depends on these models. Be sure to reflect the same changes on serializers.py
'''

from django.db import models

# Create your models here.


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')


class Poll(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    ip_user = models.CharField(max_length=50)
    vote_date = models.DateTimeField('vote date')


class Feedback(models.Model):
    email = models.EmailField(max_length=200)
    name = models.CharField(max_length=100)
    content = models.CharField(max_length=1000)
    create_date = models.DateTimeField()
