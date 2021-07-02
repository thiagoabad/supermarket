//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const sequelize = require('../db/connection');
let Products = require('../models/products');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../index');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Books', () => {
    beforeEach((done) => { //Before each test we empty the database
        try {
            Products.truncate().then(() => done());
        } catch (e) {
            logger.error('Error inside test: ' + e);
        }
    });
  /*
  * Test the /GET route
  */
  describe('/GET product', () => {
      it('it should GET all the products', (done) => {
        chai.request(app)
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