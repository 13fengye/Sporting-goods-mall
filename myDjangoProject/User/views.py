# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import json
from pyexpat import model
from urllib import response
from django.http import HttpResponse
from django.views import View
from User import models

class User(View):
    def get(self, request):
        return HttpResponse(json.dumps({'username': 'admin', 'password': '1234'}))
     
    def post(self, request):
        postData = json.loads(json.loads(request.body))
        username = postData['username']
        password = postData['password']
        user = models.User.objects.filter(username=username, password=password)
        if user:
          response = HttpResponse(json.dumps({'isLogin': 'True', 'desciption': '登录成功！'}))
        else:
          response = HttpResponse(json.dumps({'isLogin': 'False', 'desciption': '登录失败，用户名或密码错误！'}))
        return response
