# -*- coding: utf-8 -*-
from django.db import models

# 用户表
class User(models.Model):
    username = models.CharField('用户名', max_length=32, unique=True, primary_key=True)
    password = models.CharField('密码', max_length=32)
    email = models.EmailField('邮箱', unique=True)
    
    class meta:
        verbose_name = '用户信息'
        verbose_name_plural = '用户信息'

# 用户地址信息
class UserAddress(models.Model):
    username = models.CharField('用户名', max_length=32)
    name = models.CharField('姓名', max_length=32)
    address = models.CharField('地址', max_length=128)
    phone = models.CharField('手机号码', max_length=32)

    class meta:
        verbose_name = '用户地址'
        verbose_name_plural = '用户地址'

# 用户收藏
class UserCollection(models.Model):
    username = models.CharField('用户名', max_length=32)
    product_no = models.CharField('商品编号', max_length=32)

    class meta:
        verbose_name = '用户收藏'
        verbose_name_plural = '用户收藏'
