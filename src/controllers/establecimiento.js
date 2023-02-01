const Establecimiento = require('../models/establecimiento');

exports.getEstablecimientos = async (req, res) => {
    try {
        const establecimientos = await Establecimiento.findAll();
        return res.status(200).json(establecimientos);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al obtener los establecimientos'
        });
    }
}

exports.getEstablecimientoByVU = async (req, res) => {
    const { codigoVu } = req.params;
    try {
        const establecimiento = await Establecimiento.findOne({
            where: {
                codigo_vu: codigoVu
            }
        });
        return res.status(200).json(establecimiento);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al obtener el establecimiento'
        });
    }
}