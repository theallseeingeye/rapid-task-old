from django.contrib import admin
from .models import Subscriber


class SubscriberAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subscribed', 'date_created')


admin.site.register(Subscriber, SubscriberAdmin)
