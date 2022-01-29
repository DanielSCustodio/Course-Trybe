const productsModel = require('../models/productsModel');

const create = async ({ name, quantity }) => {
  const newProduct = await productsModel.create(name, quantity);
  return newProduct;
};
const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getById = async (id) => {
  const product = await productsModel.getById(id);
  return product;
};

const getByName = async (id) => {
  const product = await productsModel.getById(id);
  return product;
};

const update = async ({ name, quantity, id }) => {
  const product = await productsModel.update(name, quantity, id);
  return product;
};

const remove = async (id) => {
  const product = await productsModel.remove(id);
  return product;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByName,
};
