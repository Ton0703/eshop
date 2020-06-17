const Router = require('koa-router')
const router = new Router({prefix: '/user'})
const { login, register } = require('../controller/user')

router.post('/login', login);
router.post('/register', register)

module.exports = router