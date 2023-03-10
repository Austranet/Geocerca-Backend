const Poligono = require('../models/poligono');


exports.addPoligono = async (req, res) => {
    const { id, codigo_vu } = req.body;
    try {
        const poligono = await Poligono.create({
            id,
            codigo_vu
        });
        return res.status(200).json(poligono);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al crear el polígono'
        });
    }
}

exports.addPoligonoBulk  = async  (poligonos) => {
    try {
        const { codigo_vu, polygons} = poligonos;
        //recorre el array de poligonos con map y retorna un objeto con el codigo_vu y el id del poligono
        const ids = polygons.map((poligono) => {
            return { codigo_vu, id: poligono.id };
        });
        await Poligono.bulkCreate(ids);
    }
    catch (error) {
        console.log(error);
        throw new Error('Error al crear los polígonos');
    }
}



exports.getPoligonos = async (req, res) => {
    try {
        const poligonos = await Poligono.findAll();
        return res.status(200).json(poligonos);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al obtener los establecimientos'
        });
    }
}