// import dependencies and packages
const inquirer = require('inquirer');
const connection = require('./db');

// When app starts, I am presented with view all: departments, roles, employees
// Add: department, role, employee
// Update an employee role
inquirer
    .prompt([
        {
            type: 'list',
            name: 'track',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Quit'
            ]
        }
    ])
    .then((track) => {
        switch (track) {
            case 'View all departments':
                viewAllDepartments();
                break;
            case 'View all roles':
                viewAllRoles();
                break;
            case 'View all employees':
                viewAllEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployeeRole();
                break;
        }
    })

// When chose to view all departments, I am presented with a formatted table showing department names and department ids
function viewAllDepartments() {
    const sql = `SELECT id, name AS department, 
    FROM department`;
    connection.query(sql, (err, res) => {
        if (err) {
            console.error('Error getting departments', err);
            return;
        }
        console.table(res);
        console.log('Viewing all departments');
    });
};

// WHEN I choose to view all roles THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
function viewAllRoles() {
    const sql = `SELECT r.id, r.title, r.salary, name AS department,
    FROM role
    LEFT JOIN department ON r.department_id = department_id`;
    connection.query(sql, (err, res) => {
        if (err) {
            console.error('Error getting roles', err);
            return;
        }
        console.table(res);
        console.log('Viewing all roles');
    });
};

// WHEN I choose to view all employees THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
function viewAllEmployees() {
    const sql = `SELECT e.id, e.first_name, e.last_name, r.title, name AS department, r.salary, manager_id, 
    FROM employee
    LEFT JOIN role ON e.role_id = role_id
    LEFT JOIN department ON r.department_id = department_id`;
    connection.query(sql, (err, res) => {
        if (err) {
            console.error('Error getting employees', err);
            return;
        }
        console.table(res);
        console.log('Viewing all employees');
    });
};

// WHEN I choose to add a department THEN I am prompted to enter the name of the department and that department is added to the database
