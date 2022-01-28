const rescue = require('express-rescue'); // captura o erro
const products = require('express').Router();
const productsService = require('../services/productsService');
const { productSchema } = require('./middlewares/validationSchema');
const { sendResponse } = require('./middlewares/responseError');

products.post('/',
  rescue(async (req, res) => {
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
  }));

products.get('/',
  rescue(async (_req, res) => {
    const allProducts = await productsService.getAll();
    res.status(200).json(allProducts);
}));

products.put('/:id',
rescue(async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const person = await productsService.update({ id, name, quantity });
  res.status(200).json(person);
}));

products.delete('/:id',
  rescue(async (req, res) => {
    const { id } = req.params;
    const product = await productsService.remove(id);
    res.status(200).json(product);
  }));

  module.exports = products;