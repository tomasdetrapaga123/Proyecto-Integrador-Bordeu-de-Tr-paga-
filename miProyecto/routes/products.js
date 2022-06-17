var express = require('express');
var router = express.Router();
var controller = require('../controllers/productsControllers')

router.get('/:id', controller.products)

router.post('/product-add', controller.productCreate)



module.exports = router;