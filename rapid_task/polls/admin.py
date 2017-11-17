from django.contrib import admin
from .models import Question, Feedback, Poll, Choice

# To define the fields to be shown in the admin
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('email', 'name', 'create_date')


class PollAdmin(admin.ModelAdmin):
    list_display = ('choice', 'votes', 'vote_date')

    # Helps pull the data through the foreign key of choice
    def get_choice(self, obj):
        return obj.choice.choice_text


class ChoiceAdmin(admin.ModelAdmin):
    list_display = ('question', 'choice_text')

    # Pulls the data through question
    def get_question(self, obj):
        return obj.question.question_text


class QuestionAdmin(admin.ModelAdmin):
    list_display = ('question_text', 'pub_date')

# Register your models here.
admin.site.register(Choice, ChoiceAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Feedback, FeedbackAdmin)
admin.site.register(Poll, PollAdmin)
