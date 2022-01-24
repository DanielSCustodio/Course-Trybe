const musicService = require('./services/musicService');


const main = async () => {
  const artist = { name: 'The Beatles', genre: 'Rock' };

  const song = { name: 'Come Together', album: 'Abbey Road', artist};

  const newSong = await musicService.createWithArtist(song);

  console.log(newSong);
}

main();