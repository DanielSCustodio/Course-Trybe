// CAMADA DE CONTROLLER

const express = require('express');
const bodyParser = require('body-parser');
const artistService = require('./services/artistService');
const songsService = require('./services/songsService');


const artistModel = require('./models/artistModel');
const songModel = require('./models/songModel');

const artistController = require('./controllers/artistController')


const app = express();
app.use(bodyParser.json());

app.get('/artists',artistController.getAll );

app.post('/artists', async(req, res)=>{
  const {name, genre, songs}=req.body;
  const artist  = await artistService.createWithSongs({name, genre, songs}); // Passar parâmetros em um obejto para ser possível passar mais de 5 itens
  res.status(201).json(artist);
});

app.put('/artists/:id', async(req, res)=>{
  const {id} = req.params;
  const {name, genre} = req.body;
  const artist = await artistModel.update({id, name, genre});
  res.status(200).json(artist);
});

app.delete('/artists/:id', async(req,res)=>{
  const {id} = req.params;
  await artistModel.remove(id);
  res.status(204).end();
});

app.get('/songs', async(req, res)=>{
  const songs = await songModel.getAll();
  res.status(200).json(songs);
});

app.post('/songs', async(req, res)=>{
  const {name, album, artist} = req.body;
  const song = await songsService.createWithArtist({name, album, artist})
  res.status(201).json(song);
});

app.put('/songs/:id', async (req, res)=>{
  const {id} = req.params;
  const {name, album, artistId} = req.body;
  const song = await songModel.update({id, name, album, artistId});
  res.status(200).json(song)
});
app.delete('/songs/:id', async(req, res)=>{
  const {id} = req.params;
  await songModel.remove(id);
  res.status(204).end();
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
