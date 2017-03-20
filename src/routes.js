const router = require('koa-router')();

router.redirect('/', '/health');

router.get('/health', (ctx) => {
  ctx.body = 'OK';
});

module.exports = router;
