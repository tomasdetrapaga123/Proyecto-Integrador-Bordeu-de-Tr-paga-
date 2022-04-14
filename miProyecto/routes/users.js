var express = require('express');
var router = express.Router();
var controller = require('../controllers/usersControllers');
var controllers = require('../controllers/indexControllers');

router.get('/', controller.profile)
router.get('/profile-edit', controller.profileEdit)
router.get('/search', controllers.search);


/* GET users listing. */


module.exports = router;
