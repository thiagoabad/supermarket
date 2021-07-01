const customExpress = require('./config/customExpress');
const connection = require('./db/connection');
const logger = require('./config/winston');
const Umzug = require('umzug');

connection.authenticate()
.then(() => {
    logger.info('Connection has been established successfully.');

    const umzug = new Umzug({
        migrations: {
          path: './migrations',
          params: [
            connection.getQueryInterface()
          ]
        },
        storage: 'sequelize',
        storageOptions: {
          sequelize: connection,
          schema: 'supermarket'
        }
      });
      
      (async () => {
        await umzug.up()
        logger.info('All migrations performed successfully')
      })();

    const app = customExpress();
    app.listen(3000, () => logger.info('Server running on port 3000'));
})
.catch((error) => {
    logger.error('Unable to connect to the database:', error);
});
