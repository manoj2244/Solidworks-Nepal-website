-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2023 at 04:48 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `solidwork`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `main_intro` varchar(255) NOT NULL,
  `design` varchar(255) NOT NULL,
  `designdesc` varchar(255) NOT NULL,
  `fab` varchar(255) NOT NULL,
  `fabdesc` varchar(255) NOT NULL,
  `simu` varchar(255) NOT NULL,
  `simudesc` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contactmessage`
--

CREATE TABLE `contactmessage` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contactmessage`
--

INSERT INTO `contactmessage` (`id`, `name`, `email`, `subject`, `message`) VALUES
(4, 'jh', 'manoj2244manoj@gmail;.com', 'uuy', 'Bootstrap Chat Icon and talk to someone in a friendly and informal way. This is also known as \"bi bi-chat\" or \"bi chat\". This bootstrap icon also symbolizes ...'),
(5, 'Manoj Nepali', 'nepali2244manoj@gmail.com', 'rtrereer', 'ertert'),
(6, 'Manoj Nepali', 'nepali2244manoj@gmail.com', 'dffd', 'fhfh'),
(7, 'Manoj Nepali', 'nepali2244manoj@gmail.com', 'gt', 'hg'),
(8, 'Manoj Nepali', 'nepali2244manoj@gmail.com', 'df', 'dfdf');

-- --------------------------------------------------------

--
-- Table structure for table `designer`
--

CREATE TABLE `designer` (
  `id` int(11) NOT NULL,
  `heading` varchar(3000) NOT NULL,
  `name` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `facebook` varchar(3000) NOT NULL,
  `twitter` varchar(255) NOT NULL,
  `insta` varchar(255) NOT NULL,
  `linkdin` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `design_3d`
--

CREATE TABLE `design_3d` (
  `id` int(11) NOT NULL,
  `access` varchar(255) NOT NULL,
  `used` text NOT NULL,
  `detail` text NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `design_3d`
--

INSERT INTO `design_3d` (`id`, `access`, `used`, `detail`, `image`) VALUES
(1, 'kkkkkgiii', '<ol><li>khgjgj</li><li>yuuu</li><li>lk</li><br></ol>', '<ol><li>khgjgj</li><li>yuuu</li><li>lk</li><br></ol>', 'team-1.jpg'),
(2, 'k', '<ol><li>khgjgj</li><li>yuuu</li><li>lkp</li><br></ol>', '<ol><li>khgjgj</li><li>yuuu</li><li>lkp</li><br></ol>', 'team-2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `design_simu`
--

CREATE TABLE `design_simu` (
  `id` int(11) NOT NULL,
  `access` varchar(255) NOT NULL,
  `used` text NOT NULL,
  `detail` text NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `design_simu`
--

INSERT INTO `design_simu` (`id`, `access`, `used`, `detail`, `image`) VALUES
(2, 'simula model', '<ul><li>hksahfdjkhjjasdhfjksd</li><li>sdfhkslhdfkjshdf</li><li>jkhsd</li><br></ul>', '<ol><li>gisdjf</li><li>sdiisgui</li><li>dkfghdkji<br></li><br></ol>', 'testimonials-2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `venue` varchar(255) NOT NULL,
  `training_date` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `eventno` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`id`, `subject`, `venue`, `training_date`, `duration`, `url`, `description`, `image`, `eventno`) VALUES
(24, 'ddfhfdhdfhddp', 'dfgdffdfdfd', 'dfdhdfhdfhd', 'shdfhdshds', 'dsfdsfhsdfdf', 'undefined', 'team-2.jpg', '0cbda4c74a'),
(25, 'MAnoj Nepali', 'Purbanchal campus adahran', '2079/25/55', '4 hours', 'www.youtube.com', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,', 'cta.jpg', '04ab8ac38b'),
(26, 'iooifdgoidfg', 'dsfhghsdfiug', 'difjgiodfg', 'kjdhfkgjhdsf', 'kdfjhkghdg', 'dfgjkidhjfgkiodjhf', 'news-3.jpg', '13cd098317');

-- --------------------------------------------------------

--
-- Table structure for table `event_image`
--

CREATE TABLE `event_image` (
  `id` int(11) NOT NULL,
  `image_name` varchar(255) NOT NULL,
  `work_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `event_image`
--

INSERT INTO `event_image` (`id`, `image_name`, `work_id`) VALUES
(28, 'team-1.jpg', '0cbda4c74a'),
(29, 'team-2.jpg', '0cbda4c74a'),
(30, 'team-3.jpg', '0cbda4c74a'),
(31, 'services-5.jpg', '04ab8ac38b'),
(32, 'services-6.jpg', '04ab8ac38b'),
(33, '3dexperience.jpg', '13cd098317'),
(34, 'about.jpg', '13cd098317');

-- --------------------------------------------------------

--
-- Table structure for table `fabrication`
--

CREATE TABLE `fabrication` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `project_date` varchar(255) NOT NULL,
  `client` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` varchar(3000) NOT NULL,
  `image` varchar(255) NOT NULL,
  `main_desc` text NOT NULL,
  `fab_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fabrication`
--

INSERT INTO `fabrication` (`id`, `title`, `category`, `project_date`, `client`, `url`, `description`, `image`, `main_desc`, `fab_id`) VALUES
(4, 'bv,hnvbn', 'bvmbv', 'vbmvb', 'vmvm', 'bvmbv', 'b,nbnb', 'testimonials-2.jpg', '<p><strong style=\"margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Lorem Ipsum</strong><span style=\"color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span><br></p>', '261976673');

-- --------------------------------------------------------

--
-- Table structure for table `fabrication_image`
--

CREATE TABLE `fabrication_image` (
  `image_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `work_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fabrication_image`
--

INSERT INTO `fabrication_image` (`image_id`, `image`, `work_id`) VALUES
(5, 'testimonials-1.jpg', 261976673),
(6, 'testimonials-2.jpg', 261976673);

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

CREATE TABLE `faq` (
  `id` int(11) NOT NULL,
  `question` varchar(255) NOT NULL,
  `answer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faq`
--

INSERT INTO `faq` (`id`, `question`, `answer`) VALUES
(5, 'Where is your company located?', 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'),
(6, 'Where is your company located?', 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'),
(7, 'Where is your company located?', 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'),
(8, 'Where is your company located?', 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'),
(9, 'Where is your company located?', 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'),
(10, 'Please clear about pricing menu for training in your company?', 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.');

-- --------------------------------------------------------

--
-- Table structure for table `hire`
--

CREATE TABLE `hire` (
  `id` int(11) NOT NULL,
  `company` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hire`
--

INSERT INTO `hire` (`id`, `company`, `email`, `phone`, `category`) VALUES
(7, 'Tribhuvan university/Institute of engineering(IOE)', 'nepali2244manoj@gmail.com', '9863491739', '3D design'),
(8, 'Tribhuvan university/Institute of engineering(IOE)', 'nepali2244manoj@gmail.com', '9863491739', '3D design'),
(9, 'Tribhuvan university/Institute of engineering(IOE)', 'nepali2244manoj@gmail.com', '9863491739', '3D design'),
(10, 'Tribhuvan university/Institute of engineering(IOE)', 'nepali2244manoj@gmail.com', '9863491739', '3D design'),
(11, 'Tribhuvan university/Institute of engineering(IOE)', 'nepali2244manoj@gmail.com', '9863491739', '3D design'),
(12, 'Tribhuvan university/Institute of engineering(IOE)', 'nepali2244manoj@gmail.com', '9863491739', '3D design'),
(13, 'Tribhuvan university/Institute of engineering(IOE)', 'nepali2244manoj@gmail.com', '9863491739', '3D design');

-- --------------------------------------------------------

--
-- Table structure for table `intro`
--

CREATE TABLE `intro` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slogan` varchar(255) NOT NULL,
  `youtubeurl` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `intro`
--

INSERT INTO `intro` (`id`, `title`, `slogan`, `youtubeurl`, `image`) VALUES
(10, 'Let\'s Grow More.', 'Design is the beauty of turning constraints into advantages.', 'www.youtube.com', '3d-design.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `email`, `pass`) VALUES
(1, 'uvraj@gmail.com', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `mission`
--

CREATE TABLE `mission` (
  `id` int(11) NOT NULL,
  `mission` varchar(3000) NOT NULL,
  `missionimage` varchar(3000) NOT NULL,
  `plan` varchar(3000) NOT NULL,
  `planimage` varchar(255) NOT NULL,
  `goal` varchar(255) NOT NULL,
  `goalimage` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mission`
--

INSERT INTO `mission` (`id`, `mission`, `missionimage`, `plan`, `planimage`, `goal`, `goalimage`) VALUES
(5, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has supppp', 'mission.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has su', 'plan.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has su', 'goal1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `notification` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`id`, `notification`) VALUES
(15, 'dfgdgd'),
(16, ' Thismanojnepali@gmail.com Subscribed your Website'),
(17, 'Manoj Nepali Messaged your Team'),
(18, 'Manoj Nepali Messaged your Team'),
(19, 'Manoj Nepali Messaged your Team'),
(20, 'Manoj Nepali Messaged your Team');

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `id` int(11) NOT NULL,
  `company` varchar(255) NOT NULL,
  `about` varchar(255) NOT NULL,
  `services` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `youtube` varchar(255) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`id`, `company`, `about`, `services`, `country`, `address`, `phone`, `email`, `youtube`, `facebook`, `image`) VALUES
(1, 'SolidWork Nepal.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the manojhehe', '3d Design, Simulation, Fabrication.', 'Nepal', 'Langhali, 08\r\nDharan Nepal', '9863491739', 'doengineer34@gmail.com', 'www.youtube.com.', 'https://www.facebook.com/manoj.nepali.5891', 'profile-img.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(3000) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `title`, `description`, `image`) VALUES
(13, '3D Design', 'A company offering 3D design services in Nepal using SolidWorks can provide the following services: product design and development,  3D modeling and animation,  technical drawings and documentation, CAD/CAM design services, industrial design and concept d', '3d.jpg'),
(14, 'Simulation', 'SolidWorks Nepal offers a comprehensive range of simulation services that use the advanced tools in SolidWorks to analyze and predict the performance of your products. Our services include finite element analysis (FEA), computational fluid dynamics (CFD),', 'simu.jpg'),
(15, 'Fabrication', 'SolidWorks Nepal offers a comprehensive range of fabrication services that utilize the latest technology and tools in SolidWorks. Our services include CNC machining,  sheet metal fabrication, welding, prototyping, assembly and integration, and surface fin', 'fab.jpg'),
(16, 'Training', 'SolidWorks Nepal offers comprehensive training services to help you enhance your skills and knowledge in 3D design, fabrication, and simulation. Our training options include online courses, physical courses held in our state-of-the-art facilities, and liv', 'training.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `simulation`
--

CREATE TABLE `simulation` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `project_date` varchar(255) NOT NULL,
  `client` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` varchar(3000) NOT NULL,
  `image` varchar(255) NOT NULL,
  `main_desc` text NOT NULL,
  `simu_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `simulation`
--

INSERT INTO `simulation` (`id`, `title`, `category`, `project_date`, `client`, `url`, `description`, `image`, `main_desc`, `simu_id`) VALUES
(15, 'dfgd', 'dfgdfg', 'dfgdf', 'dfgdfg', 'dfgdfg', 'dsgdfg', '3d.jpg', '<h3>Introduction</h3><p><strong style=\"margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Lorem Ipsum</strong><span style=\"color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p><ul><li>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li><li>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li><li>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li><br></ul>', '144009166');

-- --------------------------------------------------------

--
-- Table structure for table `simulation_image`
--

CREATE TABLE `simulation_image` (
  `image_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `work_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `simulation_image`
--

INSERT INTO `simulation_image` (`image_id`, `image`, `work_id`) VALUES
(21, 'slides-1.jpg', 144009166),
(22, 'slides-2.jpg', 144009166);

-- --------------------------------------------------------

--
-- Table structure for table `subscribe`
--

CREATE TABLE `subscribe` (
  `id` int(11) NOT NULL,
  `subscribe` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subscribe`
--

INSERT INTO `subscribe` (`id`, `subscribe`) VALUES
(2, 'manoj8177nepali@gmail.com'),
(3, 'manojnepali@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `heading` varchar(3000) NOT NULL,
  `name` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `facebook` varchar(3000) NOT NULL,
  `twitter` varchar(255) NOT NULL,
  `insta` varchar(255) NOT NULL,
  `linkdin` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `heading`, `name`, `designation`, `facebook`, `twitter`, `insta`, `linkdin`, `image`) VALUES
(3, 'vvv', 'edr', 'ert', 're', 'erre', 're', 'ert', '3d.jpg'),
(4, 'vvv', 'edr', 'ert', 're', 'erre', 're', 'ert', '3d.jpg'),
(5, 'undefined', 'f', 'sd', 'sd', 'sd', 'sd', 'dsa', 'team-3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `testomonial`
--

CREATE TABLE `testomonial` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `visitor`
--

CREATE TABLE `visitor` (
  `id` int(11) NOT NULL,
  `visitor_count` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `visitor`
--

INSERT INTO `visitor` (`id`, `visitor_count`) VALUES
(1, '306');

-- --------------------------------------------------------

--
-- Table structure for table `webinar`
--

CREATE TABLE `webinar` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `guest` varchar(255) NOT NULL,
  `webinar_date` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `webno` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `webinar`
--

INSERT INTO `webinar` (`id`, `title`, `guest`, `webinar_date`, `duration`, `url`, `description`, `image`, `webno`) VALUES
(2, 'jksahdkljhdlkjs', 'jsahd;jkhskjlg', 'sdhakhsdg', 'jkisahdjkhgk', 'suhdgkiuashg', 'kjhsdkjghsdlkjghl', 'webinar.jpg', 'c0a41b2e62'),
(3, 'jksahdkljhdlkjs', 'jsahd;jkhskjlg', 'sdhakhsdg', 'jkisahdjkhgk', 'suhdgkiuashg', 'manoj nepali', 'webinar.jpg', '6565683a99');

-- --------------------------------------------------------

--
-- Table structure for table `work3d`
--

CREATE TABLE `work3d` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `project_date` varchar(255) NOT NULL,
  `client` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` varchar(3000) NOT NULL,
  `image` varchar(255) NOT NULL,
  `main_desc` text NOT NULL,
  `work3d_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `work3d`
--

INSERT INTO `work3d` (`id`, `title`, `category`, `project_date`, `client`, `url`, `description`, `image`, `main_desc`, `work3d_id`) VALUES
(28, 'uhiuhikuf', 'dfhdjfuh', 'dfhjkdf', 'kjdfhkgjdf', 'djkfhkdhg', 'kjdfhgkjdhfgkjhdfg', '3d.jpg', '<h2>Introduction<br></h2><p><strong style=\"margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Lorem Ipsum</strong><span style=\"color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span><br></p>', '685502228'),
(29, 'uhiuhikuf', 'dfhdjfuh', 'dfhjkdf', 'kjdfhkgjdf', 'djkfhkdhg', 'kjdfhgkjdhfgkjhdfg', '3d.jpg', '<h2>Introduction<br></h2><p><strong style=\"margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Lorem Ipsum</strong><span style=\"color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span><br></p>', '685502228');

-- --------------------------------------------------------

--
-- Table structure for table `work3d_image`
--

CREATE TABLE `work3d_image` (
  `image_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `work_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `work3d_image`
--

INSERT INTO `work3d_image` (`image_id`, `image`, `work_id`) VALUES
(35, 'card.jpg', 685502228),
(36, 'company.jpg', 685502228);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactmessage`
--
ALTER TABLE `contactmessage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `designer`
--
ALTER TABLE `designer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `design_3d`
--
ALTER TABLE `design_3d`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `design_simu`
--
ALTER TABLE `design_simu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event_image`
--
ALTER TABLE `event_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fabrication`
--
ALTER TABLE `fabrication`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fabrication_image`
--
ALTER TABLE `fabrication_image`
  ADD PRIMARY KEY (`image_id`);

--
-- Indexes for table `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hire`
--
ALTER TABLE `hire`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `intro`
--
ALTER TABLE `intro`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mission`
--
ALTER TABLE `mission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `simulation`
--
ALTER TABLE `simulation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `simulation_image`
--
ALTER TABLE `simulation_image`
  ADD PRIMARY KEY (`image_id`);

--
-- Indexes for table `subscribe`
--
ALTER TABLE `subscribe`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testomonial`
--
ALTER TABLE `testomonial`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `visitor`
--
ALTER TABLE `visitor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `webinar`
--
ALTER TABLE `webinar`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `work3d`
--
ALTER TABLE `work3d`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `work3d_image`
--
ALTER TABLE `work3d_image`
  ADD PRIMARY KEY (`image_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `contactmessage`
--
ALTER TABLE `contactmessage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `designer`
--
ALTER TABLE `designer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `design_3d`
--
ALTER TABLE `design_3d`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `design_simu`
--
ALTER TABLE `design_simu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `event_image`
--
ALTER TABLE `event_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `fabrication`
--
ALTER TABLE `fabrication`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `fabrication_image`
--
ALTER TABLE `fabrication_image`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `faq`
--
ALTER TABLE `faq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `hire`
--
ALTER TABLE `hire`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `intro`
--
ALTER TABLE `intro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `mission`
--
ALTER TABLE `mission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `simulation`
--
ALTER TABLE `simulation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `simulation_image`
--
ALTER TABLE `simulation_image`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `subscribe`
--
ALTER TABLE `subscribe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `testomonial`
--
ALTER TABLE `testomonial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `visitor`
--
ALTER TABLE `visitor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `webinar`
--
ALTER TABLE `webinar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `work3d`
--
ALTER TABLE `work3d`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `work3d_image`
--
ALTER TABLE `work3d_image`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
