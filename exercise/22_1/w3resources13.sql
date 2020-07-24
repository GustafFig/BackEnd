-- 13. Write a SQL statement to create a table countries including columns
-- country_id, country_name and region_id and
-- make sure that the combination of columns country_id and region_id will be unique.

CREATE TABLE IF NOT EXISTS countries(
  country_id INT AUTO_INCREMENT,
  country_name VARCHAR(100) NOT NULL,
  region_id CHAR(2) NOT NULL,
  UNIQUE KEY (country_id, region_id)
);
