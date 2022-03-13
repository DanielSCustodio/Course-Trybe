import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOSTNAME,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
});

export default connection;