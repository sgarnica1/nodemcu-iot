DROP DATABASE IF EXISTS NODEMCU;

CREATE DATABASE NODEMCU;

USE NODEMCU;

CREATE TABLE TempHumidity (
    id INT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
    temperature INT NOT NULL,
    humidity INT NOT NULL,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO TempHumidity (temperature, humidity) VALUES (20, 50);