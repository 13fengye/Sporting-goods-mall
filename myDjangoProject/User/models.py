# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# 用户表
class User(models.Model):
    username = models.CharField(max_length=32, unique=True)
    password = models.CharField(max_length=32)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=32, unique=True)
    
    class meta:
        db_table = 'user'

class UserInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.DO_NOTHING)
    nickname = models.CharField(max_length=32)
    birthday = models.DateField()
    address = models.CharField(max_length=32)
    headImg = models.ImageField(upload_to='headImg')

    class meta:
        db_table = 'userinfo'