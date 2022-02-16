// consulta: https://docs.microsoft.com/pt-br/sql/t-sql/functions/current-timestamp-transact-sql?view=sql-server-ver15
const connection = require('./connection');

const createSale = async () => {
  const result = await connection.query(
    'INSERT INTO sales (date) VALUES (CURRENT_TIMESTAMP());',
  );
  return result;
};

const create = async (saleId, productId, quantity) => {
  const result = await connection.query(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);',
    [saleId, productId, quantity],
  );  
  return result;
};

const getAll = async () => {
  const [result] = await connection.query(
    `SELECT sp.sale_id AS saleId, sl.date, sp.product_id, sp.quantity
    FROM StoreManager.sales_products as sp 
    JOIN StoreManager.sales as sl 
    ON sl.id = sp.sale_id;`,   
  );
  // sp.sale_id AS saleId = Muda o nome diretamente no Json de saída
  return result;
};

const getById = async (id) => {
  const [result] = await connection.query(
    `SELECT sl.date, sp.product_id,sp.quantity
    FROM StoreManager.sales_products as sp
    JOIN StoreManager.sales as sl
    ON sl.id = sp.sale_id
    WHERE sl.id  = ?;`,
    [id],
  );
  return result;
};

const getId = async (id) => {
  const [result] = await connection.query(
    'SELECT * FROM sales_products WHERE sale_id = ?;',
    [id],
  );
  return result[0];
};

const update = async (id, request) => {
  const [{ product_id: productId, quantity }] = request; // Muda o nome somente para operaçẽos do Javascript o Json continua com o valor original do BD
  const result = connection.query(
    `UPDATE StoreManager.sales_products SET quantity = ?, product_id = ?
    WHERE sale_id= ?;`,
    [quantity, productId, id],
  );
  return result;
};

const remove = async (id) => {
  const result = await connection.query(
    'DELETE FROM sales WHERE id = ?;',
    [id],
  );
  return result;
};

module.exports = {
  createSale,
  create,
  getAll,
  getById,
  getId,
  update,
  remove,
};
