const { Sequelize } = require('sequelize');

const connection = new Sequelize('postgres://postgres:Postgres2021!@192.168.1.72:5432/supermarket')

module.exports = connection