//instalando express: npm i expressnpm i nodemon -D
//auto save: npm i nodemon -D - adicionar no package.json = "dev": "nodemon index.js"
//para rodar a aplicação: npm run dev

const express = require('express');

const app = express(); // 1

app.all('/', handleHelloWorldRequest); // 2

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
}); // 3

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Olá, mundico pequeno!'); // 4
}