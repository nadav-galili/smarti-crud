-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 17, 2021 at 07:23 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `job_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `salary` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `first_name`, `last_name`, `job_title`, `salary`, `created_at`, `updated_at`) VALUES
(1, 'nadav1', 'galili', 'ceo', 10000, '2021-08-17 05:17:12', '2021-08-17 14:14:15'),
(3, 'Jane', 'Doe', 'cfo', 9000, '2021-08-17 05:29:11', '2021-08-17 05:29:11'),
(13, 'Moran', 'Meir', 'CTO111', 9999, '2021-08-17 11:12:38', '2021-08-17 14:19:53'),
(25, 'rr', 'ee', 'ert', 34, '2021-08-17 14:19:44', '2021-08-17 14:19:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
