import json
from django.http import HttpResponse, JsonResponse
from Product import models

def get_discount(request):
    discountData = list(models.ProductDiscount.objects.filter().values())
    discountData.sort(key=lambda x: x['discount'])
    return HttpResponse(json.dumps({'status': 200, 'discount': discountData[0]['discount']}))
