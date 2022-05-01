"""myDjangoProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib import staticfiles
from django.contrib.staticfiles.urls import static
from . import settings



urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'User/', include('User.urls')),
    url(r'Product/', include('Product.urls')),
    url(r'Order/', include('Order.urls')),

]
urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.BELONGINGS_URL, document_root=settings.BELONGINGS_ROOT)
urlpatterns += static(settings.CATEGORIES_URL, document_root=settings.CATEGORIES_ROOT)
urlpatterns += static(settings.DETAILS_URL, document_root=settings.DETAILS_ROOT)
urlpatterns += static(settings.IMAGS_URL, document_root=settings.IMAGS_ROOT)
urlpatterns += static(settings.TYPEIMAGS_URL, document_root=settings.TYPEIMAGS_ROOT)