const fs = require('fs');

const lerArquivo = async (fileName) => {
  try {
    const content = await fs.promises.readFile(fileName,'utf-8');
    return content;
  } catch (error) {
    return null;
  }
}

/* const lerArquivo = (filename) => {
  return fs.promises.readFile(filename,'utf-8')
    .then((response)=> {return response})  
    .catch((error) => {return null})
} */


module.exports = {
  lerArquivo,
}

