-- EXERCISE 22_1
-- https://www.w3resource.com/mysql-exercises/create-table-exercises/

-- 5. Write a SQL statement to create a table countries set a constraint NULL

CREATE TABLE IF NOT EXISTS countries(
	country_id CHAR(2) NOT NULL,
  country_name VARCHAR(50) NOT NULL,
  region_id INT NOT NULL
);
