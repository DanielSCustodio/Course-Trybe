const artistModel = require('../models/artistModel');
const songModel = require('../models/songModel');


const getAll = async () => {
  const musics = await songModel.getAll();

  return musics;
}

const update = async ({ id, name, genre }) => {
  const artist = await songModel.update({ id, name, genre });
  return artist;
}

const remove = async () => {
  await songModel.remove(id);
}


const createWithArtist = async ({ name, album, artist}) => {
  let artistFound = await artistModel.getByName(artist.name);

  if (!artistFound) {
    console.log('Criar artista!');
    artistFound = await artistModel.create(artist)
  };
  
  const newSong = await songModel.create({ name, album, artistId: artistFound.id});

  return { id: newSong.id, name, album, artist };
};

module.exports = {
  createWithArtist,
  getAll,
  update,
  remove,
}

