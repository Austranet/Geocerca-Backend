const { Router } = require('express');
const router = Router();
const routesIndex = (req, res) => {
    //create html page
    res.send(`
        <h1>Routes</h1>
        <ul>
            <li><a href="/establecimientos">Establecimientos</a></li>
<!--            <li><a href="/coordenadas">Coordenadas</a></li>-->
        </ul>
    `);
}

router.get('/', routesIndex);

module.exports = router;