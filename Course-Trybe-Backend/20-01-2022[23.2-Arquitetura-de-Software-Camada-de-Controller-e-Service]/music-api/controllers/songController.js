const songService = require('../services/songService');

const getAll = async (req, res) => {
  const songs = await songService.getAll();
  res.status(200).json(songs);
};

const create = async (req, res) => {
  const { name, album, artist } = req.body;
  const song = await songService.createWithArtist({name, album, artist });
  res.status(201).json(song);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, album, artistId } = req.body;

  const song = await songService.update({ id, name, album, artistId });

  res.status(200).json(song);
}

const remove =  async (req, res) => {
  const { id } = req.params;
  await songService.remove(id);
  res.status(204).end();
}

module.exports = {
  getAll,
  create,
  update,
  remove,
}