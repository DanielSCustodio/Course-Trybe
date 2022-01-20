const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user:'root-daniel',
  password:'Somenteeu2*',
  host:'localhost',
  database:'model_example',
});

module.exports=connection; 