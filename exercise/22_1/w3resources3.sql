-- EXERCISE 22_1
-- https://www.w3resource.com/mysql-exercises/create-table-exercises/

-- 3. Write a SQL statement to create the structure of a table dup_countries similar to countries.

CREATE TABLE dup_countries
LIKE countries;

DESC dup_countries;
