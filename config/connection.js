const Sequelize = require('sequelize');
require('dotenv').config();

const connection = new Sequelize(
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    process.env.DB_NAME,
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);

module.exports = connection;