from django.db import models
from django.conf import settings
from ..core.models import TimeStampedModel

#
# class Profile(TimeStampedModel):
#     # The settings.AUTH_USER_MODEL links to the custom user model built under the authentication.accounts
#     user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
#     first_name = models.CharField(max_length=100)
#     last_name = models.CharField(max_length=100)
#
#     def __str__(self):
#         # Probably want to change this to first and last name
#         return self.user.username
