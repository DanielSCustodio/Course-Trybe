const fs = require('fs').promises;

const createSimpson = async (req,res) => {
  const {id, name} = req.body;
  const simpsons = await fs.readFile('./simpsons.json','utf-8')
  .then((response) => JSON.parse(response)); //transformando em um array JSON
  simpsons.push({id, name});
  await fs.writeFile('./simpsons.json', JSON.stringify(simpsons));
  res.status(201).json({ message: 'Simpson criado com sucesso!'});
  
}
module.exports=createSimpson; 
