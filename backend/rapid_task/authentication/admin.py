from django.contrib import admin
from .models import Account


# To define the fields to be shown in the admin
class AccountAdmin(admin.ModelAdmin):
    list_display = ('email', 'username', 'is_active', 'date_created', 'id', 'uuid')


# Register your models here.
admin.site.register(Account, AccountAdmin)
