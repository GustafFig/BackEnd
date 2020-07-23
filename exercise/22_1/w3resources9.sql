-- EXERCISE 22_1
-- https://www.w3resource.com/mysql-exercises/create-table-exercises/

-- 9. Write a SQL statement to create a table named countries including columns
-- country_id,country_name and region_id
-- and make sure that no duplicate data against column country_id will be allowed at the time of insertion.

CREATE TABLE countries(
  country_id CHAR(2) UNIQUE,
  country_name VARCHAR(100),
  region_id INT
);
