from django.urls import path
from Product.views import get_discount, get_belongings, get_type

urlpatterns = [
    path('getdiscount/', get_discount),
    path('getbelongings/', get_belongings),
    path('gettype/<str:type>/', get_type),
]
