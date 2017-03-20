const Router = require('koa-router');
const api = require('./api');

const router = new Router();

router.redirect('/', '/ping');

router.get('/ping', (ctx) => {
  ctx.body = 'OK';
});

router.use(api.routes());

module.exports = router;
