# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import json
from django.http import HttpResponse
from django.views import View

class User(View):
    def get(self, request):
        return HttpResponse(json.dumps({'username': 'admin', 'password': '123456'}))
