# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from Product.models import ProductInfos, ProductType, ProductBelonging, ProductCategories, ProductColor, ProductSize, ProductDiscount, ProductNo
from django.contrib import admin

admin.site.register([ProductInfos, ProductType, ProductBelonging, ProductCategories, ProductColor, ProductSize, ProductDiscount, ProductNo])
