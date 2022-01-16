const express = require ('express');
const bodyParser = require('body-parser');

const ping = require('./middlewares/pingMiddleware');
const hello = require('./middlewares/hello');
const createSimpson = require('./middlewares/createSimpson'); 
const validateIdSimpson = require('./middlewares/validateIdSimpson');

const app = express();
app.use(bodyParser.json());

app.get('/ping', ping);
app.post('/hello', hello);
/* app.use(validateIdSimpson)// Validação para todas as rotas abaixos*/
app.post('/simpsons', validateIdSimpson, createSimpson);


app.listen(3000);