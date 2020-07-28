-- https://www.w3resource.com/mysql-exercises/alter-table-statement/alter-table-exercise-7.php

-- Write a SQL statement to add a column region_id after state_province to the table locations.

ALTER TABLE locations
ADD COLUMN region_id CHAR(2) AFTER state_province;
