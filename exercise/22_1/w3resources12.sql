-- 12. Write a SQL statement to create a table countries including columns
-- country_id, country_name and region_id and
-- make sure that the column country_id will be unique and store an auto incremented value.

CREATE TABLE IF NOT EXISTS countries(
  country_id INT PRIMARY KEY AUTO_INCREMENT,
  country_name VARCHAR(100) NOT NULL,
  region_id CHAR(2) NOT NULL
);
