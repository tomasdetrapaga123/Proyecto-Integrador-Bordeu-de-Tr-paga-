var express = require('express');
var router = express.Router();
var controller = require('../controllers/usersControllers');
var controllers = require('../controllers/indexControllers');

router.get('/', controller.profile)
router.get('/profile-edit', controller.profileEdit)
router.get('/search', controllers.search);       
router.get('/login', controller.login);       
router.post('/authenticate', controller.authenticate);       



/* GET users listing. */


module.exports = router;
