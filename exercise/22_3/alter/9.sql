-- -- https://www.w3resource.com/mysql-exercises/alter-table-statement/alter-table-exercise-7.php

-- Write a SQL statement to add a primary key for a combination of columns location_id and country_id.

ALTER TABLE locations
ADD PRIMARY KEY (location_id, country_id);