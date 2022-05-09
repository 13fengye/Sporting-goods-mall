from django.db import models

STATE = (
    ('待支付', '待支付'),
    ('已支付', '已支付'),
    ('发货中', '发货中'),
    ('已签收', '已签收'),
    ('退货中', '退货中'),
)


class CartInfos(models.Model):
    id = models.AutoField(primary_key=True)
    quantity = models.IntegerField('购买数量')
    name = models.CharField('商品名称', max_length=100)
    price = models.FloatField('商品价格')
    commodityInfos_id = models.CharField('商品ID', max_length=32)
    user_id = models.CharField('用户名', max_length=32)
    img = models.CharField('商品图片', max_length=100)

    def __str__(self):
        return str(self.id)

    class Meta:
        verbose_name = '购物车'
        verbose_name_plural = '购物车'


class OrderInfos(models.Model):
    id = models.AutoField(primary_key=True)
    price = models.FloatField('订单总价')
    productinfo_amounts = models.CharField('商品ID-数量', max_length=200)
    created = models.DateField('创建时间', auto_now_add=True)
    user_id = models.CharField('用户名', max_length=32)
    state = models.CharField('订单状态', max_length=20, choices=STATE, default='已支付')
    # 订单备注
    remark = models.CharField('订单备注', max_length=200, null=True, blank=True)

    class Meta:
        verbose_name = '订单信息'
        verbose_name_plural = '订单信息'