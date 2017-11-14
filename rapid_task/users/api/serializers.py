from rest_framework import serializers
from rapid_task.users.models import AnonymousUser


class AnonymousUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnonymousUser
        fields = (
            'user_session_id',
            'site_visit',
            'first_visit_date',
            'recent_visit_date',
        )