from rapid_task.users.models import AnonymousUser
from rapid_task.users.api.serializers import AnonymousUserSerializer
from rest_framework import generics

class AnonymousList(generics.ListCreateAPIView):
    queryset = AnonymousUser.objects.all()
    serializer_class = AnonymousUserSerializer

