const mysql  = require('mysql2/promise');

const connection = mysql.createPool({
  user:'root-daniel',
  password:'Somenteeu2*',
  host:'localhost',
  database:'live_lecture_23_1'
});

module.exports = connection;