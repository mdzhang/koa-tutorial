const Router = require('koa-router');
const authenticate = require('../middleware/authenticate');

const router = new Router({
  prefix: '/api',
});

router.use(authenticate);

router.redirect('/', '/ping');

router.get('/ping', (ctx) => {
  ctx.body = 'Authenticated OK';
});

module.exports = router;
