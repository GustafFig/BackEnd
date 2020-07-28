-- https://www.w3resource.com/mysql-exercises/alter-table-statement/alter-table-exercise-7.php

-- Write a SQL statement to drop the existing foreign key fk_job_id from job_history table on job_id column which is referencing to the job_id of jobs table.

ALTER TABLE job_history
DROP CONSTRAINT fk_job_id;
