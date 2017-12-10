from django.contrib import admin
from .models import Question, Feedback, Choice


# To define the fields to be shown in the admin
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('email', 'name', 'date_created')


class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 3


class QuestionAdmin(admin.ModelAdmin):
    list_display = ('question_text', 'date_created', 'date_updated')
    fieldsets = [
        (None, {'fields': ['question_text']}),
    ]
    inlines = [ChoiceInline]


admin.site.register(Question, QuestionAdmin)
admin.site.register(Feedback, FeedbackAdmin)
