-- 15. Write a SQL statement to create a table employees including columns
-- employee_id, first_name, last_name, email, phone_number hire_date, job_id, salary, commission,
-- manager_id and department_id and make sure that,
-- the employee_id column does not contain any duplicate value at the time of insertion and
-- the foreign key columns combined by department_id and manager_id columns contain only those unique
-- combination values, which combinations are exists in the departments table

CREATE TABLE IF NOT EXISTS empoyees(
  employee_id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  email  VARCHAR(50) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  hire_date DATE NOT NULL,
  job_id INT NOT NULL,
  salary INT NOT NULL,
  commission SMALLINT NOT NULL,
  manager_id INT NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id) REFERENCES departments(id, manager_id)
);
