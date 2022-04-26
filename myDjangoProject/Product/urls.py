from django.conf.urls import url
from Product.views import get_discount

urlpatterns = [
    url(r'getdiscount/', get_discount),
]
