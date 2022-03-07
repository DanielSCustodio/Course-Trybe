import { ResultSetHeader } from "mysql2";
import { User } from "../interfaces/userInterface";
import connection from "./connection";

const getaAll = async(): Promise<User[]> =>{
  const [result] = await connection.query('SELECT * FROM Users')
  let  users = result  as User[]; // convertendo para um array da Interface
  return users;
}

const create = async (user: User):Promise<User> =>{
  const {username, email, password} = user;
  const sql = 'INSERT INTO Users (username, email, password) VALUES (?, ?, ?)';
  const [{insertId:id}] = await connection.query<ResultSetHeader>(sql,[username, email, password]);
  return {id, username, password, email}
/*   const [result] = await connection.query(sql,[username, email, password]);
  const {insertId} = result as ResultSetHeader;
  return {id:insertId, username, password, email}; */
}

export default {
  getaAll,
  create,
}