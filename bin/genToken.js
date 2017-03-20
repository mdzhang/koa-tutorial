#!/usr/bin/env node

/* eslint-disable no-console */
const jwt = require('jsonwebtoken');
const config = require('config');

const token = jwt.sign({
  aud: config.get('auth0.audience'),
}, config.get('auth0.secret'));

console.log(`Bearer ${token}`);
