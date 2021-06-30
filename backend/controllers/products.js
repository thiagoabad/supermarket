const Products = require('../models/products');
const utils = require('../helpers/utils');
const logger = require('../config/winston');

module.exports = app => {
    app.get('/products', async (req, res) => {
        const products = await Products.findAll();
        logger.info("products: ", products);
        res.send(products);
    })

    app.get('/products/:id', async (req, res) => {
        const id = req.params.id
        try {
            const products = await Products.findAll({
                where: {
                  id
                }
              });
            if (products.length === 0){
                res.status(404);
                res.send({message: 'Not Found'});
            } else {
                logger.info("products: ", products);
                res.send(products);
            }
        }
        catch (e) {
            logger.error(e);
            res.status(500);
            res.send({'error': e});
        }
    })

    app.post('/products', async (req, res) => {
        const product = req.body;
        try {
            const createdProduct = await Products.create({ id: utils.uuidv4(), name: product.name, price: product.price });
            logger.info("createdProduct: ", createdProduct);
            res.status(201);
            res.send(createdProduct);
        }
        catch (e) {
            logger.error(e);
            res.status(500);
            res.send({'error': e});
        }
    }) 

    app.put('/products/:id', async (req, res) => {
        const id = req.params.id
        const values = req.body
        try{
            await Products.update(values, {
                where: {
                  id
                }
            });
            res.send({'status': 'ok'});
        }
        catch (e){
            logger.error(e);
            res.status(500);
            res.send({'error': e});
        }
    })

    app.delete('/products/:id', async (req, res) => {
        const id = req.params.id
        try {
            await Products.destroy({
                where: {
                  id: id
                }
              });
            res.send({'status': 'ok'});
        } catch (e) {
            logger.error(e);
            res.status(500);
            res.send({'error': e}); 
        }
    })
}