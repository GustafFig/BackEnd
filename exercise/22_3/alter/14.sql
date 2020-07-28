-- https://www.w3resource.com/mysql-exercises/alter-table-statement/alter-table-exercise-7.php

-- Write a SQL statement to add an index named indx_job_id on job_id column in the table job_history.

ALTER TABLE job_history
ADD CONSTRAINT INDEX indx_job_id(job_id);
