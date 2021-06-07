const customExpress = require('./config/customExpress');
const connection = require('./db/connection');

connection.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
    const Products = require('./models/products');
})
.catch((error) => {
    console.error('Unable to connect to the database:', error);
})
.finally(() => {
    const app = customExpress();
    app.listen(3000, () => console.log('Server running on port 3000'));
});
