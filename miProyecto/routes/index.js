var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexControllers');
var controllers = require('../controllers/productsControllers')

/* GET home page. */
router.get('/', controller.index);
router.get('/index', controller.index);
router.get('/register', controller.register);
router.get('/login', controller.login);
router.get('/search', controller.search);
router.get('/product-add', controllers.productAdd)



module.exports = router;
