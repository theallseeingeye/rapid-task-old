"""website URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.conf.urls import url, include


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
api_urls = [
    url(r'^', include('rapid_task.polls.api.urls')),
    url(r'^users/', include('rapid_task.users.api.urls', namespace='users')),
]


urlpatterns = [
    # url patterns with honey-pot admin page
    # url(r'^admin/', include('admin_honeypot.urls', namespace='admin_honeypot')),
    # url(r'^secret/', include(admin.site.urls)),
    url(r'^admin/', admin.site.urls),
    # REST
    url(r'^', include(api_urls)),
]

