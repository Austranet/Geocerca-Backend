const { Router } = require('express');
const router = Router();

const CoordenadasController = require('../controllers/coordenada');

router.post('/coordenadasBulk', CoordenadasController.addCoordenadaBulk);
router.get('/coordenadas/:codigo_vu', CoordenadasController.getCoordenadasByVuCode);
module.exports = router;