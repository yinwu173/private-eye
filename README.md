# Employee Tracker 

## About the Project

* The purpose of this project is to create an app that allows a business owners to view and manage the departments, roles, and employees in their company so that can organize and plan their businesses.

## Acceptance Criteria

* WHEN I start the application THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

* WHEN I choose to view all departments THEN I am presented with a formatted table showing department names and department ids

* WHEN I choose to view all roles THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

* WHEN I choose to view all employees THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

* WHEN I choose to add a department THEN I am prompted to enter the name of the department and that department is added to the database

* WHEN I choose to add a role THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

* WHEN I choose to add an employee THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

* WHEN I choose to update an employee role THEN I am prompted to select an employee to update and their new role and this information is updated in the database

### Hints

* Install necessary packages to keep your app running. For example, we will need the inquirer along with pg package. Utilize npm i inquirer and npm i pg to install these packages. Additional pacakges that may help with the UI/UX of the app is the package for console.table.

### Resources

* [Switch Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

* For lines 30-53 of server.js file, I received assistance from Xpert Learning. We are able to utilize switch statements if there are multiple if...else... statements. Switch statements are more readable compared to if-else statements. Unlike if..else... statements that checks whether or not the condition is satisfied, switch statements decides which case has to be executed.

* [Creating Prompts](https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts)

* [Console Table](https://developer.mozilla.org/en-US/docs/Web/API/console/table_static)

* [Npm Sequelize](https://www.npmjs.com/package/sequelize)