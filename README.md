# Sporting-goods-mall
基于React和Django的体育用品商城网站

### 以下命令请用终端输入，并在项目文件夹Sporting-goods-mall下，若sudo npm报错，试着在Myproject下运行命令 ###

## git ##
克隆项目的最近一个版本：
git clone git@github.com:13fengye/Sporting-goods-mall.git --depth=1
克隆整个项目：
git clone git@github.com:13fengye/Sporting-goods-mall.git

# 接着做一下的环境配置
# ------------------------------------------前端---------------------------------------------- #

# React

# Next.js and TypejScript()
（参考TypeScript中文文档：https://typescript.bootcss.com/tutorials/react-&-webpack.html）
初始化项目：
sudo npm init -y

添加React,Next依赖：
sudo npm install --save react react-dom next

添加依赖Webpack（Webpack这个工具可以将你的所有代码和可选择地将依赖捆绑成一个单独的.js文件）:
sudo npm install -g webpack
sudo npm i -g webpack-cli

添加开发时依赖awesome-typescript-loader和source-map-loader:
sudo npm install --save-dev typescript awesome-typescript-loader source-map-loader

添加TypeScript开发环境依赖:
sudo npm install --save-dev typescript @types/react @types/node

编译：
sudo npm run build

运行：
sudo npm run dev

# ------------------------------------------后端---------------------------------------------- #

# Django配置参考Django官方文档
链接：https://docs.djangoproject.com/zh-hans/4.0/

安装Django: python3 -m pip install Django

Django不用自带数据库，可改用Mysql,其安装及配置：
链接：https://www.jb51.net/article/215879.htm

在myDjangoProject下的settings.py进行mysql的配置并终端里新建一个数据库,
终端输入一下命令迁移Django模型到数据库：
python3 manage.py migrate   # 创建表结构
python3 manage.py makemigrations XXX  # 让 Django 知道我们在我们的模型有一些变更(有新App)
python3 manage.py migrate XXX  # 创建表结构

# Mysql：
启动：mysql -u root -p -h 127.0.0.1
创建：create DATABASE sportinggoodsmall default charset=utf8;
创建数据库后，在setting.py里配置DATABASES,其中数据库名为sportinggoodsmall

例如：
DATABASES = { 
    'default': 
    { 
        'ENGINE': 'django.db.backends.mysql',    # 数据库引擎
        'NAME': 'runoob', # 数据库名称
        'HOST': '127.0.0.1', # 数据库地址，本机 ip 地址 127.0.0.1 
        'PORT': 3306, # 端口 
        'USER': 'root',  # 数据库用户名
        'PASSWORD': '123456', # 数据库密码
    }  
}

Django 使用 pymysql 模块连接 mysql 数据库：
安装 pymysql：sudo apt install pymysql / python3 -m pip install pymysql
在与 settings.py 同级目录下的 __init__.py 中引入模块和进行配置, 运行python3 manage.py runserver 8002 命令时, 报错 “AttributeError: module 'MySQLdb.constants.FIELD_TYPE' has no attribute 'JSON'”，将 __init__.py 中模块注释掉即可
--------------------------------
import pymysql
pymysql.install_as_MySQLdb()
--------------------------------

# Django虚拟环境virtualenv
sudo apt install virtualenv
方法一：
参考：https://blog.csdn.net/JBY2020/article/details/116074528
安装：pip3 install virtualenv
创建: mkvirtualenv -p python3 虚拟环境名称
退出：deactivate
查看: workon
删除: rmvirtualenv 虚拟环境名称
启动：workon my_env

方法二：
https://tendcode.com/article/virtualenv-for-python/
安装：pip3 install virtualenv 
创建：virtualenv my_env
启动：source my_env/bin/activate
退出：deactivate

# Django 跨域(corsheaders)
参考：https://blog.csdn.net/jsxingmang/article/details/112060465
pip3 install django-cors-headers

# Django JWT
安装：pip3 install pyjwt

# Pillow(image)
参考：https://pillow.readthedocs.io/en/latest/installation.html

# Django Nginx + uWSGI
参考：https://www.runoob.com/python3/python-uwsgi.html
https://www.cnblogs.com/flhw/p/14923018.html


