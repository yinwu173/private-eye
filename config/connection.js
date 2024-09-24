const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
);

module.exports = sequelize;