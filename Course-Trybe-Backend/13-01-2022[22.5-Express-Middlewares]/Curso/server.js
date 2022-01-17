const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // é necessaŕio para ter acesso ao body, as infos enviadas pelos usuarios
/* 
app.use(bodyParser.json()); */

app.post('/hello', (req, res) => {
  const {name} = req.body;
  // req.body agora está disponível
  res.status(200).json({ greeting: `Olá, ${name}!` });
});

app.listen(3000, () => { console.log('Ouvindo na porta 3000'); });