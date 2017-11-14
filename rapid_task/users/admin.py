from django.contrib import admin
from .models import AnonymousUser

# What to display on the admin.
class AnonymousUserAdmin(admin.ModelAdmin):
    list_display = (
        'user_session_id',
        'site_visit',
        'first_visit_date',
        'recent_visit_date',
    )


# Register your models here.
admin.site.register(AnonymousUser, AnonymousUserAdmin)