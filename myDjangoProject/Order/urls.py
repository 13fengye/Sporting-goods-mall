from django.urls import path
from Order.views import *

urlpatterns = [
    path('addtocart/', add_to_cart),
    path('getcart/', get_cart),
    path('clearCart/', clear_cart),
    path('deleteproduct/', delete_product),
    path('createorder/', create_order),
    path('createorders/', create_orders),
    path('getorders/', get_orders),
    path('deleteallorderinfos/', delete_all_orderinfos),
]
