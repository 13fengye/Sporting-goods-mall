

"""
Django settings for myDjangoProject project.

Generated by 'django-admin startproject' using Django 1.11.29.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.11/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.11/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '1&8g-ssk!@=$cshpvh*x@l$7$8jue@k!z_%r*lik@_v-b499^+'

# SECURITY WARNING: don't run with debug turned on in production!
# admin no js, css if DEBUG = False
DEBUG = True

ALLOWED_HOSTS = ['175.178.37.194', 'localhost', '0.0.0.0:9000', '127.0.0.1']
# ALLOWED_HOSTS = ['*']

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # 跨域
    'corsheaders',
    # 我的应用
    'User',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',

    # 跨域中间件
    'corsheaders.middleware.CorsMiddleware',

    'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',   # 防火墙
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'myDjangoProject.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'myDjangoProject.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'sportinggoodsmall',
        'HOST': '127.0.0.1',
        'PORT': '3306',
        'USER': 'root',
        'PASSWORD': '199953',
    }
}
DEFAULT_AUTO_FIELD = 'django.db.models.AutoField'

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
#     }
# }


# Password validation
# https://docs.djangoproject.com/en/1.11/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/

LANGUAGE_CODE = 'zh-hans'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/
STATIC_ROOT  = os.path.join(BASE_DIR, 'static')
STATIC_URL = '/static/'

# 跨域相关配置
CORS_ORIGIN_ALLOW_ALL = True #允许所有的请求，或者设置CORS_ORIGIN_WHITELIST，二选一
# CORS_ALLOW_HEADERS = ('*') #允许所有的请求头
# CORS_ALLOW_CREDENTIALS = True # 允许携带cookie，前端需要携带cookies访问后端时,需要设置withCredentials: true
# CORS_ALLOW_METHODS = ('*') #允许跨域的请求方式
# CORS_ORIGIN_WHITELIST = ('*') #允许跨域的域名
# CORS_ALLOW_CREDENTIALS = True # 指明在跨域访问中，后端是否支持对cookie的操作
CORS_ALLOW_METHODS = (
 'DELETE',
 'GET',
 'OPTIONS',
 'PATCH',
 'POST',
 'PUT',
 'VIEW',
)
CORS_ALLOW_HEADERS = (
 'XMLHttpRequest',
 'X_FILENAME',
 'accept-encoding',
 'authorization',
 'content-type',
 'dnt',
 'origin',
 'user-agent',
 'x-csrftoken',
 'x-requested-with',
 'Pragma',
)

JWT_TOKEN_KEY = 'pengzhentong'
