var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexControllers');
const usersRouter = require('../routes/users')
const productsRouter = require('../routes/products')

/* GET home page. */
router.get('/', controller.index);
router.get('/index', controller.index);
router.get('/register', controller.register);
router.get('/login', controller.login);
router.get('/search', controller.search);
router.use('/users', usersRouter);
router.use('/product', productsRouter);


module.exports = router;
