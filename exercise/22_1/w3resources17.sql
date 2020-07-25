-- 17. Write a SQL statement to create a table employees including columns employee_id, first_name, last_name, job_id, salary and make sure that, the employee_id column does not contain any duplicate value at the time of insertion, and the foreign key column job_id, referenced by the column job_id of jobs table, can contain only those values which are exists in the jobs table. The InnoDB Engine have been used to create the tables. The specialty of the statement is that, The ON UPDATE CASCADE action allows you to perform cross-table update and ON DELETE RESTRICT action reject the deletion. The default action is ON DELETE RESTRICT.

CREATE TABLE employees(
  employee_id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  job_id VARCHAR(2) NOT NULL,
  salary INT NOT NULL,
  FOREIGN KEY(DEPARTMENT_ID) REFERENCES  departments(DEPARTMENT_ID),
  FOREIGN KEY(JOB_ID) REFERENCES jobs(JOB_ID)
) ENGINE=InnoDB;
