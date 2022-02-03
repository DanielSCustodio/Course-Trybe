const Product = require('../models/Product');

const getAll = async () =>{
  const products = await Product.findAll();
  return products;
}

const getById = async (id) => {
  // TODO: Substituir pela busca de um produto com o model
  const product = id === '1'
      ? {
          id,
          name: 'fake product',
          description: 'fake product description',
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

const create = async (name, description) => {
  // TODO: Substituir pela criação do produto com o model
  const product = {
    id: 1,
    name: `FAKE: ${name}`,
    description: `FAKE: ${description}`,
  };

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