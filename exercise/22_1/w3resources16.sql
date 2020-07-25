-- 16. Write a SQL statement to create a table employees including columns
-- employee_id, first_name, last_name, email, phone_number hire_date, job_id, salary, commission,
-- manager_id and department_id and make sure that,
-- the employee_id column does not contain any duplicate value at the time of insertion, and
-- the foreign key column department_id, reference by the column department_id of departments table,
-- can contain only those values which are exists in the departments table and another foreign key column
-- job_id, referenced by the column job_id of jobs table, can contain only those values which are exists in
-- the jobs table. The InnoDB Engine have been used to create the tables.

-- Assume that the structure of two tables departments and jobs.

-- +-----------------+--------------+------+-----+---------+-------+
-- | Field           | Type         | Null | Key | Default | Extra |
-- +-----------------+--------------+------+-----+---------+-------+
-- | DEPARTMENT_ID   | decimal(4,0) | NO   | PRI | 0       |       |
-- | DEPARTMENT_NAME | varchar(30)  | NO   |     | NULL    |       |
-- | MANAGER_ID      | decimal(6,0) | YES  |     | NULL    |       |
-- | LOCATION_ID     | decimal(4,0) | YES  |     | NULL    |       |
-- +-----------------+--------------+------+-----+---------+-------+

-- +------------+--------------+------+-----+---------+-------+
-- | Field      | Type         | Null | Key | Default | Extra |
-- +------------+--------------+------+-----+---------+-------+
-- | JOB_ID     | varchar(10)  | NO   | PRI |         |       |
-- | JOB_TITLE  | varchar(35)  | NO   |     | NULL    |       |
-- | MIN_SALARY | decimal(6,0) | YES  |     | NULL    |       |
-- | MAX_SALARY | decimal(6,0) | YES  |     | NULL    |       |
-- +------------+--------------+------+-----+---------+-------+


CREATE TABLE IF NOT EXISTS employees(
  employee_id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  phone_number VARCHAR(30) NOT NULL,
  hire_date DATE NOT NULL,
  JOB_ID varchar(10) NOT NULL,
  salary DECIMAL(8, 2) NOT NULL,
  commission DECIMAL(2, 2) NOT NULL,
  manager_id decimal(6,0),
  DEPARTMENT_ID decimal(4,0),
  FOREIGN KEY (department_id) REFERENCES departments(DEPARTMENT_ID),
  FOREIGN KEY (JOB_ID) REFERENCES jobs(JOB_ID)
) ENGINE=InnoDB;
