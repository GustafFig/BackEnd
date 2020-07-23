-- EXERCISE 22_1
-- https://www.w3resource.com/mysql-exercises/create-table-exercises/

-- 4. Write a SQL statement to create a duplicate copy of countries table including
-- structure and data by name dup_countries.

CREATE TABLE dup_countries AS SELECT * FROM countries;
