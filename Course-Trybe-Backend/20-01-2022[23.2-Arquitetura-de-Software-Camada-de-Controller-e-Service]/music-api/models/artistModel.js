const connection = require('./connection');

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM artists');
  return rows;
};

const getById = async (id) => {
  const [rows] = await connection.execute(
    'SELECT * FROM artists WHERE id = ?',
    [id]
  );
  return rows[0];
};

const getByName = async (name) => {
  const [rows] = await connection.execute(
    'SELECT * FROM artists WHERE name = ?',
    [name]
  );
  return rows[0];
};

const create = async ({ name, genre }) => {
  const [rows] = await connection.execute(
    'INSERT INTO artists (name, genre) VALUES (?, ?)',
    [name, genre]
  );
  return {
    id: rows.insertId,
    name,
    genre,
  };
};

const update = async ({ id, name, genre }) => {
  const [rows] = await connection.execute(
    'UPDATE artists SET name = ?, genre = ? WHERE id = ?',
    [name, genre, id]
  );
  return {
    id,
    name,
    genre,
  };
};

const remove = async (id) => {
  await connection.execute('DELETE FROM artists WHERE id = ?', [id]);
};

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  update,
  remove,
};
