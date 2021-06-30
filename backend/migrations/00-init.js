const Sequelize = require('sequelize')

// All migrations must provide a `up` and `down` async functions

module.exports = {
  // `query` was passed in the `index.js` file
  up: async (query) => {
    await query.createTable({tableName: 'products', schema: 'supermarket'}, {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.REAL
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
      })
  },
  down: async (query) => {
    await query.dropTable('users')
  }
}