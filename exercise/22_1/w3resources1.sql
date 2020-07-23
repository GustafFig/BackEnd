-- EXERCISE 22_1
-- https://www.w3resource.com/mysql-exercises/create-table-exercises/

-- 1. Write a SQL statement to create a simple table countries including columns
-- country_id,country_name and region_id.
CREATE TABLE countries(
	country_id CHAR(2),
    country_name VARCHAR(50),
    region_id INT
);

DESC ex22day1.countries;
