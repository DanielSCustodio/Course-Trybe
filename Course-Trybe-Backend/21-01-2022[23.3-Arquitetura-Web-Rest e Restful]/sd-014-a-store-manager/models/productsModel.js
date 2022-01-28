const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.query(
    'SELECT * FROM products;',
  );
  return result;
};

const create = async (name, quantity) => {
  const [result] = await connection.query(
    'INSERT INTO products (name, quantity) VALUES (?, ?);',
    [name, quantity],
  );
  return {
    id: result.insertId,
    name,
    quantity,
  };
};

const getById = async (id) => {
  const [result] = await connection.query(
    'SELECT * FROM products WHERE id = ?;',
    [id],
  );
  return result[0];
};

const update = async (name, quantity, id) => {
  await connection.query(
    'UPDATE products SET name = ?, quantity = ? WHERE id = ?;',
    [name, quantity, id],
  );
  return { // criar variável para fazer o return
    id,
    name,
    quantity,
  };
};

const remove = async (id) => {
  const products = await getById(id);
  await connection.query(
    'DELETE FROM products WHERE id = ?;',
    [id],
  );
  return products;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
