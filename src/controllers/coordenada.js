const Coordenada = require('../models/coordenada');
const Poligono = require('../models/poligono');

exports.addCoordenada = async (req, res) => {
    const { id, id_poligono, codigo_vu, latitud, longitud, este, norte } = req.body;
    try {
        const coordenada = await Coordenada.create({
            id,
            id_poligono,
            codigo_vu,
            latitud,
            longitud,
            este,
            norte
        });
        return res.status(200).json(coordenada);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al crear la coordenada'
        });
    }
}

exports.addCoordenadaBulk = async (req, res) => {
    try {
        const information = req.body;
        const { codigo_vu, polygons } = information;
        const ids = polygons.map((poligono) => {
            return { codigo_vu, id: poligono.id };
        });
        await Poligono.bulkCreate(ids);

        const coordenadas = polygons.map((poligono) => {
            return poligono.coordinates.map((coordenada) => {
                return {
                    id: coordenada.id,
                    id_poligono: poligono.id,
                    codigo_vu: codigo_vu,
                    latitud: coordenada.latitude,
                    longitud: coordenada.longitude,
                    este: coordenada.easting,
                    norte: coordenada.northing
                };
            });
        });
        const coordenadasCreadas = await Coordenada.bulkCreate(coordenadas.flat());
        return res.status(200).json(coordenadasCreadas);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al crear las coordenadas'
        });
    }
}

exports.getCoordenadasByVuCode = async (req, res) => {
    const { codigo_vu } = req.params;
    try {
        const coordenadas = await Coordenada.findAll({
            where: {
                codigo_vu
            }
        });
        return res.status(200).json(coordenadas);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al obtener las coordenadas'
        });
    }
}