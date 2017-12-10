from django.db.models.signals import post_save
from django.dispatch import receiver

from ..profiles.models import Profile

from .models import Account

# This signal looks at the Account model and if it was created then it will create a Profile model with it.
@receiver(post_save, sender=Account)
def create_related_profile(sender, instance, created, *args, **kwargs):
    # Notice that we're checking for `created` here. We only want to do this
    # the first time the `User` instance is created. If the save that caused
    # this signal to be run was an update action, we know the user already
    # has a profile.
    if instance and created:
        instance.profile = Profile.objects.create(user=instance)
