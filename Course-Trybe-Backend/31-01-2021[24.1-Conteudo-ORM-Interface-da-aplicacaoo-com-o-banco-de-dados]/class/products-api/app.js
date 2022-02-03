const express = require('express');
const bodyParser = require('body-parser');

const productController = require('./controllers/productController');
const middlewares = require('./middlewares');

const app = express();

app.use(bodyParser.json());

app.use('/products', productController);

app.use(middlewares.joiError);
app.use(middlewares.domainError);
app.use(middlewares.serverError);

module.exports = app;