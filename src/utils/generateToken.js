const jwt = require('jsonwebtoken');
const config = require('config');

const generateToken = () => {
  const token = jwt.sign({
    aud: config.get('auth0.audience'),
  }, config.get('auth0.secret'));

  return `Bearer ${token}`;
};

module.exports = generateToken;
