DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    type VARCHAR(100) NOT NULL,
    status VARCHAR(30) DEFAULT 'pending',
    PRIMARY KEY (id)
)