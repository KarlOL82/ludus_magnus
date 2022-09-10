DROP DATABASE IF EXISTS ludus_db;

CREATE DATABASE ludus_db;

USE ludus_db;

CREATE TABLE dev_table (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  games VARCHAR(30) NOT NULL
  
);

-- ALTER TABLE dev_table
-- ADD games_column VARCHAR(30) ;
-- CREATE TABLE seeded_games (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   game VARCHAR(30) NOT NULL
-- --   FOREIGN KEY (dev_names)
-- );
