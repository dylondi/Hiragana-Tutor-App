-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 19, 2019 at 05:06 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hiraganatutor`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `q1best` int(11) DEFAULT NULL,
  `q1last` int(11) DEFAULT NULL,
  `q1time` time NOT NULL DEFAULT '99:00:00',
  `q2best` int(11) DEFAULT NULL,
  `q2last` int(11) DEFAULT NULL,
  `q2time` time NOT NULL DEFAULT '99:00:00',
  `q3best` int(11) DEFAULT NULL,
  `q3last` int(11) DEFAULT NULL,
  `q4best` int(11) DEFAULT NULL,
  `q4last` int(11) DEFAULT NULL,
  `q5best` int(11) DEFAULT NULL,
  `q5last` int(11) DEFAULT NULL,
  `q6best` int(11) DEFAULT NULL,
  `q6last` int(11) DEFAULT NULL,
  `q7best` int(11) DEFAULT NULL,
  `q7last` int(11) DEFAULT NULL,
  `a1` int(11) NOT NULL DEFAULT '0',
  `a2` int(11) NOT NULL DEFAULT '0',
  `a3` int(11) NOT NULL DEFAULT '0',
  `a4` int(11) NOT NULL DEFAULT '0',
  `a5` int(11) NOT NULL DEFAULT '0',
  `a6` int(11) NOT NULL DEFAULT '0',
  `a7` int(11) NOT NULL DEFAULT '0',
  `b1` int(11) NOT NULL DEFAULT '0',
  `b2` int(11) NOT NULL DEFAULT '0',
  `b3` int(11) DEFAULT '0',
  `b4` int(11) NOT NULL DEFAULT '0',
  `b5` int(11) NOT NULL DEFAULT '0',
  `b6` int(11) NOT NULL DEFAULT '0',
  `b7` int(11) NOT NULL DEFAULT '0',
  `c1` int(11) NOT NULL DEFAULT '0',
  `c2` int(11) NOT NULL DEFAULT '0',
  `c3` int(11) NOT NULL DEFAULT '0',
  `c4` int(11) NOT NULL DEFAULT '0',
  `c5` int(11) NOT NULL DEFAULT '0',
  `c6` int(11) NOT NULL DEFAULT '0',
  `c7` int(11) NOT NULL DEFAULT '0',
  `d1` int(11) NOT NULL DEFAULT '0',
  `d2` int(11) NOT NULL DEFAULT '0',
  `d3` int(11) NOT NULL DEFAULT '0',
  `d4` int(11) NOT NULL DEFAULT '0',
  `d5` int(11) NOT NULL DEFAULT '0',
  `d6` int(11) NOT NULL DEFAULT '0',
  `d7` int(11) NOT NULL DEFAULT '0',
  `e1` int(11) NOT NULL DEFAULT '0',
  `e2` int(11) NOT NULL DEFAULT '0',
  `e3` int(11) NOT NULL DEFAULT '0',
  `e4` int(11) NOT NULL DEFAULT '0',
  `e5` int(11) NOT NULL DEFAULT '0',
  `e6` int(11) NOT NULL DEFAULT '0',
  `e7` int(11) NOT NULL DEFAULT '0',
  `f1` int(11) NOT NULL DEFAULT '0',
  `f2` int(11) NOT NULL DEFAULT '0',
  `f3` int(11) NOT NULL DEFAULT '0',
  `f4` int(11) NOT NULL DEFAULT '0',
  `f5` int(11) NOT NULL DEFAULT '0',
  `f6` int(11) NOT NULL DEFAULT '0',
  `f7` int(11) NOT NULL DEFAULT '0',
  `g1` int(11) NOT NULL DEFAULT '0',
  `g2` int(11) NOT NULL DEFAULT '0',
  `g3` int(11) NOT NULL DEFAULT '0',
  `g4` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `q1best`, `q1last`, `q1time`, `q2best`, `q2last`, `q2time`, `q3best`, `q3last`, `q4best`, `q4last`, `q5best`, `q5last`, `q6best`, `q6last`, `q7best`, `q7last`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `d1`, `d2`, `d3`, `d4`, `d5`, `d6`, `d7`, `e1`, `e2`, `e3`, `e4`, `e5`, `e6`, `e7`, `f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `g1`, `g2`, `g3`, `g4`) VALUES
(1, 'dylondi', 'howye', 60, 10, '00:00:02', 50, 0, '99:00:00', 10, 10, 30, 30, 10, 10, NULL, NULL, 25, 25, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(2, 'oirenf', 'piknde', NULL, NULL, '00:00:00', NULL, NULL, '99:00:00', NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
