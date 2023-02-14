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
        //obtiene los puntos desde el frontend
        const waypoints = req.body; 
        //añade los puntos creados en la Base de Datos
        const puntosReferenciaCreados = await PuntoReferencia.bulkCreate(waypoints); 
        // manda una respuesta json de los puntos creados.
        return res.status(200).json(puntosReferenciaCreados); 
    } catch (error) {
        //manda un error referencial de no poder crear los puntos 
        console.log(error);
        res.status(500).json({
            msg: 'Error al crear los puntos de referencia'
        });
    }
}
