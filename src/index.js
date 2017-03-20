const Koa = require('koa');
const logRequest = require('./middleware/logRequest');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes');

const app = new Koa();

// ----------------------------------------
// logger
// ----------------------------------------
app.use(logRequest);

// ----------------------------------------
// error handler
// ----------------------------------------
app.use(errorHandler);

// ----------------------------------------
// routes
// ----------------------------------------
app.use(routes.routes());

// ----------------------------------------
// server start
// ----------------------------------------
app.listen(3000);
