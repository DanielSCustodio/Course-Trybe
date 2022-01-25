const artistModel = require('../models/artistModel');
const songModel = require('../models/songModel');

const createWithArtist = async ({name, album, artist}) => {
  let artistFound = await artistModel.getByName(artist.name);
  if(!artistFound){
    artistFound = await artistModel.create(artist);
  }

  const newSong = await songModel.create({name, album, artistId:artistFound.id})
  return {id: newSong.id, name, album, artist}
}

module.exports = {
  createWithArtist,
}