# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from User.models import *
from django.contrib import admin

admin.site.site_header = 'Django 后台管理'
admin.site.register([User, UserAddress])
