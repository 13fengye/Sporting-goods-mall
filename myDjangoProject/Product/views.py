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

def get_type(request, belong):
    typeData = list(models.ProductNo.objects.filter(thisBelonging_id=belong).values('thisType_id'))
    typeData = list({typeData[i]['thisType_id'] for i in range(len(typeData))})
    return HttpResponse(json.dumps({'status': 200, 'types': typeData}))

def get_type_img(request, type):
    typeImgPath = models.ProductType.objects.filter(type=type).values()[0]['img']
    return HttpResponse(json.dumps({'status': 200, 'typeImgPath': typeImgPath}))

def get_lowest_price(request, type):
    product_no = list(models.ProductNo.objects.filter(thisType_id=type).values('product_no'))
    if not product_no:
        return HttpResponse(json.dumps({'status': 200, 'price': '无'}))
    price_array = [models.ProductInfos.objects.filter(product_no=item['product_no']).values('price') for item in product_no]
    typeImgPath = models.ProductType.objects.filter(type=type).values()[0]['img']
    lowest_price = min(price_array[i][0]['price'] for i in range(len(price_array)))
    return HttpResponse(json.dumps({'status': 200, 'lowestPrice': lowest_price, 'typeImgPath': typeImgPath}))

def get_featured_new_products(request):
    product_no =list((models.ProductTags.objects.filter(tag1='新品') | models.ProductTags.objects.filter(tag2='新品') | models.ProductTags.objects.filter(tag3='新品') | models.ProductTags.objects.filter(tag4='新品')).values('product_no'))
    if not product_no:
        return HttpResponse(json.dumps({'status': 200, 'products': []}))
    ProductNos = [list(models.ProductNo.objects.filter(onsale=True).filter(product_no=item['product_no']).values('product_no' ,'name', 'img', 'standard_price', 'sold', 'describe')) for item in product_no]
    return HttpResponse(json.dumps({'status': 200, 'products': ProductNos}))