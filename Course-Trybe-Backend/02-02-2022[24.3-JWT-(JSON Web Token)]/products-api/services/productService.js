const {Product, Category} = require('../models/'); // O model Product está dentro do arquivo index.js, pois ele faz a leitura de todos dos models

const getAll = async () =>{
/*   const products = await Product.findAll();
 */  
  const categories = await Category.findAll();
  return categories;
}

const getById = async (id) => {
  // TODO: Substituir pela busca de um produto com o model
const product = Product.findByPk(id)

  if (!product) {
    const error = new Error();
    error.message = 'Product not found';
    error.code = 'NotFound';
    throw error;
  }

  return product;
};

const create = async (name, description) => {
  // TODO: Substituir pela criação do produto com o model
  const product = await Product.create({name, description});
  return product;
};

const update = async (id, name, description) => {
  // TODO: Substituir pela atualização do produto com o model
  const product = id === '1'
      ? {
          id,
          name: `FAKE: ${name}`,
          description: `FAKE: ${description}`,
        }
      : null;

  if (!product) {
    const error = new Error();
    error.message = 'Product not found';
    error.code = 'NotFound';
    throw error;
  }

  return product;
};

const destroy = async (_id) =>
  // TODO: Substituir pela exclusão do produto com o model
  undefined;

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy,
};