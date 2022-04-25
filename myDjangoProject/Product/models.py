from django.db import models


class ProductCategories(models.Model):
    name = models.CharField('具体类别', max_length=100,
                            unique=True, primary_key=True)
    img = models.FileField('类别图', upload_to=r'categories_imgs', default='imgs/my_gilr_0.jpg')

    class Meta:
      verbose_name = '具体类别'
      verbose_name_plural = '具体类别'


class ProductBelonging(models.Model):
    # Belonging_Choices = (
    #     ('室内专场', '室内专场'),
    #     ('室外专场', '室外专场'),
    #     ('其他商品', '其他商品'),
    # )
    Belonging = models.CharField(
        '商品所属',
        max_length=100,
        # choices=Belonging_Choices,
        primary_key=True
    )
    img = models.FileField('商品所属图', upload_to=r'belonging_imgs', default='imgs/my_gilr_0.jpg')

    class Meta:
        verbose_name = '商品所属'
        verbose_name_plural = '商品所属'


class ProductType(models.Model):
    # Type_Choices = (
    #     ('球类', '球类'),
    #     ('鞋类', '鞋类'),
    #     ('衣物类', '衣物类'),
    #     ('其他类', '其他类'),
    # )

    Type = models.CharField(
        '商品类型',
        max_length=100,
        # choices=Type_Choices,
        primary_key=True
    )

    class Meta:
        verbose_name = '商品类型'
        verbose_name_plural = '商品类型'

class ProductColor(models.Model):
    customColor = models.CharField('自定义颜色', max_length=100, primary_key=True)
    
    class Meta:
        verbose_name = '自定义颜色'
        verbose_name_plural = '自定义颜色'


class ProductSize(models.Model):
    customSize = models.CharField('自定义尺寸', max_length=100, primary_key=True)

    class Meta:
        verbose_name = '自定义尺寸'
        verbose_name_plural = '自定义尺寸'


class ProductInfos(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField('商品名称', max_length=100)
    color = models.CharField(
      '颜色',
      max_length=100,
      choices=(
        ('red', '红色'),
        ('blue', '蓝色'),
        ('green', '绿色'),
        ('yellow', '黄色'),
        ('white', '白色'),
        ('black', '黑色'),
        ('purple', '紫色'),
        ('orange', '橙色'),
        ('brown', '棕色'),
        ('gray', '灰色'),
        ('pink', '粉色'),
        ('自定义颜色', '自定义颜色'),
      )
    )
    size = models.CharField(
      '尺寸',
      max_length=100,
      choices=(
        ('S', 'S'),
        ('M', 'M'),
        ('L', 'L'),
        ('XL', 'XL'),
        ('XXL', 'XXL'),
        ('XXXL', 'XXXL'),
        ('自定义尺寸', '自定义尺寸')
      )
    )
    price = models.FloatField('商品价格')
    discount = models.FloatField('折后价格')
    stock = models.IntegerField('存货数量')
    sold = models.IntegerField('已售数量')
    likes = models.IntegerField('收藏数量')
    created = models.DateField('上架日期', auto_now_add=True)
    img = models.FileField('商品主图', upload_to=r'imgs', default='imgs/my_gilr_0.jpg')
    img2 = models.FileField('商品副图', upload_to=r'imgs2', default='imgs/my_gilr_0.jpg')
    details = models.FileField('商品介绍', upload_to=r'details', default='imgs/my_gilr_0.jpg')
    belonging = models.ForeignKey(ProductBelonging, on_delete=models.CASCADE)
    type = models.ForeignKey(ProductType, on_delete=models.CASCADE)
    custom_color = models.ForeignKey(ProductColor, on_delete=models.CASCADE, null=True, blank=True)
    custom_size = models.ForeignKey(ProductSize, on_delete=models.CASCADE, null=True, blank=True)
    specific_categories = models.CharField('具体类别', max_length=100)

    def __str__(self):
        return str(self.id)

    class Meta:
        verbose_name = '商品信息'
        verbose_name_plural = '商品信息'