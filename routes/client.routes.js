const express = require('express');

const clientController = require('../controllers/client.controller');

const router = express.Router();


router.get('/client-side', clientController.getClientSide);
router.post('/solicitud_paz_y_salvo', clientController.postSolicitudPP);


module.exports = router;