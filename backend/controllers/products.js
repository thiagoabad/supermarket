const Products = require('../models/products');
const utils = require('../helpers/utils');
const logger = require('../config/winston');

module.exports = app => {
    app.get('/product', async (req, res) => {
        const products = await Products.findAll();
        logger.info("GET /product");
        res.send(products);
    })

    app.get('/product/:id', async (req, res) => {
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
                logger.info("GET /product/:id");
                res.send(products);
            }
        }
        catch (e) {
            logger.error(e);
            res.status(500);
            res.send({'error': e});
        }
    })

    app.post('/product', async (req, res) => {
        const product = req.body;
        try {
            const createdProduct = await Products.create({ id: utils.uuidv4(), name: product.name, price: product.price });
            logger.info("POST /product");
            res.status(201);
            res.send(createdProduct);
        }
        catch (e) {
            logger.error(e);
            res.status(500);
            res.send({'error': e});
        }
    }) 

    app.put('/product/:id', async (req, res) => {
        const id = req.params.id
        const values = req.body
        try{
            logger.info("PUT /product/:id");
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

    app.delete('/product/:id', async (req, res) => {
        const id = req.params.id
        try {
            logger.info("DELETE /product/:id");
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