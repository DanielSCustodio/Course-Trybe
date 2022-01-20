const express = require('express');
const bodyParser = require('body-parser');
const {getAll, create, getById}=require('./models/charactersModel');

const app = express();
app.use(bodyParser.json())

app.get('/characters',async  (_req, res)=> {
  const characters = await getAll();
  res.status(200).json(characters);
});

app.get('/characters/:id', async (req, res) => {
  const { id } = req.params;
  const characters = await getById(id);
  res.status(200).json(characters);
});

app.post('/characters', async (req, res)=> {
  const {name, cartoon} = req.body;
  const character = await create(name, cartoon);
  res.status(201).json(character);
});



const PORT  = process.env.PORT || '3001';
app.listen(PORT)