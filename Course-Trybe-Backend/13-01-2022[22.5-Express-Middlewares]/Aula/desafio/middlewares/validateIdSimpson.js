const fs = require('fs').promises;

const validateIdSimpson = async (req, res, next) => {
  const {id} = req.body;
  const simpsons = await fs.readFile('./simpsons.json','utf-8')
  .then((response)=> JSON.parse(response))  //transformando em um array JSON

  const simpson = simpsons.find((simpson)=>(simpson.id === +id));
  if(simpson) return res.status(500).json({message: 'Não é possível cadastrar esse simpson!'})
    next();
}

module.exports = validateIdSimpson;