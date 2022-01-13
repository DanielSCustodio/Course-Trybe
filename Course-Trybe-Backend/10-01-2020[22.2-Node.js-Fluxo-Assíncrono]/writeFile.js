const fs = require('fs').promises;

fs.writeFile('./file1.txt', 'Leinad')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });