var express = require('express');
var router = express.Router();
var userController = require('../controllers/usersControllers');
var indexController = require('../controllers/indexControllers');

router.get('/', userController.profile)
router.get('/profile-edit', userController.profileEdit)
router.get('/search', indexController.search);       
router.get('/login', userController.login);  // Me va a mostrar el formulario de registro unicamente
router.post('/login', userController.procesarLogin);  // Me va a procesar los datos
router.get('/register', userController.register);
router.post('/register', userController.procesarRegister)



/* GET users listing. */


module.exports = router;
