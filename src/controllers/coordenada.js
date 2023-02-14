const Coordenada = require("../models/coordenada");
const Poligono = require("../models/poligono");


/**
 * @swagger
 *components:
 *  schemas:
 *    Coordenada:    # Schema name
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          example: 1
 *        id_poligono:
 *          type: integer
 *          example: 1
 *        codigo_vu:
 *          type: integer
 *          example: 5432  # Property exampl
 *        latitud:
 *          type: long
 *          example: -23.06858082
 *        longitud:
 *          type: long
 *          example: -70.3687702
 *        este:
 *          type: long
 *          example: 359788
 *        norte:
 *          type: long
 *          example: 7448232
 */
exports.addCoordenada = async (req, res) => {
  const { id, id_poligono, codigo_vu, latitud, longitud, este, norte } =
    req.body;
  try {
    const coordenada = await Coordenada.create({
      id,
      id_poligono,
      codigo_vu,
      latitud,
      longitud,
      este,
      norte,
    });
    return res.status(200).json(coordenada);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al crear la coordenada",
    });
  }
};

/**
 * @swagger
 * /coordenadasBulk:
 *   post:
 *     summary: este método añade una nueva coordenada al poligono
 *     tags: [Coordenada]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Coordenada'
 *     responses:
 *       200:
 *          description: Successful operation
 *          content:
 *            application/json:
 *              schema:
 *               $ref: '#/components/schemas/Coordenada'          
 *       500:
 *         description: Error al crear la coordenada
 */

exports.addCoordenadaBulk = async (req, res) => {
  try {
    const information = req.body;
    const { codigo_vu, polygons } = information;

    console.log("hola");

    console.log(polygons);
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
          norte: coordenada.northing,
        };
      });
    });
    const coordenadasCreadas = await Coordenada.bulkCreate(coordenadas.flat());
    return res.status(200).json(coordenadasCreadas);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al crear las coordenadas",
    });
  }
};

exports.getCoordenadasByVuCode = async (req, res) => {
  const { codigo_vu } = req.params;
  try {
    const coordenadas = await Coordenada.findAll({
      where: {
        codigo_vu,
      },
    });
    return res.status(200).json(coordenadas);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al obtener las coordenadas",
    });
  }
};
