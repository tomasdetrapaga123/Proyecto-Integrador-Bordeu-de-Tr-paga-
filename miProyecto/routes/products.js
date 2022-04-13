var express = require('express');
var router = express.Router();
var controller = require('../controllers/productsControllers')

router.get('/:id', controller.products)
router.get('/product-add', controller.productAdd)



module.exports = router;