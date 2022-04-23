# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from Order.models import OrderInfos, CartInfos
from django.contrib import admin

admin.site.register([OrderInfos, CartInfos])
