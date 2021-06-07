const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Products = sequelize.define('Products', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT
  }
}, {
  schema: 'supermarket',
  tableName: 'products'
});

module.Products = Products;