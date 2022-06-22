var express = require('express');
var router = express.Router();
var userController = require('../controllers/usersControllers');
var indexController = require('../controllers/indexControllers');

let multer = require('multer');
let path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/users/'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
var upload = multer({ storage: storage })


router.get('/profile/:id', userController.profile)

router.get('/profile-edit/:id', userController.profileEdit)
router.get('/search', indexController.search);       
router.get('/login', userController.login);  // Me va a mostrar el formulario de registro unicamente
router.post('/login', userController.procesarLogin);  // Me va a procesar los datos
router.get('/register', userController.register);
router.post('/register',upload.single("img"), userController.procesarRegister)
router.post('/edit',upload.single("img"), userController.editar)
router.get('/logout', userController.logout)



/* GET users listing. */


module.exports = router;
