const Koa = require('koa');
const apiRoutes = require('./api');
const expect = require('expect.js');
const supertest = require('supertest');
const generateToken = require('../utils/generateToken');

const app = new Koa().use(apiRoutes.routes());
const request = supertest.agent(app.listen());

describe('/api', () => {
  it('redirects to /api/ping', done => {
    request
      .get('/api')
      .set('Authorization', generateToken())
      .expect(301)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.header['location']).to.eql('/api/ping');
        done();
      });
  });

  it('returns 401 if no token given', done => {
    request
      .get('/api')
      .expect(401, done);
  });
});

describe('/api/ping', () => {
  it('says OK', done => {
    request
      .get('/api/ping')
      .set('Authorization', generateToken())
      .expect(200)
      .expect('Authorized OK', done);
  });

  it('returns 401 if no token given', done => {
    request
      .get('/api/ping')
      .expect(401, done);
  });
});
