const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Products = sequelize.define('Products', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.REAL
  }
}, {
  schema: 'supermarket',
  tableName: 'products'
});

module.exports = Products;