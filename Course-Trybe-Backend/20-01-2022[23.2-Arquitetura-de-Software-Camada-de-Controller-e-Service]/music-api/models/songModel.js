const connection = require('./connection');

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM songs');

  return rows.map((song) => ({
    id: song.id,
    name: song.name,
    album: song.album,
    artistId: song.artist_id,
  }));
};

const getById = async (id) => {
  const [rows] = await connection.execute('SELECT * FROM songs WHERE id = ?', [
    id,
  ]);
  const song = rows[0];

  return {
    id: song.id,
    name: song.name,
    album: song.album,
    artistId: song.artist_id,
  };
};

const create = async ({ name, album, artistId }) => {
  const [rows] = await connection.execute(
    'INSERT INTO songs (name, album, artist_id) VALUES (?, ?, ?)',
    [name, album, artistId]
  );
  return {
    id: rows.insertId,
    name,
    album,
    artistId,
  };
};

const update = async ({ id, name, album, artistId }) => {
  const [rows] = await connection.execute(
    'UPDATE songs SET name = ?, album = ?, artist_id = ? WHERE id = ?',
    [name, album, artistId, id]
  );
  return {
    id,
    name,
    album,
    artistId,
  };
};

const remove = async (id) => {
  await connection.execute('DELETE FROM songs WHERE id = ?', [id]);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
