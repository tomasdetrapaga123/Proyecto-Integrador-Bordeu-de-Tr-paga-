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

router.get('/:id', controller.products)

router.post('/product-add', upload.single("shirt_image"),controller.productCreate)



module.exports = router;