const products = require('express').Router();
const productsService = require('../services/productsService');
const validationProduct = require('./middlewares/validationProduct');

const createProduct = async (req, res) => {
    const { name, quantity } = req.body;
    const newProduct = await productsService.create({ name, quantity });
    return res.status(201).json(newProduct);
};

const getAllProducts = async (_req, res) => {
    const allProducts = await productsService.getAll();
    return res.status(200).json(allProducts);
};

const getByIdProduct = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.getById(id);
  return res.status(200).json(product);
}; 

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const product = await productsService.update({ id, name, quantity });
  return res.status(200).json(product);
};

const removeProduct = async (req, res) => {
    const { id } = req.params;
    const product = await productsService.remove(id);
    return res.status(200).json(product);
};

products.post('/',
  validationProduct.checkBody,
  validationProduct.checkName,
  createProduct);

products.get('/',
  getAllProducts);

products.put('/:id',
  validationProduct.checkBody,
  validationProduct.checkId,
  updateProduct);

products.get('/:id',
  validationProduct.checkId,
  getByIdProduct);

products.delete('/:id',
  validationProduct.checkId,
  removeProduct);

module.exports = products;