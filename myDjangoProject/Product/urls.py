from django.urls import path
from Product.views import *

urlpatterns = [
    path('getdiscount/', get_discount),
    path('getbelongings/', get_belongings),
    path('getalltypes/', get_all_types),
    path('gettype/<str:belong>/', get_type),
    path('gettypeimg/<str:type>/', get_type_img),
    path('getlowestprice/<str:type>/', get_lowest_price),
    path('getfeaturednewproducts/', get_featured_new_products),
    path('getclassifiedgoods/<str:belonging>/<str:type>/', get_classified_goods),
    path('getallproducts/<str:belonging>/<str:type>/', get_all_products),
    path('getproduct/<str:product_no>/', get_product),
]
