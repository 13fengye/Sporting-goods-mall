# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from Product.models import ProductInfos, ProductType, ProductBelonging, ProductCategories
from django.contrib import admin

admin.site.register([ProductInfos, ProductType, ProductBelonging, ProductCategories])
