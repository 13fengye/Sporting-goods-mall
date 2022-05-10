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

def get_all_types(request):
    typeData = list(models.ProductType.objects.filter().values())
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

def get_classified_goods(request, belonging, type):
    ProductNos = list(models.ProductNo.objects.filter(onsale=True, thisBelonging_id=belonging, thisType_id=type).values('product_no' ,'name', 'img', 'standard_price', 'sold', 'describe'))
    print(ProductNos)
    return HttpResponse(json.dumps({'status': 200, 'products': ProductNos}))

def get_all_products(request, belonging, type):
    # print(belonging, type)
    if belonging == '默认' and type == '默认':
        ProductNos = list(models.ProductNo.objects.filter(onsale=True).values('product_no' ,'name', 'img', 'standard_price', 'sold', 'describe'))
    elif belonging != '默认' and type == '默认':
        ProductNos = list(models.ProductNo.objects.filter(onsale=True, thisBelonging_id=belonging).values('product_no' ,'name', 'img', 'standard_price', 'sold', 'describe'))
    elif belonging == '默认':
        ProductNos = list(models.ProductNo.objects.filter(onsale=True, thisType_id=type).values('product_no' ,'name', 'img', 'standard_price', 'sold', 'describe'))
    else:
        ProductNos = list(models.ProductNo.objects.filter(onsale=True, thisBelonging_id=belonging, thisType_id=type).values('product_no' ,'name', 'img', 'standard_price', 'sold', 'describe'))
    return HttpResponse(json.dumps({'status': 200, 'products': ProductNos}))

def get_product(request, product_no):
    print(product_no)
    productNo = list(models.ProductNo.objects.filter(product_no=product_no, onsale=True).values())
    productInfos = list(models.ProductInfos.objects.filter(product_no_id=product_no, onsale=True).values())
    newProductInfos = []
    for productInfo in productInfos:
        productInfo['created'] = str(productInfo['created'])
        newProductInfos.append(productInfo)
    # print(productInfos)
    return HttpResponse(json.dumps({'status': 200, 'productNo': productNo, 'productInfos': newProductInfos}))

def get_product_info(request, productinfo_id):
    productInfo = list(models.ProductInfos.objects.filter(id=productinfo_id).values())[0]
    productNo = list(models.ProductNo.objects.filter(product_no=productInfo['product_no_id']).values())[0]
    productInfo['created'] = str(productInfo['created'])
    return HttpResponse(json.dumps({'status': 200, 'productInfo': productInfo, 'productNo': productNo}))

def get_search_products(request, keyword):
    productNos = list(models.ProductNo.objects.filter(name__contains=keyword).values('product_no' ,'name', 'img', 'standard_price', 'sold', 'describe'))
    return HttpResponse(json.dumps({'status': 200, 'products': productNos})) if productNos else HttpResponse(json.dumps({'status': 200, 'products': []}))