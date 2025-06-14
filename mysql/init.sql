-- init.sql
CREATE DATABASE IF NOT EXISTS TODOTASK CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE TODOTASK;

CREATE TABLE tb_users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(20) DEFAULT 'user',
  timezone VARCHAR(50) DEFAULT 'Asia/Seoul',
  profile_image VARCHAR(255),
  bio TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE tb_task (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  start_time DATETIME NOT NULL,
  end_time DATETIME NOT NULL,
  priority ENUM('low','medium','high') DEFAULT 'medium',
  status ENUM('pending','completed','canceled') DEFAULT 'pending',
  tag VARCHAR(50),
  createed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES tb_users(id) ON DELETE CASCADE
);
