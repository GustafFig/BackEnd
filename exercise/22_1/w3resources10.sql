-- EXERCISE 22_1
-- https://www.w3resource.com/mysql-exercises/create-table-exercises/

-- 10. Write a SQL statement to create a table named jobs including columns
-- job_id, job_title, min_salary and max_salary, and make sure that,
-- the default value for job_title is blank and min_salary is 8000 and max_salary is NULL
-- will be entered automatically at the time of insertion if no value assigned for the specified columns.

CREATE TABLE jobs(
  job_id INT PRIMARY KEY AUTO_INCREMENT,
  job_title VARCHAR(100) NOT NULL DEFAULT '',
  min_salary DECIMAL(8, 2) NOT NULL DEFAULT 8000,
  max_salary DECIMAL(8, 2)
);
