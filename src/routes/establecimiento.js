const { Router } = require('express');
const router = Router();
const EstablecimientosController = require('../controllers/establecimiento');

router.get('/establecimientos', EstablecimientosController.getEstablecimientos);
router.get('/establecimientos/:codigoVu', EstablecimientosController.getEstablecimientoByVU);
module.exports = router;
