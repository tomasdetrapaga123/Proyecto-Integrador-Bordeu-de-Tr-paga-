const express = require('express');
const router = express.Router()
const maqueta = require('../maqueta')
const maquetasController = require('../controllers/maquetasController')

router.get('/', maquetasController.index)


module.exports = router;