// import dependencies and packages
const inquirer = require('inquirer');


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
    .then()
// When chose to view all departments, I am presented with a formatted table showing department names and department ids
