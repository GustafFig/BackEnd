-- https://www.w3resource.com/mysql-exercises/alter-table-statement/alter-table-exercise-7.php

--  Write a SQL statement change the data type of the column country_id to integer in the table locations.

ALTER TABLE locations
MODIFY country_id INT;
