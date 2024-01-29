CREATE TABLE `digimons` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `img` VARCHAR(255) NOT NULL,
  `level` VARCHAR(15) NOT NULL
);

CREATE TABLE `user` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `email` VARCHAR(50)  NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `is_admin` BOOLEAN DEFAULT FALSE,
  `digi_point` INT DEFAULT '0',
  `register_date` DATE NOT NULL
);

CREATE TABLE `messages` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `message` VARCHAR(255) NOT NULL,
  `received` DATE NOT NULL,
  `user_id` INT
);

CREATE TABLE `collected` (
  `digimon_id` INT,
  `user_id` INT
);

ALTER TABLE `messages` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `collected` ADD FOREIGN KEY (`digimon_id`) REFERENCES `Digimons` (`id`);

ALTER TABLE `collected` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
