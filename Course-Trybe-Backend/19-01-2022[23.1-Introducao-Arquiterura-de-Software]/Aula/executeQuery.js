
const charactersModel = require('./models/charactersModel');
const main = async ()=> {
  await charactersModel.create('Irmão do Jorel','Irmão do Jorel');
  const characters = await charactersModel.getAll();
  console.log(characters);
/*   connection.end(); */
}

main();