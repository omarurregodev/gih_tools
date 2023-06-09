const express = require('express');

const pazysalvoController = require('../controllers/pazysalvo.controller');

const router = express.Router();

//paz y salvo
router.get('/paz_y_salvos/panel', pazysalvoController.getPanel);
router.post('/paz_y_salvos/editar_solicitud', pazysalvoController.editarSolicitud);

module.exports = router;