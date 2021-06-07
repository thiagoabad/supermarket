//const Products = require('../models/products');
const utils = require('../helpers/utils');
const sequelize = require('../db/connection');

module.exports = app => {
    app.get('/products', (req, res) => {
        //Atendimento.lista(res)
    })

    app.get('/products/:id', (req, res) => {
        const id = parseInt(req.params.id)

        //Atendimento.buscaPorId(id, res)
    })

    app.post('/products', async (req, res) => {
        const product = req.body;
        try {
            const createdProduct = await sequelize.models.Products.create({ id: utils.uuidv4(), name: product.name, price: product.price });
            console.log("createdProduct: ", createdProduct);
            res.send(createdProduct);
        }
        catch (e) {
            console.log(e);
            res.send({'error': e});
        }
    }) 

    app.put('/products/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        //Atendimento.altera(id, valores, res)
    })

    app.delete('/products/:id', (req, res) => {
        const id = parseInt(req.params.id)

        //Atendimento.deleta(id, res)
    })
}