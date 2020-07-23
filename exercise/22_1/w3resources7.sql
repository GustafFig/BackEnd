-- EXERCISE 22_1
-- https://www.w3resource.com/mysql-exercises/create-table-exercises/

-- 7. Write a SQL statement to create a table named countries including columns
-- country_id, country_name and region_id and make sure that no countries
-- except Italy, India and China will be entered in the table.

CREATE TABLE countries(
  country_id INT PRIMARY KEY AUTO_INCREMENT,
  country_name VARCHAR(100),
  region_id INT,
  CONSTRAINT `not allowed country` CHECK (country_name IN ('China', 'Italy', 'India'))
);
