DROP DATABASE IF EXISTS ecommerce_db;
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE shoes (
  id INT NOT NULL,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE t_shirts (
  id INT NOT NULL,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE button_down (
  id INT NOT NULL,
  name VARCHAR(50) NOT NULL
);
