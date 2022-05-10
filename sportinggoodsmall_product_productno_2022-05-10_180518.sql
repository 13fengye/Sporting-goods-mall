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
-- Table structure for table `product_productno`
--

DROP TABLE IF EXISTS `product_productno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_productno` (
  `product_no` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL,
  `img2` varchar(100) NOT NULL,
  `details` varchar(100) NOT NULL,
  `sold` int NOT NULL,
  `likes` int NOT NULL,
  `onsale` tinyint(1) NOT NULL,
  `thisBelonging_id` varchar(100) DEFAULT NULL,
  `thisPercentage_id` double DEFAULT NULL,
  `thisType_id` varchar(100) DEFAULT NULL,
  `this_specific_categories_id` varchar(100) DEFAULT NULL,
  `describe` varchar(100) NOT NULL,
  `standard_price` double NOT NULL,
  PRIMARY KEY (`product_no`),
  KEY `Product_productno_thisBelonging_id_a9119dd6_fk_Product_p` (`thisBelonging_id`),
  KEY `Product_productno_thisPercentage_id_9ab0acf0_fk_Product_p` (`thisPercentage_id`),
  KEY `Product_productno_thisType_id_4bb2b247_fk_Product_p` (`thisType_id`),
  KEY `Product_productno_this_specific_catego_39c3507f_fk_Product_p` (`this_specific_categories_id`),
  CONSTRAINT `Product_productno_this_specific_catego_39c3507f_fk_Product_p` FOREIGN KEY (`this_specific_categories_id`) REFERENCES `product_productcategories` (`name`),
  CONSTRAINT `Product_productno_thisBelonging_id_a9119dd6_fk_Product_p` FOREIGN KEY (`thisBelonging_id`) REFERENCES `product_productbelonging` (`belonging`),
  CONSTRAINT `Product_productno_thisPercentage_id_9ab0acf0_fk_Product_p` FOREIGN KEY (`thisPercentage_id`) REFERENCES `product_productdiscount` (`discount`),
  CONSTRAINT `Product_productno_thisType_id_4bb2b247_fk_Product_p` FOREIGN KEY (`thisType_id`) REFERENCES `product_producttype` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_productno`
--

/*!40000 ALTER TABLE `product_productno` DISABLE KEYS */;
INSERT INTO `product_productno` VALUES ('001','夏季日系帆布鞋男白色小众设计感潮牌鞋子韩版潮流小白鞋厚底板鞋','imgs/主图1.jpg','imgs/副图1.jpg','details/detail1.png',15,0,1,'其它商品',1,'鞋类','休闲鞋','这是一双休闲鞋',68.8),('002','艾弗森篮球鞋男低帮运动透气防滑新款中学生战靴水泥地耐磨球鞋','imgs/主图2.jpg','imgs/副图2.jpg','details/detail2.png',6,0,1,'其它商品',0.7,'鞋类','运动鞋','这是一双篮球鞋',299),('003','YONEX尤尼克斯羽毛球拍正品旗舰双拍全碳素超轻耐用型成人yy套装','imgs/主图4.jpg','imgs/副图4.jpg','details/detail4.png',0,0,1,'室内专场',0.5,'球类','羽毛球','这是一副羽毛球拍',399),('004','李宁反伍篮球7号成人大学生室外水泥地吸湿耐磨专用训练正品篮球','imgs/主图3.jpg','imgs/副图3.jpg','details/detail3.png',4,0,1,'室外专场',0.7,'球类','篮球','这是一个篮球',99);
/*!40000 ALTER TABLE `product_productno` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-10 18:05:22
