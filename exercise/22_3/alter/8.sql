-- https://www.w3resource.com/mysql-exercises/alter-table-statement/alter-table-exercise-7.php

-- Write a SQL statement to add a primary key for the columns location_id in the locations table.

ALTER TABLE locations
MODIFY COLUMN location_id INT PRIMARY KEY AUTO_INCREMENT;
