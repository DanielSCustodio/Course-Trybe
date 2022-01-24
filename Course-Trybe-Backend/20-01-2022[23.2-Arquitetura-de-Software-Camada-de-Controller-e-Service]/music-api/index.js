const express = require('express');
const bodyParser = require('body-parser');

const artistController = require('./controllers/artistController');
const songsController = require('./controllers/songController');

const app = express();
app.use(bodyParser.json());

app.get('/artists', artistController.getAll);
app.post('/artists', artistController.create);
app.put('/artists/:id', artistController.update);
app.delete('/artists/:id', artistController.remove);

app.get('/songs', songsController.getAll);
app.post('/songs', songsController.create);
app.put('/songs/:id', songsController.update);
app.delete('/songs/:id', songsController.remove);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
