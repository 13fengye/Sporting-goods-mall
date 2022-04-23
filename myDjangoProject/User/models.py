# -*- coding: utf-8 -*-
from django.db import models

# 用户表
class User(models.Model):
    username = models.CharField(max_length=32, unique=True, primary_key=True)
    password = models.CharField(max_length=32)
    email = models.EmailField(unique=True)
    
    class meta:
        verbose_name = '用户信息'
        verbose_name_plural = '用户信息'
