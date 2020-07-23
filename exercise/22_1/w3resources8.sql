-- EXERCISE 22_1
-- https://www.w3resource.com/mysql-exercises/create-table-exercises/

-- 8. Write a SQL statement to create a table named job_histry including columns
-- employee_id, start_date, end_date, job_id and department_id
-- and make sure that the value against column end_date
-- will be entered at the time of insertion to the format like '--/--/----'.

CREATE TABLE job_histry(
  employee_id INT PRIMARY KEY AUTO_INCREMENT,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL CHECK(end_date LIKE '__/__/____'),
  job_id INT NOT NULL,
  department_id NOT NULL
);
