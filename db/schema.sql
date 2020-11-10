
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE top5000 (
  id INT NOT NULL,
  burger_name VARCHAR(100) NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);