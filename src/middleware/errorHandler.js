const formatError = (err) => {
  return {
    title: err.name,
    detail: err.message,
    status: err.status || err.statusCode || 500,
    meta: {
      backtrace: err.stack
    }
  };
};

const errorHandler = async (ctx, next) => {
  try {
    await next();
    const status = ctx.status || 404;
    if (status === 404) ctx.throw(404);
  } catch (err) {
    const formattedError = formatError(err);
    ctx.status = formattedError.status;

    ctx.app.emit('error', err, ctx);

    switch (ctx.accepts('json', 'text')) {
      case 'json':
        ctx.type = 'application/json';
        ctx.body = formattedError;
        break;

      case 'text':
        ctx.type = 'text/plain';
        ctx.body = formattedError;
        break;
    }
  }
};

module.exports = errorHandler;
