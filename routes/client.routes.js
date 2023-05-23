const express = require('express');

const clientController = require('../controllers/client.controller');

const router = express.Router();


router.get('/solicitud_paz_y_salvo', clientController.getInterfazPazSalvo);
router.post('/validar_paz_y_salvo', clientController.validarPazSalvo);
//router.post('/enviar_codigo_paz_y_salvo', clientController.enviarCodigoPazSalvo);
//router.post('/validar_codigo_paz_y_salvo', clientController.validarCodigoPazSalvo);
router.get('/validar_pago_paz_y_salvo', clientController.validarPagoPazSalvo);
router.get('/validar_estado_paz_y_salvo', clientController.validarEstadoPazSalvo);


module.exports = router;