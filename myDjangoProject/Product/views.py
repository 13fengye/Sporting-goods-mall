import json
from django.http import HttpResponse, JsonResponse
from Product import models

def get_discount(request):
    discountData = list(models.ProductDiscount.objects.filter().values())
    discountData.sort(key=lambda x: x['discount'])
    return HttpResponse(json.dumps({'status': 200, 'discount': discountData[0]['discount']}))

def get_belongings(request):
    belongsData = list(models.ProductBelonging.objects.filter().values())
    return HttpResponse(json.dumps({'status': 200, 'belongs': belongsData}))

def get_type(request,type):
    typeData = list(models.ProductNo.objects.filter(thisBelonging_id=type).values('thisType_id'))
    typeData = list({typeData[i]['thisType_id'] for i in range(len(typeData))})
    print(typeData)
    return HttpResponse(json.dumps({'status': 200, 'types': typeData}))