var express = require('express');
var router = express.Router();
var controller = require('../controllers/usersControllers');

router.get('/', controller.profile)
router.get('/profile-edit', controller.profileEdit)

/* GET users listing. */


module.exports = router;
