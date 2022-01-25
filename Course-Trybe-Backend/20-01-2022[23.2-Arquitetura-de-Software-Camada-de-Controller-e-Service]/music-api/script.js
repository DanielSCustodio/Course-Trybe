const songsService = require('./services/songsService');

const main = async () => {
  const artist = {name:'The Beatles', genre:'Rock'};
  const song = {name:'Come Together', album:'Abbey Road', artist}
  await songsService.createWithArtist(song);
}
main();