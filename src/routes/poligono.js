const { Router } = require('express');
const router = Router();
const PoligonosController = require('../controllers/poligono');

router.post('/poligonos', PoligonosController.addPoligono);

module.exports = router;