const router = require('express').Router();
const rescue = require('express-rescue');
const Joi = require('joi');

const productService = require('../services/productService');
const { validateWithJoi } = require('./utils/joi');

const productSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
});

router.get(
  '/',
  rescue(async (req, res) => {
    const products = await productService.getAll();

    res.status(200).json(products);
  }),
);

router.get(
  '/:id',
  rescue(async (req, res) => {
    const product = await productService.getById(req.params.id);

    res.status(200).json(product);
  }),
);

router.post(
  '/',
  rescue(async (req, res) => {
    validateWithJoi(productSchema, req.body);
    const product = await productService.create();
    return res.status(201).json(product);
  }),
);

router.put(
  '/:id',
  rescue(async (req, res) => {
    validateWithJoi(productSchema, req.body);

    const product = await productService.update(req.params.id);

    res.status(200).json(product);
  }),
);

router.delete(
  '/:id',
  rescue(async (req, res) => {
    await productService.destroy(req.params.id);

    res.status(304).end();
  }),
);

module.exports = router;