-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 28 2023 г., 14:38
-- Версия сервера: 8.0.30
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";



CREATE TABLE `admin` (
  `login` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO `admin` (`login`, `password`) VALUES
('admin', '$2y$10$./WuOzceB8NOnOtEP4Xcqe0S8/X4amomaHZfOCfEUY8wPeQqFi.Ku');


CREATE TABLE `item` (
  `id` int NOT NULL,
  `title` varchar(300) COLLATE utf8mb4_general_ci NOT NULL,
  `price` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `kategory` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `male` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `female` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `brand` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `color` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `article` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `text` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `colorGroup` varchar(20) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `item` (`id`, `title`, `price`, `kategory`, `male`, `female`, `brand`, `color`, `article`, `text`, `colorGroup`) VALUES
(5, 'ihnsdcsdc', '2324', 'belts', '', 'yes', 'Armani', '#ff0000', 'art_0fj0)(', 'sdcsdczsdc', '5'),
(6, 'hoijoi', '3242', 'belts', '', 'yes', 'Armani', '#000000', 'wdfweew', 'sdcsdczsdc', '5'),
(7, 'test', '2344', 'umbrellas', 'yes', '', 'Puma', '#0a06fe', 'art_0900', 'sfslorem', '7'),
(8, 'dsfcsdf', '1222', 'umbrellas', 'yes', '', 'Puma', '#fbff00', 'adfs4', 'sfslorem', '7'),
(9, 'wefwe', '2232', 'umbrellas', 'yes', '', 'Puma', '#ff0000', 'ascsd', 'sfslorem', '7'),
(10, 'test', '2344', 'umbrellas', 'yes', '', 'Puma', '#0a06fe', 'art_0900', 'sfslorem', '10'),
(11, 'dsfcsdf', '1222', 'umbrellas', 'yes', '', 'Puma', '#fbff00', 'adfs4', 'sfslorem', '10'),
(12, 'wefwe', '2232', 'umbrellas', 'yes', '', 'Puma', '#ff0000', 'ascsd', 'sfslorem', '10'),
(13, 'test', '2344', 'umbrellas', 'yes', '', 'Puma', '#0a06fe', 'art_0900', 'sfslorem', '13'),
(14, 'dsfcsdf', '1222', 'umbrellas', 'yes', '', 'Puma', '#fbff00', 'adfs4', 'sfslorem', '13'),
(15, 'wefwe', '2232', 'umbrellas', 'yes', '', 'Puma', '#ff0000', 'ascsd', 'sfslorem', '13'),
(16, 'test', '2344', 'umbrellas', 'yes', '', 'Puma', '#0a06fe', 'art_0900', 'sfslorem', '16'),
(17, 'dsfcsdf', '1222', 'umbrellas', 'yes', '', 'Puma', '#fbff00', 'adfs4', 'sfslorem', '16'),
(18, 'wefwe', '2232', 'umbrellas', 'yes', '', 'Puma', '#ff0000', 'ascsd', 'sfslorem', '16'),
(19, 'test', '2344', 'umbrellas', 'yes', '', 'Puma', '#0a06fe', 'art_0900', 'sfslorem', '19'),
(20, 'dsfcsdf', '1222', 'umbrellas', 'yes', '', 'Puma', '#fbff00', 'adfs4', 'sfslorem', '19'),
(21, 'wefwe', '2232', 'umbrellas', 'yes', '', 'Puma', '#ff0000', 'ascsd', 'sfslorem', '19'),
(22, 'test', '2344', 'umbrellas', 'yes', '', 'Puma', '#0a06fe', 'art_0900', 'sfslorem', '22'),
(23, 'dsfcsdf', '1222', 'umbrellas', 'yes', '', 'Puma', '#fbff00', 'adfs4', 'sfslorem', '22'),
(24, 'wefwe', '2232', 'umbrellas', 'yes', '', 'Puma', '#ff0000', 'ascsd', 'sfslorem', '22'),
(25, 'test', '2344', 'umbrellas', 'yes', '', 'Puma', '#0a06fe', 'art_0900', 'sfslorem', '25'),
(26, 'dsfcsdf', '1222', 'umbrellas', 'yes', '', 'Puma', '#fbff00', 'adfs4', 'sfslorem', '25'),
(27, 'wefwe', '2232', 'umbrellas', 'yes', '', 'Puma', '#ff0000', 'ascsd', 'sfslorem', '25'),
(28, 'test', '2344', 'umbrellas', 'yes', '', 'Puma', '#0a06fe', 'art_0900', 'sfslorem', '28'),
(29, 'dsfcsdf', '1222', 'umbrellas', 'yes', '', 'Puma', '#fbff00', 'adfs4', 'sfslorem', '28'),
(30, 'wefwe', '2232', 'umbrellas', 'yes', '', 'Puma', '#ff0000', 'ascsd', 'sfslorem', '28'),
(31, 'test', '2344', 'umbrellas', 'yes', '', 'Puma', '#0a06fe', 'art_0900', 'sfslorem', '31'),
(32, 'dsfcsdf', '1222', 'umbrellas', 'yes', '', 'Puma', '#fbff00', 'adfs4', 'sfslorem', '31'),
(33, 'wefwe', '2232', 'umbrellas', 'yes', '', 'Puma', '#ff0000', 'ascsd', 'sfslorem', '31'),
(34, 'test', '2344', 'umbrellas', 'yes', '', 'Puma', '#0a06fe', 'art_0900', 'sfslorem', '34'),
(35, 'dsfcsdf', '1222', 'umbrellas', 'yes', '', 'Puma', '#fbff00', 'adfs4', 'sfslorem', '34'),
(36, 'wefwe', '2232', 'umbrellas', 'yes', '', 'Puma', '#ff0000', 'ascsd', 'sfslorem', '34');


CREATE TABLE `photo` (
  `id` int NOT NULL,
  `main` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `location` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `id_item` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO `photo` (`id`, `main`, `location`, `id_item`) VALUES
(82, 'yes', 'img/sql/5/Group 69.png', 5),
(83, '', 'img/sql/5/bluetooth.png', 5),
(84, '', 'img/sql/5/Group 53.png', 5),
(85, '', 'img/sql/5/Group 54.png', 5),
(86, '', 'img/sql/5/Group 69.png', 5),
(87, 'yes', 'img/sql/6/microphone.png', 6),
(88, '', 'img/sql/6/Group 53.png', 6),
(89, '', 'img/sql/6/Group 54.png', 6),
(90, '', 'img/sql/6/Group 69.png', 6),
(91, 'yes', 'img/sql/7/1617038939_17-p-oboi-fon-dlya-rabochego-stola-18.jpg', 7),
(92, '', 'img/sql/7/Layer_25.jpg', 7),
(93, '', 'img/sql/7/Layer_26.png', 7),
(94, '', 'img/sql/7/Layer_23.jpg', 7),
(95, '', 'img/sql/7/Layer_24.jpg', 7),
(96, 'yes', 'img/sql/8/fon.png', 8),
(97, '', 'img/sql/8/cafe.png', 8),
(98, '', 'img/sql/8/fon.png', 8),
(99, '', 'img/sql/8/man.png', 8),
(100, '', 'img/sql/8/time.png', 8),
(101, 'yes', 'img/sql/9/rightImg.png', 9),
(102, '', 'img/sql/9/rightImg.png', 9),
(103, '', 'img/sql/9/vector-1.png', 9),
(104, '', 'img/sql/9/vector-2.png', 9),
(105, '', 'img/sql/9/vector-3.png', 9),
(106, 'yes', 'img/sql/10/1617038939_17-p-oboi-fon-dlya-rabochego-stola-18.jpg', 10),
(107, '', 'img/sql/10/Layer_25.jpg', 10),
(108, '', 'img/sql/10/Layer_26.png', 10),
(109, '', 'img/sql/10/Layer_23.jpg', 10),
(110, '', 'img/sql/10/Layer_24.jpg', 10),
(111, 'yes', 'img/sql/11/fon.png', 11),
(112, '', 'img/sql/11/cafe.png', 11),
(113, '', 'img/sql/11/fon.png', 11),
(114, '', 'img/sql/11/man.png', 11),
(115, '', 'img/sql/11/time.png', 11),
(116, 'yes', 'img/sql/12/rightImg.png', 12),
(117, '', 'img/sql/12/rightImg.png', 12),
(118, '', 'img/sql/12/vector-1.png', 12),
(119, '', 'img/sql/12/vector-2.png', 12),
(120, '', 'img/sql/12/vector-3.png', 12),
(121, 'yes', 'img/sql/13/1617038939_17-p-oboi-fon-dlya-rabochego-stola-18.jpg', 13),
(122, '', 'img/sql/13/Layer_25.jpg', 13),
(123, '', 'img/sql/13/Layer_26.png', 13),
(124, '', 'img/sql/13/Layer_23.jpg', 13),
(125, '', 'img/sql/13/Layer_24.jpg', 13),
(126, 'yes', 'img/sql/14/fon.png', 14),
(127, '', 'img/sql/14/cafe.png', 14),
(128, '', 'img/sql/14/fon.png', 14),
(129, '', 'img/sql/14/man.png', 14),
(130, '', 'img/sql/14/time.png', 14),
(131, 'yes', 'img/sql/15/rightImg.png', 15),
(132, '', 'img/sql/15/rightImg.png', 15),
(133, '', 'img/sql/15/vector-1.png', 15),
(134, '', 'img/sql/15/vector-2.png', 15),
(135, '', 'img/sql/15/vector-3.png', 15),
(136, 'yes', 'img/sql/16/1617038939_17-p-oboi-fon-dlya-rabochego-stola-18.jpg', 16),
(137, '', 'img/sql/16/Layer_25.jpg', 16),
(138, '', 'img/sql/16/Layer_26.png', 16),
(139, '', 'img/sql/16/Layer_23.jpg', 16),
(140, '', 'img/sql/16/Layer_24.jpg', 16),
(141, 'yes', 'img/sql/17/fon.png', 17),
(142, '', 'img/sql/17/cafe.png', 17),
(143, '', 'img/sql/17/fon.png', 17),
(144, '', 'img/sql/17/man.png', 17),
(145, '', 'img/sql/17/time.png', 17),
(146, 'yes', 'img/sql/18/rightImg.png', 18),
(147, '', 'img/sql/18/rightImg.png', 18),
(148, '', 'img/sql/18/vector-1.png', 18),
(149, '', 'img/sql/18/vector-2.png', 18),
(150, '', 'img/sql/18/vector-3.png', 18),
(151, 'yes', 'img/sql/19/1617038939_17-p-oboi-fon-dlya-rabochego-stola-18.jpg', 19),
(152, '', 'img/sql/19/Layer_25.jpg', 19),
(153, '', 'img/sql/19/Layer_26.png', 19),
(154, '', 'img/sql/19/Layer_23.jpg', 19),
(155, '', 'img/sql/19/Layer_24.jpg', 19),
(156, 'yes', 'img/sql/20/fon.png', 20),
(157, '', 'img/sql/20/cafe.png', 20),
(158, '', 'img/sql/20/fon.png', 20),
(159, '', 'img/sql/20/man.png', 20),
(160, '', 'img/sql/20/time.png', 20),
(161, 'yes', 'img/sql/21/rightImg.png', 21),
(162, '', 'img/sql/21/rightImg.png', 21),
(163, '', 'img/sql/21/vector-1.png', 21),
(164, '', 'img/sql/21/vector-2.png', 21),
(165, '', 'img/sql/21/vector-3.png', 21),
(166, 'yes', 'img/sql/22/1617038939_17-p-oboi-fon-dlya-rabochego-stola-18.jpg', 22),
(167, '', 'img/sql/22/Layer_25.jpg', 22),
(168, '', 'img/sql/22/Layer_26.png', 22),
(169, '', 'img/sql/22/Layer_23.jpg', 22),
(170, '', 'img/sql/22/Layer_24.jpg', 22),
(171, 'yes', 'img/sql/23/fon.png', 23),
(172, '', 'img/sql/23/cafe.png', 23),
(173, '', 'img/sql/23/fon.png', 23),
(174, '', 'img/sql/23/man.png', 23),
(175, '', 'img/sql/23/time.png', 23),
(176, 'yes', 'img/sql/24/rightImg.png', 24),
(177, '', 'img/sql/24/rightImg.png', 24),
(178, '', 'img/sql/24/vector-1.png', 24),
(179, '', 'img/sql/24/vector-2.png', 24),
(180, '', 'img/sql/24/vector-3.png', 24),
(181, 'yes', 'img/sql/25/1617038939_17-p-oboi-fon-dlya-rabochego-stola-18.jpg', 25),
(182, '', 'img/sql/25/Layer_25.jpg', 25),
(183, '', 'img/sql/25/Layer_26.png', 25),
(184, '', 'img/sql/25/Layer_23.jpg', 25),
(185, '', 'img/sql/25/Layer_24.jpg', 25),
(186, 'yes', 'img/sql/26/fon.png', 26),
(187, '', 'img/sql/26/cafe.png', 26),
(188, '', 'img/sql/26/fon.png', 26),
(189, '', 'img/sql/26/man.png', 26),
(190, '', 'img/sql/26/time.png', 26),
(191, 'yes', 'img/sql/27/rightImg.png', 27),
(192, '', 'img/sql/27/rightImg.png', 27),
(193, '', 'img/sql/27/vector-1.png', 27),
(194, '', 'img/sql/27/vector-2.png', 27),
(195, '', 'img/sql/27/vector-3.png', 27),
(196, 'yes', 'img/sql/28/1617038939_17-p-oboi-fon-dlya-rabochego-stola-18.jpg', 28),
(197, '', 'img/sql/28/Layer_25.jpg', 28),
(198, '', 'img/sql/28/Layer_26.png', 28),
(199, '', 'img/sql/28/Layer_23.jpg', 28),
(200, '', 'img/sql/28/Layer_24.jpg', 28),
(201, 'yes', 'img/sql/29/fon.png', 29),
(202, '', 'img/sql/29/cafe.png', 29),
(203, '', 'img/sql/29/fon.png', 29),
(204, '', 'img/sql/29/man.png', 29),
(205, '', 'img/sql/29/time.png', 29),
(206, 'yes', 'img/sql/30/rightImg.png', 30),
(207, '', 'img/sql/30/rightImg.png', 30),
(208, '', 'img/sql/30/vector-1.png', 30),
(209, '', 'img/sql/30/vector-2.png', 30),
(210, '', 'img/sql/30/vector-3.png', 30),
(211, 'yes', 'img/sql/31/1617038939_17-p-oboi-fon-dlya-rabochego-stola-18.jpg', 31),
(212, '', 'img/sql/31/Layer_25.jpg', 31),
(213, '', 'img/sql/31/Layer_26.png', 31),
(214, '', 'img/sql/31/Layer_23.jpg', 31),
(215, '', 'img/sql/31/Layer_24.jpg', 31),
(216, 'yes', 'img/sql/32/fon.png', 32),
(217, '', 'img/sql/32/cafe.png', 32),
(218, '', 'img/sql/32/fon.png', 32),
(219, '', 'img/sql/32/man.png', 32),
(220, '', 'img/sql/32/time.png', 32),
(221, 'yes', 'img/sql/33/rightImg.png', 33),
(222, '', 'img/sql/33/rightImg.png', 33),
(223, '', 'img/sql/33/vector-1.png', 33),
(224, '', 'img/sql/33/vector-2.png', 33),
(225, '', 'img/sql/33/vector-3.png', 33),
(226, 'yes', 'img/sql/34/1617038939_17-p-oboi-fon-dlya-rabochego-stola-18.jpg', 34),
(227, '', 'img/sql/34/Layer_25.jpg', 34),
(228, '', 'img/sql/34/Layer_26.png', 34),
(229, '', 'img/sql/34/Layer_23.jpg', 34),
(230, '', 'img/sql/34/Layer_24.jpg', 34),
(231, 'yes', 'img/sql/35/fon.png', 35),
(232, '', 'img/sql/35/cafe.png', 35),
(233, '', 'img/sql/35/fon.png', 35),
(234, '', 'img/sql/35/man.png', 35),
(235, '', 'img/sql/35/time.png', 35),
(236, 'yes', 'img/sql/36/rightImg.png', 36),
(237, '', 'img/sql/36/rightImg.png', 36),
(238, '', 'img/sql/36/vector-1.png', 36),
(239, '', 'img/sql/36/vector-2.png', 36),
(240, '', 'img/sql/36/vector-3.png', 36);



CREATE TABLE `size` (
  `id` int DEFAULT NULL,
  `name` varchar(30) NOT NULL,
  `id_item` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `size` (`id`, `name`, `id_item`) VALUES
(NULL, 'm', '5'),
(NULL, 'l', '5'),
(NULL, 'xl', '5'),
(NULL, 'один розмір', '6'),
(NULL, '24', '7'),
(NULL, '45', '7'),
(NULL, 'один розмір', '8'),
(NULL, 'один розмір', '9'),
(NULL, '24', '10'),
(NULL, '45', '10'),
(NULL, 'один розмір', '11'),
(NULL, 'один розмір', '12'),
(NULL, '24', '13'),
(NULL, '45', '13'),
(NULL, 'один розмір', '14'),
(NULL, 'один розмір', '15'),
(NULL, '24', '16'),
(NULL, '45', '16'),
(NULL, 'один розмір', '17'),
(NULL, 'один розмір', '18'),
(NULL, '24', '19'),
(NULL, '45', '19'),
(NULL, 'один розмір', '20'),
(NULL, 'один розмір', '21'),
(NULL, '24', '22'),
(NULL, '45', '22'),
(NULL, 'один розмір', '23'),
(NULL, 'один розмір', '24'),
(NULL, '24', '25'),
(NULL, '45', '25'),
(NULL, 'один розмір', '26'),
(NULL, 'один розмір', '27'),
(NULL, '24', '28'),
(NULL, '45', '28'),
(NULL, 'один розмір', '29'),
(NULL, 'один розмір', '30'),
(NULL, '24', '31'),
(NULL, '45', '31'),
(NULL, 'один розмір', '32'),
(NULL, 'один розмір', '33'),
(NULL, '24', '34'),
(NULL, '45', '34'),
(NULL, 'один розмір', '35'),
(NULL, 'один розмір', '36');

ALTER TABLE `item`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `photo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_item` (`id_item`);

ALTER TABLE `item`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

ALTER TABLE `photo`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=241;

ALTER TABLE `photo`
  ADD CONSTRAINT `photo_ibfk_1` FOREIGN KEY (`id_item`) REFERENCES `item` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;
