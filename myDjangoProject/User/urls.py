from django.conf.urls import url
from django.urls import path
from User.views import User
from User.views import *

urlpatterns = [
    path('user/', User.as_view()),
    path('getbillinginfo/', get_billing_info),
    path('updatebillinginfo/', update_billinginfo),
    path('changepassword/', change_password),
]