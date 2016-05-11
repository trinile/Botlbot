process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
// var server = require('../server/server.js');
var expect = require('chai').expect;

chai.use(chaiHttp);

describe('API Routes', function() {
  describe('GET /', function() {
    it('should allow access', function(done) {
      chai.request('http://127.0.0.1:1337')
      .get('/')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      })
    })
  })
  describe('GET /retrieve', function() {
    xit('should return all generated tweets in database', function(done) {
      chai.request('http://127.0.0.1:1337')
      .get('/retrieve')
      .end(function(err, res) {
        expect(err).to.be.null;
        // console.log('res body ------>', res.body);
        // res.should.have.status(200);
        // expect(res).to.have.status(200);
        // res.should.be.json;
        // res.body.should.be.a('array');
        // res.body.length.should.equal(4);
        // done();
      })
    })
  })
})
