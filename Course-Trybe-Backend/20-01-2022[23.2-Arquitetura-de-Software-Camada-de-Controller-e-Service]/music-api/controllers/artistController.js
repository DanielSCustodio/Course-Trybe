const artistService = require('../services/artistService');

const getAll = async (req, res) => {
  const artists = await artistService.getAll();
  res.status(200).json(artists);
}

module.exports ={
  getAll,
}