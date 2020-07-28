-- https://www.w3resource.com/mysql-exercises/alter-table-statement/alter-table-exercise-7.php

-- Write a SQL statement to drop the existing primary from the table locations on a combination of columns location_id and country_id.

ALTER TABLE locations DROP PRIMARY KEY;
