const { Router } = require('express');
const router = Router();
const PoligonosController = require('../controllers/poligono');

router.post('/poligonos', PoligonosController.addPoligono);
router.get('/allPoligonos', PoligonosController.getPoligonos);

module.exports = router;