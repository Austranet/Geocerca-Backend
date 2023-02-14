const Establecimiento = require('../models/establecimiento');

/**
 * @swagger
 *components:
 *  schemas:
 *    Establecimiento:    # Schema name
 *      type: object
 *      properties:
 *        codigo_vu:
 *          type: integer
 *          example: 5452292
 *        nombre_est:
 *          type: string
 *          example: GUACOLDA
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
 *        huso:
 *          type: integer
 *          example: 18
 */

/**
 * @swagger
 * /establecimientos:
 *   get:
 *     summary: este método muestra todos los establecimientos
 *     tags: [Establecimiento]
 *     responses:
 *       200:
 *          description: Muestra todos los establecimientos
 *          content:
 *            application/json:
 *              schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Establecimiento'          
 *       500:
 *         description: Error al cargar los establecimientos
 */
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