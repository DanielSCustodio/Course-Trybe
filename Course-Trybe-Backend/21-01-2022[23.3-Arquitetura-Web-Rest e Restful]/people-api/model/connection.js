const mysql = require('mysql2/promise');
const connection = mysql.createPool(
  {
    host:'localhost',
    user:'root',
    password:'Somenteeu2*',
    database:'rest_aula',
  }
);


module.exports= connection;