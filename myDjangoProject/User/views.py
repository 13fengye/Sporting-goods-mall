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
                  token = make_token(username)
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
    return jwt.encode(payload_data, key, algorithm='HS256')

    
