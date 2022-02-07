//Instalação npm i sequelize mysql2
const {Sequelize, DataTypes} = require('sequelize');
/* const buildModelProduct = require('./Product'); */

const sequelize = new Sequelize({
  host:'localhost',
  username:'root',
  password:'Somenteeu2*',
  database:'lecture_24_1',
  dialect:'mysql'
});


const Product = require('./Product')(sequelize, DataTypes); // criando instância
/* const Product = buildModelProduct(sequelize, DataTypes); // criando instância */
Product.findAll().then(rows => console.log(rows.length))

module.exports = { Product };
