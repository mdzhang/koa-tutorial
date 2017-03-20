const Koa = require('koa');
const indexRoutes = require('./index');
const expect = require('expect.js');
const supertest = require('supertest');

const app = new Koa().use(indexRoutes.routes());
const request = supertest.agent(app.listen());

describe('/', () => {
  it('redirects to /ping', done => {
    request
      .get('/')
      .expect(301)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.header['location']).to.eql('/ping');
        done();
      });
  });
});

describe('/ping', () => {
  it('says OK', done => {
    request
      .get('/ping')
      .expect(200)
      .expect('OK', done);
  });
});
