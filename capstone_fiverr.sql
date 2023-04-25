-- Adminer 4.8.1 MySQL 8.0.31 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP DATABASE IF EXISTS `capstone_fiverr`;
CREATE DATABASE `capstone_fiverr` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `capstone_fiverr`;

DROP TABLE IF EXISTS `BinhLuan`;
CREATE TABLE `BinhLuan` (
  `id_binh_luan` int NOT NULL AUTO_INCREMENT,
  `id_cong_viec` int DEFAULT NULL,
  `id_nguoi_binh_luan` int DEFAULT NULL,
  `ngay_binh_luan` datetime DEFAULT NULL,
  `noi_dung` varchar(1000) DEFAULT NULL,
  `sao_binh_luan` int DEFAULT NULL,
  PRIMARY KEY (`id_binh_luan`),
  KEY `id_cong_viec` (`id_cong_viec`),
  KEY `id_nguoi_binh_luan` (`id_nguoi_binh_luan`),
  CONSTRAINT `BinhLuan_ibfk_3` FOREIGN KEY (`id_cong_viec`) REFERENCES `CongViec` (`id_cong_viec`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `BinhLuan_ibfk_4` FOREIGN KEY (`id_nguoi_binh_luan`) REFERENCES `NguoiDung` (`id_nguoi_dung`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `BinhLuan` (`id_binh_luan`, `id_cong_viec`, `id_nguoi_binh_luan`, `ngay_binh_luan`, `noi_dung`, `sao_binh_luan`) VALUES
(8,	5,	4,	'2023-04-18 11:30:28',	'hello ',	4),
(9,	6,	4,	'2023-04-12 04:41:45',	'hello 123',	4),
(16,	5,	14,	'2023-04-17 04:34:40',	'string',	5),
(17,	6,	4,	'2023-04-18 03:42:25',	'hello 123',	4),
(20,	7,	5,	'2023-04-18 03:42:25',	'good job',	4),
(21,	10,	14,	'2023-04-18 03:42:25',	'good ',	4),
(22,	11,	12,	'2023-04-18 03:42:25',	'hire job',	5);

DROP TABLE IF EXISTS `ChiTietLoaiCongViec`;
CREATE TABLE `ChiTietLoaiCongViec` (
  `id_chi_tiet_loai_cong_viec` int NOT NULL AUTO_INCREMENT,
  `ten_chi_tiet` varchar(1000) DEFAULT NULL,
  `hinh_anh` varchar(1000) DEFAULT NULL,
  `id_loai_cong_viec` int DEFAULT NULL,
  PRIMARY KEY (`id_chi_tiet_loai_cong_viec`),
  KEY `id_loai_cong_viec` (`id_loai_cong_viec`),
  CONSTRAINT `ChiTietLoaiCongViec_ibfk_2` FOREIGN KEY (`id_loai_cong_viec`) REFERENCES `LoaiCongViec` (`id_loai_cong_viec`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `ChiTietLoaiCongViec` (`id_chi_tiet_loai_cong_viec`, `ten_chi_tiet`, `hinh_anh`, `id_loai_cong_viec`) VALUES
(1,	'LoGo & Brand Identity',	'1681187661589-hinh4.jpg',	1),
(2,	'Web & App Design',	'http://localhost:8080/public/img/1681818960539keanu.jpg',	1),
(3,	'Social',	'1681379585667hinh2.jpg',	2),
(4,	'Storytelling',	'http://localhost:8080/img/1681788068856hinh3.jpg',	3),
(5,	'Voice Over & Stream',	'hình Voice Over & Streaming',	5),
(6,	'string',	'1681719848370keanu.jpg',	3),
(7,	'SEO',	'',	8);

DROP TABLE IF EXISTS `CongViec`;
CREATE TABLE `CongViec` (
  `id_cong_viec` int NOT NULL AUTO_INCREMENT,
  `ten_cong_viec` varchar(1000) DEFAULT NULL,
  `danh_gia` int DEFAULT NULL,
  `gia_tien` int DEFAULT NULL,
  `hinh_anh` varchar(1000) DEFAULT NULL,
  `mo_ta` varchar(1000) DEFAULT NULL,
  `mo_ta_ngan` varchar(1000) DEFAULT NULL,
  `sao_cong_viec` int DEFAULT NULL,
  `id_chi_tiet_loai_cong_viec` int DEFAULT NULL,
  `id_nguoi_tao` int DEFAULT NULL,
  PRIMARY KEY (`id_cong_viec`),
  KEY `id_nguoi_tao` (`id_nguoi_tao`),
  KEY `id_chi_tiet_loai_cong_viec` (`id_chi_tiet_loai_cong_viec`),
  CONSTRAINT `CongViec_ibfk_3` FOREIGN KEY (`id_nguoi_tao`) REFERENCES `NguoiDung` (`id_nguoi_dung`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `CongViec_ibfk_4` FOREIGN KEY (`id_chi_tiet_loai_cong_viec`) REFERENCES `ChiTietLoaiCongViec` (`id_chi_tiet_loai_cong_viec`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `CongViec` (`id_cong_viec`, `ten_cong_viec`, `danh_gia`, `gia_tien`, `hinh_anh`, `mo_ta`, `mo_ta_ngan`, `sao_cong_viec`, `id_chi_tiet_loai_cong_viec`, `id_nguoi_tao`) VALUES
(5,	'I will create best google local SEO strategy',	5,	50,	'1680685164081hinh5.jpg',	'mô tả công việc',	'mô tả ngắn',	5,	2,	4),
(6,	'I will be your experienced social media manager',	4,	60,	'1680880716776hinh3.jpg',	'I offer a premium turnkey monthly service to manage your Facebook or Instagram. I will create stunning social posts and post them in accurate time, engage your audience and grow your brand. ',	'I provide professional social media management for your business, product or brand.',	5,	3,	4),
(7,	'I will be your experienced social media manager',	9,	60,	'1681379727795keanu.jpg',	'I offer a premium turnkey monthly service to manage your Facebook or Instagram. I will create stunning social posts and post them in accurate time, engage your audience and grow your brand. ',	'I provide professional social media management for your business, product or brand.',	5,	3,	9),
(9,	'I will be your experienced social media manager',	4,	60,	'http://localhost:8080/img/1681749492602keanu.jpg',	'I offer a premium turnkey monthly service to manage your Facebook or Instagram. I will create stunning social posts and post them in accurate time, engage your audience and grow your brand. ',	'I provide professional social media management for your business, product or brand.',	5,	3,	4),
(10,	'I will develop website backend, rest api in node js express js and mongodb',	110,	100,	'http://localhost:8080/img/1681788314015hinh5.jpg',	'I will be your Node js Developer for backend web development with exceptional experience in designing, developing, and Maintaining Node Js web applications and Rest API.',	'I will do endpoints for basic CRUD operations in node js express js and mongodb.',	5,	2,	4),
(11,	'I will be your youtube channel manager and success advisor',	16,	60,	'',	'I will promote your channel and do SEO of videos to reach more audience and will help to achieve monetization requirements completion',	'I will promote your channel to complete 10 percent monetization requirements',	5,	3,	10),
(12,	'I will do best organic youtube channel promotion',	20,	75,	'',	' I don\'t promise or give any fixed result guarantee. Result depends on (advertising) content I am promoting and audience interest.',	'promote youtube channel to 1000 active audience and you can expect up to 5% conversion to sub',	5,	1,	12);

DROP TABLE IF EXISTS `LoaiCongViec`;
CREATE TABLE `LoaiCongViec` (
  `id_loai_cong_viec` int NOT NULL AUTO_INCREMENT,
  `ten_loai_cong_viec` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id_loai_cong_viec`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `LoaiCongViec` (`id_loai_cong_viec`, `ten_loai_cong_viec`) VALUES
(1,	'GRAphics & Design'),
(2,	'Digital Marketing 1'),
(3,	'Writing & Translation English!'),
(4,	'Video & Animation'),
(5,	'Music & Audio'),
(6,	'Programming & Tech'),
(7,	'Photography'),
(8,	'AI Services');

DROP TABLE IF EXISTS `NguoiDung`;
CREATE TABLE `NguoiDung` (
  `id_nguoi_dung` int NOT NULL AUTO_INCREMENT,
  `name` varchar(1000) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `pass_word` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `birth_day` varchar(100) DEFAULT NULL,
  `avatar` varchar(1000) DEFAULT NULL,
  `gender` varchar(100) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  `skill` varchar(1000) DEFAULT NULL,
  `certification` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id_nguoi_dung`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `NguoiDung` (`id_nguoi_dung`, `name`, `email`, `pass_word`, `phone`, `birth_day`, `avatar`, `gender`, `role`, `skill`, `certification`) VALUES
(4,	'danh',	'danh@gmail.com',	'$2b$10$lTCC3yygs6FKcinBa9bihuJ.TcpgTELauDwc9CshmCQcGSHq7ezOy',	NULL,	NULL,	'1680857845246keanu.jpg',	'1',	'user',	NULL,	NULL),
(5,	'VYVY',	'vyvyxinh@gmail.com',	'$2b$10$JVUwhUiXsVExQM16MfRfvugt859LY4nMIPLu7P9aPcyWU.WT.sbFG',	'0913198542',	'19/08/1998',	'http://localhost:8080/public/img/1681821938828hinh2.jpg',	'0',	'user',	'excel',	'UEH'),
(6,	'danh',	'danhmap@gmail.com',	'$2b$10$TTDdI4HbMjCDDlcXaaslQe.RurQqs1GAgNahZ5Il.0lGLWDnQZk.G',	'0327904444',	'22/05/1994',	'1681467059761keanu.jpg',	'1',	'ADMIN',	'IT',	'back-end nodejs'),
(8,	'danhdeptrai',	'danhdeptrai@gmail.com',	'$2b$10$jQzZ1YzLP3CWoodAc4gcj.fdXQHv5OHR3fHOcBkpPhK28mpigAiQm',	'0938000111',	'01/01/2011',	'http://localhost:8080/public/img/1681788912557keanu.jpg',	'1',	'user',	'nodejs',	'IT'),
(9,	'danh',	'danh1@gmail.com',	'$2b$10$sq6pJcx9LHYQsgnozWxeF.bAUUQtXewnCbje//A0uoLWsy3BdA9Kq',	'0938245624',	'22/05/1994',	NULL,	'1',	'user',	'string',	'string'),
(10,	'vyvy',	'vyvycute@gmail.com',	'$2b$10$SNbt5.XsgUsHBmBIkd1fsuBrtqvdxQuM0qu0aCVfcRg9Yv8E7I18e',	'0111222333',	'19/08/1998',	NULL,	'0',	'user',	'excel, vba',	'ueh'),
(12,	'vivian',	'vivian@gmail.com',	'$2b$10$e1n48bJ.MZrHLZvcdLNBm.ODW4a7u0UgmXBtVm9gWeEpynZmlxlMq',	'0913198500',	'19/08/1998',	NULL,	'0',	'ADMIN',	'excel, VBA, C&B',	'UEH'),
(14,	'danh',	'danh123@gmail.com',	'$2b$10$dUlwa8mnVbp2o8lO6IAbjuIxARc2VyDVb8JScDD8dd5zqattbgRBO',	'0938994888',	'22/05/1994',	'http://localhost:8080/img/1681749521278keanu.jpg',	'1',	'user',	'be',	'cybersoft');

DROP TABLE IF EXISTS `ThueCongViec`;
CREATE TABLE `ThueCongViec` (
  `id_thue_cong_viec` int NOT NULL AUTO_INCREMENT,
  `id_cong_viec` int DEFAULT NULL,
  `id_nguoi_thue` int DEFAULT NULL,
  `ngay_thue` datetime DEFAULT NULL,
  `hoan_thanh` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_thue_cong_viec`),
  KEY `id_cong_viec` (`id_cong_viec`),
  KEY `id_nguoi_thue` (`id_nguoi_thue`),
  CONSTRAINT `ThueCongViec_ibfk_3` FOREIGN KEY (`id_cong_viec`) REFERENCES `CongViec` (`id_cong_viec`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ThueCongViec_ibfk_4` FOREIGN KEY (`id_nguoi_thue`) REFERENCES `NguoiDung` (`id_nguoi_dung`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `ThueCongViec` (`id_thue_cong_viec`, `id_cong_viec`, `id_nguoi_thue`, `ngay_thue`, `hoan_thanh`) VALUES
(2,	6,	4,	'2023-04-07 09:36:49',	1),
(5,	5,	6,	'2023-04-10 08:17:27',	1),
(6,	5,	6,	'2023-04-14 03:33:59',	1),
(8,	7,	6,	'2023-04-17 17:29:32',	1),
(11,	7,	8,	'2023-04-17 17:29:32',	0),
(12,	10,	14,	'2023-04-19 04:25:03',	0),
(13,	12,	14,	'2023-04-19 04:25:26',	0);

-- 2023-04-19 04:26:33
