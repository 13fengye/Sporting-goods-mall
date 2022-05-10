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
-- Table structure for table `product_producttags`
--

DROP TABLE IF EXISTS `product_producttags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_producttags` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `product_no_id` varchar(100) NOT NULL,
  `tag1` varchar(100) NOT NULL,
  `tag2` varchar(100) NOT NULL,
  `tag3` varchar(100) NOT NULL,
  `tag4` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Product_producttags_product_no_id_41c58ea4_fk_Product_p` (`product_no_id`),
  CONSTRAINT `Product_producttags_product_no_id_41c58ea4_fk_Product_p` FOREIGN KEY (`product_no_id`) REFERENCES `product_productno` (`product_no`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_producttags`
--

/*!40000 ALTER TABLE `product_producttags` DISABLE KEYS */;
INSERT INTO `product_producttags` VALUES (17,'001','爆款','新品','折扣','热卖'),(18,'002','推荐','热卖','折扣','畅销'),(19,'003','折扣','热卖','畅销','新品'),(20,'004','推荐','爆款','畅销','满减');
/*!40000 ALTER TABLE `product_producttags` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-10 18:05:52
