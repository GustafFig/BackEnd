-- https://www.w3resource.com/mysql-exercises/alter-table-statement/alter-table-exercise-7.php

-- Write a SQL statement to add a columns ID as the first column of the table locations.

ALTER TABLE locations
ADD COLUMN ID INT FIRST;
