const express = require('express');
const app = express();
const port = 3000;

const apiMiddleware = require('./apiMiddleware');

/* Register middleware */
app.use(express.urlencoded());
app.use(express.json());
app.use(apiMiddleware);
app.use('/', express.static('client/dist/'));

app.use('/static/*', (req, res, next) => express.static('client/dist'))

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));