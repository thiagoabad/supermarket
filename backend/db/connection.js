const { Sequelize } = require('sequelize');

const connection = new Sequelize('postgres://postgres:'+process.env.DB_PASS+'@'+process.env.DB_HOST+':'+process.env.DB_PORT+'/supermarket')

module.exports = connection