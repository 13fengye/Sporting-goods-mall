# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import json
import time
from django.http import HttpResponse
from django.views import View
from User import models
import hashlib
from django.conf import settings
import jwt


def set_default(obj):
    if isinstance(obj, set):
      return list(obj)
    raise TypeError



# md5加密
def md5(password):
    md5_obj = hashlib.md5()
    md5_obj.update(password.encode('utf-8'))
    return md5_obj.hexdigest()

# sha1加密


def sha1(password):
    sha1_obj = hashlib.sha1()
    sha1_obj.update(password.encode('utf-8'))
    return sha1_obj.hexdigest()
        

class User(View):
    def get(self, request):
        return HttpResponse(json.dumps({'username': 'admin', 'password': '1234'}))
     
    def post(self, request):

        if request.method != 'POST':
          return HttpResponse(json.dumps({'status': '400', 'message': '请求方法错误'}))
        postData = json.loads(request.body)
        username = postData['username']
        password = postData['password']
        email = postData['email']
        if email == '':
            hasThisUser = models.User.objects.filter(username=username) | models.User.objects.filter(email=username)
            if hasThisUser:
                user = models.User.objects.filter(username=username, password=md5(password)) | models.User.objects.filter(email=username, password=md5(password))
                if user:
                  token = make_token(list(user)[0].email)
                  response = HttpResponse(json.dumps({'message': '登录成功', 'status': 200, 'token': token}))
                  return response
                else:
                  response = HttpResponse(json.dumps({'message': '用户名或密码错误', 'status': 400}))
                return response
            else:
                return HttpResponse(json.dumps({'status': 301, 'message': '用户名或邮箱未注册'}))

            
        else:
            user = models.User.objects.filter(username=username) | models.User.objects.filter(email=email) | models.User.objects.filter(username=email)
            if user:
                response = HttpResponse(json.dumps({'message': '用户名或邮箱注册已存在', 'status': 401}))
            else:
                token = make_token(username)
                models.User.objects.create(username=username, password=md5(password), email=email)
                response = HttpResponse(json.dumps({'message': '注册成功', 'status': 200, 'token': token}))
            return response


# 记录会话状态
def make_token(username, expire=3600*24):

    key = settings.JWT_TOKEN_KEY
    now_t = time.time()
    payload_data = {'username': username, 'exp': now_t + expire}
    payload = jwt.encode(payload_data, key, algorithm='HS256')
    if type(payload) == str:
        return payload
    elif type(payload) == bytes:
        return payload.decode()

def get_billing_info(request):
    postData = json.loads(request.body)
    username = postData['username']
    billing_info = list(models.UserAddress.objects.filter(username=username).values())
    print(billing_info)
    if not billing_info:
        return HttpResponse(json.dumps({'status': 301, 'message': '未添加收货地址'}))
    else:
        return HttpResponse(json.dumps({'status': 200, 'message': '获取成功', 'billing_info': billing_info}))

def update_billinginfo(request):
    postData = json.loads(request.body)
    username = postData['username']
    name = postData['name']
    phone = postData['phone']
    address = postData['address']
    billing_info = models.UserAddress.objects.filter(username=username)
    if billing_info:
        billing_info.update(name=name, phone=phone, address=address)
        return HttpResponse(json.dumps({'status': 200, 'message': '更新成功'}))
    else:
        models.UserAddress.objects.create(username=username, name=name, phone=phone, address=address)
        return HttpResponse(json.dumps({'status': 200, 'message': '添加成功'}))

def change_password(request):
    postData = json.loads(request.body)
    username = postData['username']
    old_password = postData['currentPassword']
    new_password = postData['newPassword']
    user = models.User.objects.filter(username=username, password=md5(old_password)) | models.User.objects.filter(email=username, password=md5(old_password))
    if user:
        user.update(password=md5(new_password))
        return HttpResponse(json.dumps({'status': 200, 'message': '修改成功'}))
    else:
        return HttpResponse(json.dumps({'status': 301, 'message': '原密码错误'}))