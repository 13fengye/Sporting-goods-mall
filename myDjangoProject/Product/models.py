from pydoc import describe
from django.db import models
from django.test import tag
from pkg_resources import require


class ProductBelonging(models.Model):
    # Belonging_Choices = (
    #     ('室内专场', '室内专场'),
    #     ('室外专场', '室外专场'),
    #     ('其他商品', '其他商品'),
    # )
    belonging = models.CharField(
        '商品所属',
        max_length=100,
        # choices=Belonging_Choices,
        primary_key=True,
        default='无',
    )
    img = models.FileField('商品所属图', upload_to=r'belonging_imgs', default='imgs/my_gilr_0.jpg')

    class Meta:
        verbose_name = '1-商品所属大类别'
        verbose_name_plural = '1-商品所属大类别'


class ProductType(models.Model):
    # Type_Choices = (
    #     ('球类', '球类'),
    #     ('鞋类', '鞋类'),
    #     ('衣物类', '衣物类'),
    #     ('其他类', '其他类'),
    # )

    type = models.CharField(
        '商品类型',
        max_length=100,
        # choices=Type_Choices,
        primary_key=True,
        default='无'
    )
    img = models.FileField('商品类型图', upload_to=r'type_imgs', default='imgs/my_gilr_0.jpg')

    class Meta:
        verbose_name = '2-商品种类'
        verbose_name_plural = '2-商品种类'


class ProductCategories(models.Model):
    name = models.CharField('具体类别', max_length=100, unique=True, primary_key=True, default='无')
    img = models.FileField('类别图', upload_to=r'categories_imgs', default='imgs/my_gilr_0.jpg')
    thisType = models.ForeignKey(ProductType, on_delete=models.CASCADE, verbose_name='商品种类')

    class Meta:
      verbose_name = '3-具体类别'
      verbose_name_plural = '3-具体类别'


class ProductColor(models.Model):
    CustomColor = models.CharField('自定义颜色', max_length=100, primary_key=True, default='无')

    class Meta:
        verbose_name = '自定义颜色'
        verbose_name_plural = '自定义颜色'


class ProductSize(models.Model):
    customSize = models.CharField('自定义尺寸', max_length=100, primary_key=True, default='无')

    class Meta:
        verbose_name = '自定义尺寸'
        verbose_name_plural = '自定义尺寸'

class ProductDiscount(models.Model):
    discount = models.FloatField('自定义折扣', primary_key=True, default=1.0)

    class Meta:
        verbose_name = '自定义折扣'
        verbose_name_plural = '自定义折扣'


class ProductNo(models.Model):
    product_no = models.CharField('商品编号', max_length=100, primary_key=True, default='无')
    name = models.CharField('商品名称', max_length=100)
    img = models.FileField('商品主图', upload_to=r'imgs', default='imgs/my_gilr_0.jpg')
    img2 = models.FileField('商品副图', upload_to=r'imgs', default='imgs/my_gilr_0.jpg')
    details = models.FileField('商品介绍', upload_to=r'details', default='imgs/my_gilr_0.jpg')
    describe = models.CharField('商品描述', max_length=100, default='无')
    standard_price = models.FloatField('标准价格', default=0.0)
    sold = models.IntegerField('已售数量')
    likes = models.IntegerField('收藏数量')
    onsale = models.BooleanField('是否上架', default=False)
    thisType = models.ForeignKey(ProductType, on_delete=models.CASCADE, null=True, blank=True, default='无')
    thisBelonging = models.ForeignKey(ProductBelonging, on_delete=models.CASCADE, null=True, blank=True, default='无')
    thisPercentage = models.ForeignKey(ProductDiscount, on_delete=models.CASCADE, null=True, blank=True, default='无')
    this_specific_categories = models.ForeignKey(ProductCategories, on_delete=models.CASCADE, null=True, blank=True, default='无')

    class Meta:
        verbose_name = '4-商品通用信息'
        verbose_name_plural = '4-商品通用信息'

class ProductTags(models.Model):
    product_no = models.OneToOneField(ProductNo, on_delete=models.CASCADE, verbose_name='商品编号')

    tag_choices = (('热卖', '热卖'),('新品', '新品'),('推荐', '推荐'),('爆款', '爆款'),
        ('特价', '特价'),('折扣', '折扣'),('满减', '满减'),('满赠', '满赠'),
        ('满折', '满折'),('畅销', '畅销'),('秒杀', '秒杀'),('秒杀抢购', '秒杀抢购'))

    tag1 = models.CharField('商品标签1', max_length=100, choices=tag_choices, default='无')
    tag2 = models.CharField('商品标签1', max_length=100, choices=tag_choices, default='无')
    tag3 = models.CharField('商品标签1', max_length=100, choices=tag_choices, default='无')
    tag4 = models.CharField('商品标签1', max_length=100, choices=tag_choices, default='无')


    class Meta:
        verbose_name = '6-商品标签'
        verbose_name_plural = '6-商品标签'


class ProductInfos(models.Model):
    id = models.AutoField(primary_key=True)
    color = models.CharField(
      '颜色',
      max_length=100,
      choices=(
        ('自定义颜色', '自定义颜色'),
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
        ('pink', '粉色')
      )
    )
    size = models.CharField(
      '尺寸',
      max_length=100,
      choices=(
        ('自定义尺寸', '自定义尺寸'),
        ('S', 'S'),
        ('M', 'M'),
        ('L', 'L'),
        ('XL', 'XL'),
        ('XXL', 'XXL'),
        ('XXXL', 'XXXL')
      )
    )
    price = models.FloatField('商品价格')
    discount = models.FloatField('折后价格')
    stock = models.IntegerField('存货数量')
    created = models.DateField('上架日期', auto_now_add=True)
    onsale = models.BooleanField('是否上架', default=False)
    isDiscount = models.BooleanField('是否折扣', default=False)
    isPercentage = models.BooleanField('是否百分比折扣', default=False) 
    custom_color = models.ForeignKey(ProductColor, on_delete=models.CASCADE, null=True, blank=True, default='无')
    custom_size = models.ForeignKey(ProductSize, on_delete=models.CASCADE, null=True, blank=True, default='无')
    product_no = models.ForeignKey(ProductNo, on_delete=models.CASCADE, null=True, blank=True, default='无')

    def __str__(self):
        return str(self.id)

    class Meta:
        verbose_name = '5-商品信息'
        verbose_name_plural = '5-商品信息'