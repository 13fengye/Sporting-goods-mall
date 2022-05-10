-- MySQL dump 10.13  Distrib 5.7.37, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: sportinggoodsmall
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `product_productinfos`
--

DROP TABLE IF EXISTS `product_productinfos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_productinfos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `color` varchar(100) NOT NULL,
  `size` varchar(100) NOT NULL,
  `price` double NOT NULL,
  `discount` double NOT NULL,
  `stock` int NOT NULL,
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
  CONSTRAINT `Product_productinfos_custom_color_id_8f8dc093_fk_Product_p` FOREIGN KEY (`custom_color_id`) REFERENCES `product_productcolor` (`CustomColor`),
  CONSTRAINT `Product_productinfos_custom_size_id_df617f2c_fk_Product_p` FOREIGN KEY (`custom_size_id`) REFERENCES `product_productsize` (`customSize`),
  CONSTRAINT `Product_productinfos_product_no_id_cd91a05f_fk_Product_p` FOREIGN KEY (`product_no_id`) REFERENCES `product_productno` (`product_no`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_productinfos`
--

/*!40000 ALTER TABLE `product_productinfos` DISABLE KEYS */;
INSERT INTO `product_productinfos` VALUES (1,'自定义颜色','自定义尺寸',68.8,50,3,'2022-04-29',1,1,0,'黑白','42','001'),(2,'自定义颜色','自定义尺寸',68.8,55,4,'2022-04-29',1,0,1,'白黑','44','001'),(3,'自定义颜色','自定义尺寸',299,250,4,'2022-04-29',1,0,1,'深蓝','43','002'),(4,'自定义颜色','自定义尺寸',299,250,5,'2022-04-29',1,1,0,'灰白','40','002'),(5,'自定义颜色','自定义尺寸',399,350,5,'2022-04-29',1,0,1,'蓝橙',NULL,'003'),(6,'自定义颜色','自定义尺寸',399,350,5,'2022-04-29',1,1,0,'黑绿',NULL,'003'),(7,'自定义颜色','自定义尺寸',99,85,5,'2022-04-29',1,0,0,NULL,'5号','004'),(8,'自定义颜色','自定义尺寸',199,150,4,'2022-04-29',1,0,1,NULL,'7号','004'),(9,'白色','自定义尺寸',59,50,5,'2022-05-06',1,1,0,NULL,'43','001'),(10,'自定义颜色','自定义尺寸',68.8,59,3,'2022-05-06',1,1,0,'黑白','39','001');
/*!40000 ALTER TABLE `product_productinfos` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-10 18:05:16
