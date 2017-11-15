from django.db import models
from django.contrib.sessions.models import Session

# Create your models here.
class RegisteredUser(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)

# This class is to track the un-registered users or visitors.
class AnonymousUser(models.Model):
    user_session_id = models.ForeignKey(Session, editable=False, on_delete=models.CASCADE)
    site_visit = models.IntegerField(default=0)
    first_visit_date = models.DateTimeField(auto_now_add=True)
    recent_visit_date = models.DateTimeField(auto_now=True)
    # registration_id = models.ForeignKey(RegisteredUser, on_delete=models.CASCADE, blank=True)

    # Do a query here to save the session id.