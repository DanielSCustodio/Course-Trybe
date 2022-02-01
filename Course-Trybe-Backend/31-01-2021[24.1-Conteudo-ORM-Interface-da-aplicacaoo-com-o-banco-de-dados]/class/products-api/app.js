// sequelize para desenvolvimento: npm i sequelize-cli -D
// ver os comandos do sequelize: npx sequelize
// iniciando projeto: npx sequelize init
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
