-- EXERCISE 22_1
-- https://www.w3resource.com/mysql-exercises/create-table-exercises/

-- 6. Write a SQL statement to create a table named jobs including columns
-- job_id, job_title, min_salary, max_salary
-- and check whether the max_salary amount exceeding the upper limit 25000.

CREATE TABLE jobs(
  job_id INT PRIMARY KEY AUTO_INCREMENT,
  job_title VARCHAR(100),
  min_salary DECIMAL(8, 2),
  max_salary DECIMAL(8, 2) CHECK (max_salary < 25000)
);
