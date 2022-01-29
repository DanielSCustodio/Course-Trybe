const products = require('express').Router();
const productsService = require('../services/productsService');
const { productSchema } = require('./middlewares/validationSchema');
const { sendResponse } = require('./middlewares/responseError');
const validationProduct = require('./middlewares/validationProduct');

const createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    await productSchema.validateAsync(req.body);
    const newProduct = await productsService.create({ name, quantity });
    return res.status(201).json(newProduct);
  } catch (error) {
    const err = (error.details[0]);
    const { status, message } = await sendResponse(err.message);
    return res.status(status).json({ message });
  }
};

const getAllProducts = async (_req, res) => {
    const allProducts = await productsService.getAll();
    res.status(200).json(allProducts);
};

const getByIdProduct = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.getById(id);
  res.status(200).json(product);
}; 

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;
    await productSchema.validateAsync(req.body);
    const product = await productsService.update({ id, name, quantity });
    res.status(200).json(product);
  } catch (error) {
    const err = (error.details[0]);
    const { status, message } = await sendResponse(err.message);
    return res.status(status).json({ message });
  }
};

const removeProduct = async (req, res) => {
    const { id } = req.params;
    const product = await productsService.remove(id);
    res.status(200).json(product);
};

products.post('/',
  validationProduct.checkName,
  createProduct);

products.get('/',
getAllProducts);

products.put('/:id',
  validationProduct.checkId,
  updateProduct);

products.get('/:id',
  validationProduct.checkId,
  getByIdProduct);

products.delete('/:id',
  validationProduct.checkId,
  removeProduct);

module.exports = products;