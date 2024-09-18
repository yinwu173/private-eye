DROP DATABASE IF EXISTS employeeTable_db;
CREATE DATABASE employeeTable_db;

\c employeeTable_db;


CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL -- to hold department name
)

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL, -- to hold role title
    salary DECIMAL NOT NULL, -- to hold role salary
    department_id INTEGER NOT NULL
)

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL
    manager_id INTEGER NOT NULL
    FOREIGN KEY (role_id) REFERENCES roles(role_id), 
    FOREIGN KEY (manager_id) REFERENCES managers(manager_id)
)