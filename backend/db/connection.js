const { Sequelize } = require('sequelize');
const config = require('../config/config');

const connection = new Sequelize('postgres://postgres:'+process.env.DB_PASS+'@'+config.DB_HOST+':'+config.DB_PORT+'/supermarket')

module.exports = connection