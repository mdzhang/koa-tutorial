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
// routes
// ----------------------------------------
app.use(routes.routes());

// ----------------------------------------
// error handler
// ----------------------------------------
app.use(errorHandler);

// ----------------------------------------
// server start
// ----------------------------------------
app.listen(3000);
