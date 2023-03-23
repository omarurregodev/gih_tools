const express = require('express');

const toolsController = require('../controllers/tools.controller');

const router = express.Router();

router.get('/paz_y_salvo', toolsController.getToolPazSalvo);


module.exports = router;