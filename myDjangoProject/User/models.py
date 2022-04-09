# -*- coding: utf-8 -*-
from django.db import models

# 用户表
class User(models.Model):
    username = models.CharField(max_length=32, unique=True, primary_key=True)
    password = models.CharField(max_length=32)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=32, unique=True)
    
    class meta:
        db_table = 'user'