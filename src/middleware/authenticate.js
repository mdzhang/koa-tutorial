const jwt = require('koa-jwt');
const config = require('config');

const authenticate = jwt({
  secret: config.get('auth0.secret'),
  audience: config.get('auth0.audience'),
});

module.exports = authenticate;
