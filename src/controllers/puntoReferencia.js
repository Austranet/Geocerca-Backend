const PuntoReferencia = require('../models/puntoReferencia');

exports.getWayPointsByVuCode = async (req, res) => {
    const { codigo_vu } = req.params;
    try {
        const puntosReferencia = await PuntoReferencia.findAll({
            where: {
                codigo_vu: codigo_vu
            }
        });
        return res.status(200).json(puntosReferencia);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al obtener los puntos de referencia'
        });
    }
}

exports.addWayPointsBulk = async (req, res) => {
    try {
        const waypoints = req.body;
        const puntosReferenciaCreados = await PuntoReferencia.bulkCreate(waypoints);
        return res.status(200).json(puntosReferenciaCreados);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al crear los puntos de referencia'
        });
    }
}
