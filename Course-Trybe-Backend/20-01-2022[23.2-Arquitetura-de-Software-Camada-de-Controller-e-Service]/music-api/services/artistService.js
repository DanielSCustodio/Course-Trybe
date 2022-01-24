const artistModel = require('../models/artistModel');
const songModel = require('../models/songModel');

const getAll = async () => {
  const artists = await artistModel.getAll();

  return artists;
}

const update = async ({ id, name, genre }) => {
  const artist = await artistModel.update({ id, name, genre });
  return artist;
}

const remove = async () => {
  await artistModel.remove(id);
}

const createWithSongs = async ({ name, genre, songs}) => {
  const artist = await artistModel.create({ name, genre });

  const songsPromises = songs.map(async (song) => {
    await songModel.create({ 
      name: song.name, 
      album: song.album, 
      artistId: artist.id
    });
  });

  await Promise.all(songsPromises);

  return { ...artist, songs };
};

module.exports = {
  getAll,
  update,
  remove,
  createWithSongs
}