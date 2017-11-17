from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from rapid_task.polls.api import views


urlpatterns = [
    url(r'^feedback/create/$', views.FeedbackCreate.as_view()),
    url(r'^feedback/list/$', views.FeedbackList.as_view()),
    url(r'^poll/create/$', views.PollCreate.as_view()),
    url(r'^question/results/$', views.QuestionList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
