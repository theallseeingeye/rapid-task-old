from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from rapid_task.polls.api import views

urlpatterns = [
    url(r'^feedback/$', views.FeedbackList.as_view()),
    url(r'^poll/(?P<pk>[0-9]+)/$', views.PollDetail.as_view()),
    url(r'^poll/results/$', views.PollList.as_view()),
    url(r'^question/$', views.QuestionList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)