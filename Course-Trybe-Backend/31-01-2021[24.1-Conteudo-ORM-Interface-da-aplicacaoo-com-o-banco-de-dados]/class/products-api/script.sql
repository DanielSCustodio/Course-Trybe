

CREATE DATABASE `lecture_24_1`;

USE `lecture_24_1`;
SHOW TABLES;

CREATE TABLE `lecture_24_1`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `price` DECIMAL(10) NULL,
  PRIMARY KEY (`id`));