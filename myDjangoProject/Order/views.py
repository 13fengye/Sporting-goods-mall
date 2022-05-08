import json
from unicodedata import name

from django.http import HttpResponse
from Order.models import *

# Create your views here.
def add_to_cart(request):
    postData = json.loads(request.body)
    username = postData['username']
    productinfo_id = postData['productinfo_id']
    quantity = postData['quantity']
    name = postData['name']
    price = postData['price']
    img = postData['img']
    cart = CartInfos.objects.filter(commodityInfos_id = productinfo_id, user_id = username)
    if cart:
        amount = cart[0].quantity
        cart.update(quantity = amount + quantity)
    else:
        CartInfos.objects.create(quantity = quantity, commodityInfos_id = productinfo_id, user_id = username, name = name, price = price, img = img)
    return HttpResponse(json.dumps({'status': 200, 'message': '添加购物车成功'}))

def get_cart(request):
    postData = json.loads(request.body)
    username = postData['username']
    cart_list = list(CartInfos.objects.filter(user_id = username).values())
    return HttpResponse(json.dumps({'status': 200, 'message': '获取购物车成功', 'cartList': cart_list}))

def clear_cart(request):
    postData = json.loads(request.body)
    username = postData['username']
    CartInfos.objects.filter(user_id = username).delete()
    return HttpResponse(json.dumps({'status': 200, 'message': '清空购物车成功'}))