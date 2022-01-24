const artistService = require('../services/artistService');

const getAll = async (req, res) => {
  const artists = await artistService.getAll();
  res.status(200).json(artists);
};

const create = async (req, res) => {
  const { name, genre, songs } = req.body;
  
  const artist = await artistService.createWithSongs({ name, genre, songs});
  
  res.status(201).json(artist);
}

const update = async (req, res) => {
  const { id } = req.params;
  const { name, genre } = req.body;

  const artist = await artistService.update({ id, name, genre });

  res.status(200).json(artist);
}


const remove = async (req, res) => {
  const { id } = req.params;
  await artistService.remove(id);
  res.status(204).end();
}

module.exports = {
  getAll,
  create,
  update,
  remove,
}