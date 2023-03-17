-- MySQL dump 10.13  Distrib 5.7.41, for Linux (x86_64)
--
-- Host: localhost    Database: sportinggoodsmall
-- ------------------------------------------------------
-- Server version	5.7.41-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Order_cartinfos`
--

DROP TABLE IF EXISTS `Order_cartinfos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Order_cartinfos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` double NOT NULL,
  `commodityInfos_id` varchar(32) NOT NULL,
  `user_id` varchar(32) NOT NULL,
  `img` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Order_cartinfos`
--

LOCK TABLES `Order_cartinfos` WRITE;
/*!40000 ALTER TABLE `Order_cartinfos` DISABLE KEYS */;
/*!40000 ALTER TABLE `Order_cartinfos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Order_orderinfos`
--

DROP TABLE IF EXISTS `Order_orderinfos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Order_orderinfos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `price` double NOT NULL,
  `productinfo_amounts` varchar(200) NOT NULL,
  `created` date NOT NULL,
  `user_id` varchar(32) NOT NULL,
  `state` varchar(20) NOT NULL,
  `remark` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Order_orderinfos`
--

LOCK TABLES `Order_orderinfos` WRITE;
/*!40000 ALTER TABLE `Order_orderinfos` DISABLE KEYS */;
/*!40000 ALTER TABLE `Order_orderinfos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product_productbelonging`
--

DROP TABLE IF EXISTS `Product_productbelonging`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Product_productbelonging` (
  `belonging` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL,
  PRIMARY KEY (`belonging`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product_productbelonging`
--

LOCK TABLES `Product_productbelonging` WRITE;
/*!40000 ALTER TABLE `Product_productbelonging` DISABLE KEYS */;
INSERT INTO `Product_productbelonging` VALUES ('室外专场','belonging_imgs/OIP-C.jpg');
/*!40000 ALTER TABLE `Product_productbelonging` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product_productcategories`
--

DROP TABLE IF EXISTS `Product_productcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Product_productcategories` (
  `name` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL,
  `thisType_id` varchar(100) NOT NULL,
  PRIMARY KEY (`name`),
  KEY `Product_productcateg_thisType_id_06b943cc_fk_Product_p` (`thisType_id`),
  CONSTRAINT `Product_productcateg_thisType_id_06b943cc_fk_Product_p` FOREIGN KEY (`thisType_id`) REFERENCES `Product_producttype` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product_productcategories`
--

LOCK TABLES `Product_productcategories` WRITE;
/*!40000 ALTER TABLE `Product_productcategories` DISABLE KEYS */;
INSERT INTO `Product_productcategories` VALUES ('篮球','categories_imgs/th.jpg','球类');
/*!40000 ALTER TABLE `Product_productcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product_productcolor`
--

DROP TABLE IF EXISTS `Product_productcolor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Product_productcolor` (
  `CustomColor` varchar(100) NOT NULL,
  PRIMARY KEY (`CustomColor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product_productcolor`
--

LOCK TABLES `Product_productcolor` WRITE;
/*!40000 ALTER TABLE `Product_productcolor` DISABLE KEYS */;
INSERT INTO `Product_productcolor` VALUES ('无');
/*!40000 ALTER TABLE `Product_productcolor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product_productdiscount`
--

DROP TABLE IF EXISTS `Product_productdiscount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Product_productdiscount` (
  `discount` double NOT NULL,
  PRIMARY KEY (`discount`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product_productdiscount`
--

LOCK TABLES `Product_productdiscount` WRITE;
/*!40000 ALTER TABLE `Product_productdiscount` DISABLE KEYS */;
INSERT INTO `Product_productdiscount` VALUES (9.5);
/*!40000 ALTER TABLE `Product_productdiscount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product_productinfos`
--

DROP TABLE IF EXISTS `Product_productinfos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Product_productinfos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `color` varchar(100) NOT NULL,
  `size` varchar(100) NOT NULL,
  `price` double NOT NULL,
  `discount` double NOT NULL,
  `stock` int(11) NOT NULL,
  `created` date NOT NULL,
  `onsale` tinyint(1) NOT NULL,
  `isDiscount` tinyint(1) NOT NULL,
  `isPercentage` tinyint(1) NOT NULL,
  `custom_color_id` varchar(100) DEFAULT NULL,
  `custom_size_id` varchar(100) DEFAULT NULL,
  `product_no_id` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Product_productinfos_custom_color_id_8f8dc093_fk_Product_p` (`custom_color_id`),
  KEY `Product_productinfos_custom_size_id_df617f2c_fk_Product_p` (`custom_size_id`),
  KEY `Product_productinfos_product_no_id_cd91a05f_fk_Product_p` (`product_no_id`),
  CONSTRAINT `Product_productinfos_custom_color_id_8f8dc093_fk_Product_p` FOREIGN KEY (`custom_color_id`) REFERENCES `Product_productcolor` (`CustomColor`),
  CONSTRAINT `Product_productinfos_custom_size_id_df617f2c_fk_Product_p` FOREIGN KEY (`custom_size_id`) REFERENCES `Product_productsize` (`customSize`),
  CONSTRAINT `Product_productinfos_product_no_id_cd91a05f_fk_Product_p` FOREIGN KEY (`product_no_id`) REFERENCES `Product_productno` (`product_no`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product_productinfos`
--

LOCK TABLES `Product_productinfos` WRITE;
/*!40000 ALTER TABLE `Product_productinfos` DISABLE KEYS */;
INSERT INTO `Product_productinfos` VALUES (1,'自定义颜色','自定义尺寸',100,95,100,'2023-03-17',1,0,1,'无','7号','001');
/*!40000 ALTER TABLE `Product_productinfos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product_productno`
--

DROP TABLE IF EXISTS `Product_productno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Product_productno` (
  `product_no` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL,
  `img2` varchar(100) NOT NULL,
  `details` varchar(100) NOT NULL,
  `describe` varchar(100) NOT NULL,
  `standard_price` double NOT NULL,
  `sold` int(11) NOT NULL,
  `likes` int(11) NOT NULL,
  `onsale` tinyint(1) NOT NULL,
  `thisBelonging_id` varchar(100) DEFAULT NULL,
  `thisPercentage_id` double DEFAULT NULL,
  `thisType_id` varchar(100) DEFAULT NULL,
  `this_specific_categories_id` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`product_no`),
  KEY `Product_productno_thisType_id_4bb2b247_fk_Product_p` (`thisType_id`),
  KEY `Product_productno_this_specific_catego_39c3507f_fk_Product_p` (`this_specific_categories_id`),
  KEY `Product_productno_thisBelonging_id_a9119dd6_fk_Product_p` (`thisBelonging_id`),
  KEY `Product_productno_thisPercentage_id_9ab0acf0_fk_Product_p` (`thisPercentage_id`),
  CONSTRAINT `Product_productno_thisBelonging_id_a9119dd6_fk_Product_p` FOREIGN KEY (`thisBelonging_id`) REFERENCES `Product_productbelonging` (`belonging`),
  CONSTRAINT `Product_productno_thisPercentage_id_9ab0acf0_fk_Product_p` FOREIGN KEY (`thisPercentage_id`) REFERENCES `Product_productdiscount` (`discount`),
  CONSTRAINT `Product_productno_thisType_id_4bb2b247_fk_Product_p` FOREIGN KEY (`thisType_id`) REFERENCES `Product_producttype` (`type`),
  CONSTRAINT `Product_productno_this_specific_catego_39c3507f_fk_Product_p` FOREIGN KEY (`this_specific_categories_id`) REFERENCES `Product_productcategories` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product_productno`
--

LOCK TABLES `Product_productno` WRITE;
/*!40000 ALTER TABLE `Product_productno` DISABLE KEYS */;
INSERT INTO `Product_productno` VALUES ('001','篮球','imgs/th.jpg','imgs/th_r4PDqRI.jpg','details/th.jpg','篮球',250,0,0,1,'室外专场',9.5,'球类',NULL);
/*!40000 ALTER TABLE `Product_productno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product_productsize`
--

DROP TABLE IF EXISTS `Product_productsize`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Product_productsize` (
  `customSize` varchar(100) NOT NULL,
  PRIMARY KEY (`customSize`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product_productsize`
--

LOCK TABLES `Product_productsize` WRITE;
/*!40000 ALTER TABLE `Product_productsize` DISABLE KEYS */;
INSERT INTO `Product_productsize` VALUES ('7号');
/*!40000 ALTER TABLE `Product_productsize` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product_producttags`
--

DROP TABLE IF EXISTS `Product_producttags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Product_producttags` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `tag1` varchar(100) NOT NULL,
  `tag2` varchar(100) NOT NULL,
  `tag3` varchar(100) NOT NULL,
  `tag4` varchar(100) NOT NULL,
  `product_no_id` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_no_id` (`product_no_id`),
  CONSTRAINT `Product_producttags_product_no_id_41c58ea4_fk_Product_p` FOREIGN KEY (`product_no_id`) REFERENCES `Product_productno` (`product_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product_producttags`
--

LOCK TABLES `Product_producttags` WRITE;
/*!40000 ALTER TABLE `Product_producttags` DISABLE KEYS */;
/*!40000 ALTER TABLE `Product_producttags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product_producttype`
--

DROP TABLE IF EXISTS `Product_producttype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Product_producttype` (
  `type` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL,
  PRIMARY KEY (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product_producttype`
--

LOCK TABLES `Product_producttype` WRITE;
/*!40000 ALTER TABLE `Product_producttype` DISABLE KEYS */;
INSERT INTO `Product_producttype` VALUES ('球类','type_imgs/OIP-C.jpg');
/*!40000 ALTER TABLE `Product_producttype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User_user`
--

DROP TABLE IF EXISTS `User_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User_user` (
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `email` varchar(254) NOT NULL,
  PRIMARY KEY (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User_user`
--

LOCK TABLES `User_user` WRITE;
/*!40000 ALTER TABLE `User_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `User_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User_useraddress`
--

DROP TABLE IF EXISTS `User_useraddress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User_useraddress` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `name` varchar(32) NOT NULL,
  `address` varchar(128) NOT NULL,
  `phone` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User_useraddress`
--

LOCK TABLES `User_useraddress` WRITE;
/*!40000 ALTER TABLE `User_useraddress` DISABLE KEYS */;
/*!40000 ALTER TABLE `User_useraddress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User_usercollection`
--

DROP TABLE IF EXISTS `User_usercollection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User_usercollection` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `product_no` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User_usercollection`
--

LOCK TABLES `User_usercollection` WRITE;
/*!40000 ALTER TABLE `User_usercollection` DISABLE KEYS */;
/*!40000 ALTER TABLE `User_usercollection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add user',7,'add_user'),(26,'Can change user',7,'change_user'),(27,'Can delete user',7,'delete_user'),(28,'Can view user',7,'view_user'),(29,'Can add user address',8,'add_useraddress'),(30,'Can change user address',8,'change_useraddress'),(31,'Can delete user address',8,'delete_useraddress'),(32,'Can view user address',8,'view_useraddress'),(33,'Can add user collection',9,'add_usercollection'),(34,'Can change user collection',9,'change_usercollection'),(35,'Can delete user collection',9,'delete_usercollection'),(36,'Can view user collection',9,'view_usercollection'),(37,'Can add 1-商品所属大类别',10,'add_productbelonging'),(38,'Can change 1-商品所属大类别',10,'change_productbelonging'),(39,'Can delete 1-商品所属大类别',10,'delete_productbelonging'),(40,'Can view 1-商品所属大类别',10,'view_productbelonging'),(41,'Can add 2-商品种类',11,'add_producttype'),(42,'Can change 2-商品种类',11,'change_producttype'),(43,'Can delete 2-商品种类',11,'delete_producttype'),(44,'Can view 2-商品种类',11,'view_producttype'),(45,'Can add 3-具体类别',12,'add_productcategories'),(46,'Can change 3-具体类别',12,'change_productcategories'),(47,'Can delete 3-具体类别',12,'delete_productcategories'),(48,'Can view 3-具体类别',12,'view_productcategories'),(49,'Can add 自定义颜色',13,'add_productcolor'),(50,'Can change 自定义颜色',13,'change_productcolor'),(51,'Can delete 自定义颜色',13,'delete_productcolor'),(52,'Can view 自定义颜色',13,'view_productcolor'),(53,'Can add 自定义尺寸',14,'add_productsize'),(54,'Can change 自定义尺寸',14,'change_productsize'),(55,'Can delete 自定义尺寸',14,'delete_productsize'),(56,'Can view 自定义尺寸',14,'view_productsize'),(57,'Can add 自定义折扣',15,'add_productdiscount'),(58,'Can change 自定义折扣',15,'change_productdiscount'),(59,'Can delete 自定义折扣',15,'delete_productdiscount'),(60,'Can view 自定义折扣',15,'view_productdiscount'),(61,'Can add 4-商品通用信息',16,'add_productno'),(62,'Can change 4-商品通用信息',16,'change_productno'),(63,'Can delete 4-商品通用信息',16,'delete_productno'),(64,'Can view 4-商品通用信息',16,'view_productno'),(65,'Can add 6-商品标签',17,'add_producttags'),(66,'Can change 6-商品标签',17,'change_producttags'),(67,'Can delete 6-商品标签',17,'delete_producttags'),(68,'Can view 6-商品标签',17,'view_producttags'),(69,'Can add 5-商品信息',18,'add_productinfos'),(70,'Can change 5-商品信息',18,'change_productinfos'),(71,'Can delete 5-商品信息',18,'delete_productinfos'),(72,'Can view 5-商品信息',18,'view_productinfos'),(73,'Can add 购物车',19,'add_cartinfos'),(74,'Can change 购物车',19,'change_cartinfos'),(75,'Can delete 购物车',19,'delete_cartinfos'),(76,'Can view 购物车',19,'view_cartinfos'),(77,'Can add 订单信息',20,'add_orderinfos'),(78,'Can change 订单信息',20,'change_orderinfos'),(79,'Can delete 订单信息',20,'delete_orderinfos'),(80,'Can view 订单信息',20,'view_orderinfos');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$260000$ehm4fMbKeILNRf5FAiWEB4$qffiGSUWvSuitXPgOEY3FO2//ET3UlR4Z212Q5o72tA=','2023-03-17 09:26:13.501405',1,'fengye','','','',1,1,'2023-03-17 09:16:51.293246');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2023-03-17 09:36:32.714346','室外专场','ProductBelonging object (室外专场)',1,'[{\"added\": {}}]',10,1),(2,'2023-03-17 09:37:03.707188','球类','ProductType object (球类)',1,'[{\"added\": {}}]',11,1),(3,'2023-03-17 09:37:55.448848','篮球','ProductCategories object (篮球)',1,'[{\"added\": {}}]',12,1),(4,'2023-03-17 09:39:00.386431','9.5','ProductDiscount object (9.5)',1,'[{\"added\": {}}]',15,1),(5,'2023-03-17 09:39:10.630656','001','ProductNo object (001)',1,'[{\"added\": {}}]',16,1),(6,'2023-03-17 09:48:32.726472','无','ProductColor object (无)',1,'[{\"added\": {}}]',13,1),(7,'2023-03-17 09:48:41.736035','7号','ProductSize object (7号)',1,'[{\"added\": {}}]',14,1),(8,'2023-03-17 09:48:49.026191','1','1',1,'[{\"added\": {}}]',18,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(19,'Order','cartinfos'),(20,'Order','orderinfos'),(10,'Product','productbelonging'),(12,'Product','productcategories'),(13,'Product','productcolor'),(15,'Product','productdiscount'),(18,'Product','productinfos'),(16,'Product','productno'),(14,'Product','productsize'),(17,'Product','producttags'),(11,'Product','producttype'),(6,'sessions','session'),(7,'User','user'),(8,'User','useraddress'),(9,'User','usercollection');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2023-03-17 09:12:28.950466'),(2,'auth','0001_initial','2023-03-17 09:12:29.389890'),(3,'admin','0001_initial','2023-03-17 09:12:29.491375'),(4,'admin','0002_logentry_remove_auto_add','2023-03-17 09:12:29.502146'),(5,'admin','0003_logentry_add_action_flag_choices','2023-03-17 09:12:29.512922'),(6,'contenttypes','0002_remove_content_type_name','2023-03-17 09:12:29.592609'),(7,'auth','0002_alter_permission_name_max_length','2023-03-17 09:12:29.637057'),(8,'auth','0003_alter_user_email_max_length','2023-03-17 09:12:29.688689'),(9,'auth','0004_alter_user_username_opts','2023-03-17 09:12:29.699157'),(10,'auth','0005_alter_user_last_login_null','2023-03-17 09:12:29.737512'),(11,'auth','0006_require_contenttypes_0002','2023-03-17 09:12:29.739328'),(12,'auth','0007_alter_validators_add_error_messages','2023-03-17 09:12:29.747847'),(13,'auth','0008_alter_user_username_max_length','2023-03-17 09:12:29.790610'),(14,'auth','0009_alter_user_last_name_max_length','2023-03-17 09:12:29.840559'),(15,'auth','0010_alter_group_name_max_length','2023-03-17 09:12:29.882359'),(16,'auth','0011_update_proxy_permissions','2023-03-17 09:12:29.899566'),(17,'auth','0012_alter_user_first_name_max_length','2023-03-17 09:12:29.942512'),(18,'sessions','0001_initial','2023-03-17 09:12:29.987172'),(19,'Order','0001_initial','2023-03-17 09:36:18.928419'),(20,'Product','0001_initial','2023-03-17 09:36:19.527854'),(21,'User','0001_initial','2023-03-17 09:36:19.590047');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('1f753gx8cw4d2cs6s5unuvbotzzuabyt','.eJxVjEEOwiAQRe_C2hCHUigu3XsGMjMMUjU0Ke3KeHdD0oVu_3vvv1XEfStxb7LGOamLAnX63Qj5KbWD9MB6XzQvdVtn0l3RB236tiR5XQ_376BgK71GA8Z7TyEImezBTZwJJAxisyBbcAKjdZbJ83kUdnaYCHxgRwklq88X8TI4nQ:1pd6Ll:9frYud7YKmk81ty-ZBLwbFlD8jpumNcqbL62NnZTxMk','2023-03-31 09:26:13.505802');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-17 17:58:41
