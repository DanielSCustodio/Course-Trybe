const connection = require('./connection');

const add = async (name, age) => {
  const [result] = await connection.query(
    `INSERT INTO people (name, age) VALUES (?, ?);`,
    [name, age]
  )
  return {
    id: result.insertId,
    name,
    age
  };
}

const getAll = async () => {
  const [result] = await connection.execute(
    `SELECT * FROM people;`
  )
  return result;
}


const getById = async (id) => {
  const [result] = await connection.query(
    `SELECT * FROM people WHERE id = ?;`,
    [id]
  );
  if (!result.length) return null;
  return result[0];
}

const update = async (name, age, id) => {
  const [rows] = await connection.query(
    `UPDATE people SET name = ?, age = ? WHERE id = ?;`,
    [name, age, id]
  );
  return {
    name,
    age,
    id
  }
}

const remove = async (id) => {
  const people = await getById(id);
  if (!people) return null;
  await connection.query(
    `DELETE FROM people WHERE id = ?;`,
    [id]
  );
  return people;
}

module.exports = {
  add,
  getAll,
  getById,
  update,
  remove
}