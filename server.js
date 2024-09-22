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
    connection.query(sql, (err, response) => {
        if (err) {
            console.error('Error getting departments', err);
            return;
        }
        console.table(response);
        console.log('Viewing all departments');
    });
};
