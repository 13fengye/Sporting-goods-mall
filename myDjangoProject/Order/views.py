from datetime import timezone
import faulthandler
import json
import re
from unicodedata import name
from django.http import HttpResponse
from Order.models import *
from User.models import *
from Product.models import *

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


def delete_product(request):
    postData = json.loads(request.body)
    productinfo_id = postData['productinfo_id']
    productinfo = CartInfos.objects.filter(commodityInfos_id=productinfo_id)
    if productinfo:
        productinfo.delete()
        return HttpResponse(json.dumps({'status': 200, 'message': '删除商品成功'}))

def create_order(request):  # sourcery skip: use-named-expression
    postData = json.loads(request.body)
    username = postData['username']
    productinfo_amounts = postData['productinfo_id'] + '-' + postData['amount']
    price = postData['price']
    remark = postData['remark']
    name = postData['name']
    phone = postData['phone']
    address = postData['address']
    productinfo = ProductInfos.objects.get(id = postData['productinfo_id'])
    productno = ProductNo.objects.get(product_no = productinfo.product_no_id)
    if productinfo.stock >= int(postData['amount']) and OrderInfos.objects.create(price=price, productinfo_amounts=productinfo_amounts, user_id=username, remark=remark):
        productinfo.stock = productinfo.stock - int(postData['amount'])
        productno.sold = productno.sold + int(postData['amount'])
        if productinfo.stock <= 0:
            productinfo.onsale = False
        productinfo.save()
        productno.save()
    else:
        return HttpResponse(json.dumps({'status': 400, 'message': '库存不足或订单创建失败!'}))
    userAddress = UserAddress.objects.filter(username = username)
    if userAddress:
        userAddress.update(name = name, phone = phone, address = address)
    else:
        UserAddress.objects.create(username = username, name = name, phone = phone, address = address)
    return HttpResponse(json.dumps({'status': 200, 'message': '创建订单成功'}))

def create_orders(request):
    postData = json.loads(request.body)
    username = postData['username']
    # totalPrice = postData['totalPrice']
    remark = postData['remark']
    name = postData['name']
    phone = postData['phone']
    address = postData['address']
    userAddress = UserAddress.objects.filter(username = username)
    if userAddress:
        userAddress.update(name = name, phone = phone, address = address)
    else:
        UserAddress.objects.create(username = username, name = name, phone = phone, address = address)
    cartList = CartInfos.objects.filter(user_id = username)
    if not cartList:
        return HttpResponse(json.dumps({'status': 400, 'message': '购物车为空!'}))
    productinfo_amounts = ''
    price = 0
    for cart in cartList:
        productinfo = ProductInfos.objects.get(id = cart.commodityInfos_id)
        productno = ProductNo.objects.get(product_no = productinfo.product_no_id)
        if productinfo.stock < cart.quantity:
            return HttpResponse(json.dumps({'status': 400, 'message': '库存不足!'}))
        productinfo_amounts = productinfo_amounts + str(cart.commodityInfos_id) + '-' + str(cart.quantity) + ','
        price = price + cart.quantity * cart.price
        productinfo.stock = productinfo.stock - cart.quantity
        productno.sold = productno.sold + cart.quantity
        if productinfo.stock <= 0:
            productinfo.onsale = False
        productinfo.save()
        productno.save()
    OrderInfos.objects.create(price=price, productinfo_amounts=productinfo_amounts, user_id=username, remark=remark)
    cartList.delete()
    return HttpResponse(json.dumps({'status': 200, 'message': '创建订单成功'}))


def get_orders(request):
    postData = json.loads(request.body)
    username = postData['username']
    ordersList = list(OrderInfos.objects.filter(user_id = username).values())
    if ordersList:
        for order in ordersList:
            order['created'] = str(order['created'])
        return HttpResponse(json.dumps({'status': 200, 'message': '获取订单成功', 'ordersList': ordersList}))
    else:
        return HttpResponse(json.dumps({'status': 400, 'message': '暂无订单'}))


def delete_all_orderinfos(request):
    postData = json.loads(request.body)
    username = postData['username']
    OrderInfos.objects.filter(user_id=username).delete()
    return HttpResponse(json.dumps({'status': 200, 'message': '删除订单成功'}))