const artistModel = require('../models/artistModel');
const songModel = require('../models/songModel');

const createWithSongs  = async ({name, genre, songs}) =>{
  const artist = await artistModel.create({name, genre});
  const songsPromise =  songs.map(async (song)=>{
    await songModel.create({
      name:song.name,
      album:song.album,
      artistId:artist.id
    });
  });
  await Promise.all(songsPromise); //executando todas as promises do map
  return {...artist, songs}
}

const getAll = async () => {
  const artists = await artistModel.getAll();
  return artists;
}

module.exports ={
  createWithSongs,
  getAll,
}