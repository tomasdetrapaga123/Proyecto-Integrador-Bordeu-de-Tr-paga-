var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexControllers')

/* GET home page. */
router.get('/', controller.index)
router.get('/register', controller.register)
router.get('/login', controller.login)
router.get('/search', controller.search)
router.get('/product', controller.products)

module.exports = router;








