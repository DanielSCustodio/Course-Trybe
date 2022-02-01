const moldes = require('./models');
const main = async ()=> {
  /* Product.sync()// Cria a tabela */
  /*  await Product.create({name:'Televisao', price:500, description:'É grande (:)'}); */
  /* const id = await Product.findByPk(1); */
  /*   console.log(id.dataValues); */

  const products = await moldes.Product.findAll();
  console.log(products.map((product) => product.dataValues));
}

main();
