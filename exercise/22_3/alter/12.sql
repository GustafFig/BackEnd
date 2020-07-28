-- https://www.w3resource.com/mysql-exercises/alter-table-statement/alter-table-exercise-7.php

-- Write a SQL statement to add a foreign key constraint named fk_job_id on job_id column of job_history table referencing to the primary key job_id of jobs table.

ALTER TABLE job_history
ADD CONSTRAINT fk_job_id FOREIGN KEY (job_id)
REFERENCES jobs(job_id);
