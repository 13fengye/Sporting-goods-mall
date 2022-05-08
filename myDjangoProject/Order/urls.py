from django.urls import path
from Order.views import *

urlpatterns = [
    path('addtocart/', add_to_cart),
    path('getcart/', get_cart),
    path('clearCart/', clear_cart)
]
