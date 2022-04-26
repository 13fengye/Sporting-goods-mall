from django.conf.urls import url
from django.contrib import admin
from User.views import User

urlpatterns = [
    url(r'user/', User.as_view()),
]