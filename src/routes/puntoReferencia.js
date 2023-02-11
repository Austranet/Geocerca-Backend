const { Router } = require('express');
const router = Router();
const PuntoReferenciaController = require('../controllers/puntoReferencia');

router.get('/puntosReferencia/:codigo_vu', PuntoReferenciaController.getWayPointsByVuCode);
router.post('/puntosReferencia', PuntoReferenciaController.addWayPointsBulk);

module.exports = router;


