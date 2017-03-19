const Koa = require('koa');
const logRequest = require('./middleware/logRequest');

const app = new Koa();

// ----------------------------------------
// logger
// ----------------------------------------
app.use(logRequest);

// ----------------------------------------
// routes
// ----------------------------------------
app.use(ctx => {
  ctx.body = 'Hello World';
});

// ----------------------------------------
// server start
// ----------------------------------------
app.listen(3000);
