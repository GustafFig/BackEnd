-- 20. Write a SQL statement to create a table employees including columns employee_id, first_name, last_name, job_id, salary and make sure that, the employee_id column does not contain any duplicate value at the time of insertion, and the foreign key column job_id, referenced by the column job_id of jobs table, can contain only those values which are exists in the jobs table. The InnoDB Engine have been used to create the tables. The specialty of the statement is that, The ON DELETE NO ACTION and the ON UPDATE NO ACTION actions will reject the deletion and any updates.

CREATE TABLE IF NOT EXISTS employee (
  employee_id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  job_id INT NOT NULL,
  salary DECIMAL(8, 2) NOT NULL,
  FOREIGN KEY (job_id) REFERENCES jobs(JOB_ID) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB;
