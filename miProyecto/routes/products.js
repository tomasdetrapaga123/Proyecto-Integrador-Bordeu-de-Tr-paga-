var express = require('express');
var router = express.Router();
var controller = require('../controllers/productsControllers')

/* Importaciones */
let multer = require('multer');
let path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/products/'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

  router.get('/product-add', controller.productAdd)
  router.post('/product-add', upload.single("shirt_image"),controller.productCreate)
  router.post('/edit', upload.single("shirt_image"),controller.productEdit)
  router.post('/delete/:id',controller.delete)
  router.get('/edit/:id',controller.edit)
  router.post('/comment', controller.createComment)
  router.get('/:id', controller.products)



module.exports = router;