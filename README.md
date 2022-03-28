# Sporting-goods-mall
基于React和Django的体育用品商城网站

### 以下命令请用终端输入，并在项目文件夹Sporting-goods-mall下，若sudo npm报错，试着在Myproject下运行命令 ###

## git ##
克隆项目的最近一个版本：
git clone git@github.com:13fengye/Sporting-goods-mall.git --depth=1

# 接着做一下的环境配置

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

# Django配置参考Django官方文档
链接：https://docs.djangoproject.com/zh-hans/4.0/

Django不用自带数据库，可改用Mysql,其安装及配置：
链接：https://www.jb51.net/article/215879.htm

在myDjangoProject下的settings.py进行mysql的配置并终端里新建一个数据库