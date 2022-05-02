from django.urls import path
from Product.views import *

urlpatterns = [
    path('getdiscount/', get_discount),
    path('getbelongings/', get_belongings),
    path('gettype/<str:belong>/', get_type),
    path('gettypeimg/<str:type>/', get_type_img),
    path('getlowestprice/<str:type>/', get_lowest_price),
    path('getfeaturednewproducts/', get_featured_new_products),
    path('getclassifiedgoods/<str:belonging>/<str:type>/', get_classified_goods)
]
