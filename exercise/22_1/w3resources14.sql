-- 14. Write a SQL statement to create a table job_history including columns
-- employee_id, start_date, end_date, job_id and department_id and
-- make sure that, the employee_id column does not contain any duplicate value at
-- the time of insertion and the foreign key column job_id contain only
-- those values which are exists in the jobs table

CREATE TABLE IF NOT EXISTS job_history(
  employee_id INT PRIMARY KEY AUTO_INCREMENT,
  `start_date` DATE,
  end_date DATE,
  job_id INT,
  department_id INT,
  FOREIGN KEY (job_id) REFERENCES jobs(job_id)
);
