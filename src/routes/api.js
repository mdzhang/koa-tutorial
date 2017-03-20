const Router = require('koa-router');
const authenticate = require('../middleware/authenticate');

const router = new Router({
  prefix: '/api',
});

router.use(authenticate);

router.redirect('/', '/api/ping');

router.get('/ping', (ctx) => {
  ctx.body = 'Authorized OK';
});

module.exports = router;
