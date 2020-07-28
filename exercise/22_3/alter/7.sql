-- https://www.w3resource.com/mysql-exercises/alter-table-statement/alter-table-exercise-7.php

-- MySQL Alter Table Statement Exercises: Change the name of the column state_province to state, keeping the data type and size same

ALTER TABLE locations CHANGE ON state_province state VARCHAR(25);

-- The type of the column and the name of DB is given on the exercise;
