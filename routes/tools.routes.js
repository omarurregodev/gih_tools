const express = require('express');

const toolsController = require('../controllers/pazysalvo.controller');

const router = express.Router();

//paz y salvo
router.get('/paz_y_salvos/panel', toolsController.getPanel);


module.exports = router;