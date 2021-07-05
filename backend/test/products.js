process.env.NODE_ENV = 'test';
let Products = require('../models/products');
let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);
describe('Books', () => {
    beforeEach((done) => {
        try {
            Products.truncate().then(() => done());
        } catch (e) {
            logger.error('Error inside test: ' + e);
        }
    });
    describe('/GET product', () => {
        it('it should GET all the products', (done) => {
        chai.request('http://localhost:3000')
            .get('/product')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
        });
    });
});
