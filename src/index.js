const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT || 3000);


app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});

console.log('...');

app.use(require('./routes/home'))
app.use(require('./routes/establecimiento'));
app.use(require('./routes/poligono'));
app.use(require('./routes/coordenada'));
app.use(require('./routes/puntoReferencia'));
