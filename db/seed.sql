INSERT INTO department (name) 
VALUES ('Legal'),
       ('Engineering'),
       ('Accounting');

INSERT INTO role (title, salary, department_id)
VALUES ('Lawyer', 100000, 101),
       ('Software Engineer', 150000, 102),
       ('Accountant', 200000, 103);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Bob', 'Chen', 01, 3001),
       ('John', 'Doe', 02, 4002),
       ('Kevin', 'Brown', 03, 5003),
       ('Mia', 'Su', 04, 6004),
       ('James', 'Zhang', 05, 7005);