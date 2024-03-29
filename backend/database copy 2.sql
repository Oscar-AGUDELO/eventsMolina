-- MySQL Script generated by MySQL Workbench
-- Wed Jul 20 14:38:01 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eventsMolina
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `eventsMolina` ;

-- -----------------------------------------------------
-- Schema eventsMolina
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventsMolina` DEFAULT CHARACTER SET utf8 ;
USE `eventsMolina` ;

-- -----------------------------------------------------
-- Table `eventsMolina`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `eventsMolina`.`users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(25) NOT NULL,
  `qr` longtext,
  `acquitted` tinyint NOT NULL DEFAULT '0',
  `paidTime` date DEFAULT NULL,
  `validatedTicket` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`);
--
-- Dumping data for table `users`
--
LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,CURRENT_TIMESTAMP,"Admin","ADMIN","admin@admin.com","0123456789Admin",NULL,0,NULL,0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
-- -----------------------------------------------------
-- Table `eventsMolina`.`playLists`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `eventsMolina`.`playLists` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `artist` VARCHAR(255) NOT NULL,
  `url` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`));
--
-- Dumping data for table `playLists`
--
LOCK TABLES `playLists` WRITE;
/*!40000 ALTER TABLE `playLists` DISABLE KEYS */;
INSERT INTO `playLists` VALUES (1, "Todo Cambió","Sam Rivera & Blanca" ,"https://youtu.be/vKu-_zoIcL0"), (2, "Emmanuel / Como Dijiste","Sam Rivera & Melody Adorno" ,"https://youtu.be/ZGODCC8GhjA"), (3, "Promesas","Aaron Moses & Christine D'Clario" ,"https://youtu.be/qsREqdhgXgg"), (4, "Tumbas A Jardines","Brandon Lake & Edgar Aguilar" ,"https://youtu.be/iQpVoxPDpHw");
/*!40000 ALTER TABLE `playLists` ENABLE KEYS */;
UNLOCK TABLES;




SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;