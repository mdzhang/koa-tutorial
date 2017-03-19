const morgan = require('koa-morgan');

const LOG_FORMAT = '[:pid] [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]';

morgan.token('pid', () => process.pid);

const logRequest = morgan(LOG_FORMAT);

module.exports = logRequest;