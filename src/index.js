const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT || 9000);
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});

app.use(require('./routes/establecimiento'));