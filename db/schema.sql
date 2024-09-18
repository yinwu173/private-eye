DROP DATABASE IF EXISTS employeeTable_db;
CREATE DATABASE employeeTable_db;

\c employeeTable_db;


CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
)