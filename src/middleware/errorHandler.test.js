const Koa = require('koa');
const supertest = require('supertest');
const errorHandler = require('./errorHandler');
const authenticate = require('./authenticate');

describe('errorHandler', () => {
  it('handles unknown route', done => {
    const app = new Koa().use(errorHandler);
    const request = supertest.agent(app.listen());

    request
      .get('/foo')
      .expect(404)
      .expect({
        detail: 'Not Found',
        status: 404,
        title: 'NotFoundError',
      }, done);
  });

  it('handles unauthorized', done => {
    const app = new Koa()
      .use(errorHandler)
      .use(authenticate);
    const request = supertest.agent(app.listen());

    request
      .get('/foo')
      .expect(401)
      .expect({
        detail: 'No authentication token found',
        status: 401,
        title: 'UnauthorizedError',
      }, done);
  });

  it('handles internal error', done => {
    const app = new Koa()
      .use(errorHandler)
      .use(() => {
        throw new Error('Whoops!');
      });
    const request = supertest.agent(app.listen());

    request
      .get('/')
      .expect(500)
      .expect({
        detail: 'Whoops!',
        status: 500,
        title: 'Error',
      }, done);
  });
});
